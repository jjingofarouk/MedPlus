import React, { useState, useEffect } from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';
import { 
  Button, TextField, Select, MenuItem, Card, CardContent, CardActions, 
  Typography, IconButton, Dialog, DialogTitle, DialogContent, DialogActions,
  Snackbar, LinearProgress, Chip, Grid, Accordion, AccordionSummary, AccordionDetails,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper
} from '@material-ui/core';
import { 
  CloudUpload, CloudDownload, Edit, Delete, ExpandMore, Visibility, 
  Timeline, Assignment, Notifications, Share
} from '@mui/icons-material';
import { Alert } from '@mui/material';
import { Line } from 'react-chartjs-2';
import './Labs.css';

// GraphQL Queries & Mutations
const GET_LAB_RESULTS = gql`
  query GetLabResults($userId: ID!) {
    labResults(userId: $userId) {
      id
      labName
      result
      date
      fileUrl
      status
      notes
      referenceRange
      units
      labLocation
      orderedBy
      performedBy
    }
  }
`;

const UPLOAD_LAB_RESULT = gql`
  mutation UploadLabResult($userId: ID!, $labName: String!, $result: String!, $date: String!, $file: Upload!, $notes: String, $referenceRange: String, $units: String, $labLocation: String, $orderedBy: String, $performedBy: String) {
    uploadLabResult(userId: $userId, labName: $labName, result: $result, date: $date, file: $file, notes: $notes, referenceRange: $referenceRange, units: $units, labLocation: $labLocation, orderedBy: $orderedBy, performedBy: $performedBy) {
      id
      labName
      result
      date
      fileUrl
      status
      notes
      referenceRange
      units
      labLocation
      orderedBy
      performedBy
    }
  }
`;

const UPDATE_LAB_RESULT = gql`
  mutation UpdateLabResult($labResultId: ID!, $labName: String!, $result: String!, $date: String!, $notes: String, $referenceRange: String, $units: String, $labLocation: String, $orderedBy: String, $performedBy: String) {
    updateLabResult(labResultId: $labResultId, labName: $labName, result: $result, date: $date, notes: $notes, referenceRange: $referenceRange, units: $units, labLocation: $labLocation, orderedBy: $orderedBy, performedBy: $performedBy) {
      id
      labName
      result
      date
      fileUrl
      status
      notes
      referenceRange
      units
      labLocation
      orderedBy
      performedBy
    }
  }
`;

const DELETE_LAB_RESULT = gql`
  mutation DeleteLabResult($labResultId: ID!) {
    deleteLabResult(labResultId: $labResultId) {
      id
    }
  }
`;

const SHARE_LAB_RESULT = gql`
  mutation ShareLabResult($labResultId: ID!, $recipientEmail: String!) {
    shareLabResult(labResultId: $labResultId, recipientEmail: $recipientEmail) {
      success
      message
    }
  }
`;

const GET_LAB_RESULT_HISTORY = gql`
  query GetLabResultHistory($userId: ID!, $labName: String!) {
    labResultHistory(userId: $userId, labName: $labName) {
      id
      result
      date
    }
  }
`;

const Lab = () => {
  const userId = "user-123"; // Replace with actual userId from context
  const { data = { labResults: [] }, loading, error, refetch } = useQuery(GET_LAB_RESULTS, { variables: { userId } });
  const [uploadLabResult] = useMutation(UPLOAD_LAB_RESULT);
  const [updateLabResult] = useMutation(UPDATE_LAB_RESULT);
  const [deleteLabResult] = useMutation(DELETE_LAB_RESULT);
  const [shareLabResult] = useMutation(SHARE_LAB_RESULT);
  const { data: historyData, refetch: refetchHistory } = useQuery(GET_LAB_RESULT_HISTORY, { variables: { userId, labName: '' }, skip: true });

  const [newLabResult, setNewLabResult] = useState({
    labName: '', result: '', date: '', file: null, notes: '',
    referenceRange: '', units: '', labLocation: '', orderedBy: '', performedBy: ''
  });
  const [editLabResult, setEditLabResult] = useState(null);
  const [selectedLabResult, setSelectedLabResult] = useState(null);
  const [shareEmail, setShareEmail] = useState('');
  const [openShareDialog, setOpenShareDialog] = useState(false);
  const [openViewDialog, setOpenViewDialog] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'info' });
  const [filterCriteria, setFilterCriteria] = useState({ labName: '', dateFrom: '', dateTo: '' });
  const [sortCriteria, setSortCriteria] = useState({ field: 'date', direction: 'desc' });

  const labOptions = [
    { name: 'Complete Blood Count (CBC)', components: [
      { name: 'White Blood Cell (WBC)', range: '4.5-11.0 x10^9/L' },
      { name: 'Red Blood Cell (RBC)', range: '4.5-5.9 x10^12/L' },
      { name: 'Hemoglobin', range: '13.5-17.5 g/dL' },
      { name: 'Hematocrit', range: '41-53%' },
      { name: 'Platelets', range: '150-450 x10^9/L' }
    ]},
    { name: 'Metabolic Panel', components: [
      { name: 'Glucose', range: '70-99 mg/dL' },
      { name: 'Calcium', range: '8.6-10.3 mg/dL' },
      { name: 'Sodium', range: '135-145 mmol/L' },
      { name: 'Potassium', range: '3.5-5.0 mmol/L' },
      { name: 'CO2', range: '23-29 mmol/L' },
      { name: 'Chloride', range: '98-107 mmol/L' },
      { name: 'BUN', range: '7-20 mg/dL' },
      { name: 'Creatinine', range: '0.6-1.2 mg/dL' },
      { name: 'Albumin', range: '3.4-5.4 g/dL' },
      { name: 'Total Bilirubin', range: '0.1-1.2 mg/dL' },
      { name: 'ALP', range: '20-140 U/L' },
      { name: 'ALT', range: '7-56 U/L' },
      { name: 'AST', range: '10-40 U/L' }
    ]},
    { name: 'Lipid Panel', components: [
      { name: 'Total Cholesterol', range: '<200 mg/dL' },
      { name: 'LDL Cholesterol', range: '<100 mg/dL' },
      { name: 'HDL Cholesterol', range: '>60 mg/dL' },
      { name: 'Triglycerides', range: '<150 mg/dL' }
    ]},
    { name: 'Thyroid Function Tests', components: [
      { name: 'TSH', range: '0.4-4.0 mIU/L' },
      { name: 'Free T4', range: '0.8-1.8 ng/dL' },
      { name: 'Free T3', range: '2.3-4.2 pg/mL' }
    ]},
    { name: 'Hemoglobin A1C', components: [
      { name: 'HbA1c', range: '<5.7%' }
    ]},
    { name: 'Vitamin D', components: [
      { name: '25-OH Vitamin D', range: '30-100 ng/mL' }
    ]},
    { name: 'Prostate-Specific Antigen (PSA)', components: [
      { name: 'PSA', range: '<4.0 ng/mL' }
    ]},
    { name: 'C-Reactive Protein (CRP)', components: [
      { name: 'CRP', range: '<3.0 mg/L' }
    ]},
    { name: 'Urinalysis', components: [
      { name: 'pH', range: '4.5-8.0' },
      { name: 'Specific Gravity', range: '1.005-1.030' },
      { name: 'Protein', range: 'Negative' },
      { name: 'Glucose', range: 'Negative' },
      { name: 'Ketones', range: 'Negative' },
      { name: 'Blood', range: 'Negative' },
      { name: 'Leukocyte Esterase', range: 'Negative' },
      { name: 'Nitrite', range: 'Negative' }
    ]}
  ];

  const [selectedLabTest, setSelectedLabTest] = useState('');
  const [selectedComponent, setSelectedComponent] = useState('');

  const handleLabTestChange = (e) => {
    const selectedTest = labOptions.find(test => test.name === e.target.value);
    setSelectedLabTest(selectedTest);
    setSelectedComponent('');
    setNewLabResult({
      ...newLabResult,
      labName: selectedTest.name,
      referenceRange: '',
      result: '',
      units: ''
    });
  };

  const handleComponentChange = (e) => {
    const component = selectedLabTest.components.find(comp => comp.name === e.target.value);
    setSelectedComponent(component);
    setNewLabResult({
      ...newLabResult,
      labName: `${selectedLabTest.name} - ${component.name}`,
      referenceRange: component.range,
      result: '',
      units: component.range.split(' ').pop()
    });
  };

  useEffect(() => {
    if (selectedLabResult) {
      refetchHistory({ variables: { userId, labName: selectedLabResult.labName } });
    }
  }, [selectedLabResult, refetchHistory, userId]);

  const handleFileChange = (e) => {
    setNewLabResult({ ...newLabResult, file: e.target.files[0] });
  };

  const handleLabResultSubmit = async () => {
    try {
      await uploadLabResult({ variables: { userId, ...newLabResult } });
      setNewLabResult({
        labName: '', result: '', date: '', file: null, notes: '',
        referenceRange: '', units: '', labLocation: '', orderedBy: '', performedBy: ''
      });
      refetch();
      setSnackbar({ open: true, message: 'Lab result uploaded successfully', severity: 'success' });
    } catch (error) {
      setSnackbar({ open: true, message: 'Error uploading lab result', severity: 'error' });
    }
  };

  const handleLabResultUpdate = async (labResultId) => {
    try {
      await updateLabResult({ variables: { labResultId, ...editLabResult } });
      setEditLabResult(null);
      refetch();
      setSnackbar({ open: true, message: 'Lab result updated successfully', severity: 'success' });
    } catch (error) {
      setSnackbar({ open: true, message: 'Error updating lab result', severity: 'error' });
    }
  };

  const handleLabResultDelete = async (labResultId) => {
    try {
      await deleteLabResult({ variables: { labResultId } });
      refetch();
      setSnackbar({ open: true, message: 'Lab result deleted successfully', severity: 'success' });
    } catch (error) {
      setSnackbar({ open: true, message: 'Error deleting lab result', severity: 'error' });
    }
  };

  const handleShareLabResult = async () => {
    try {
      await shareLabResult({ variables: { labResultId: selectedLabResult.id, recipientEmail: shareEmail } });
      setOpenShareDialog(false);
      setShareEmail('');
      setSnackbar({ open: true, message: 'Lab result shared successfully', severity: 'success' });
    } catch (error) {
      setSnackbar({ open: true, message: 'Error sharing lab result', severity: 'error' });
    }
  };

  const filteredAndSortedLabResults = data.labResults
    .filter(lab =>
      (!filterCriteria.labName || lab.labName.toLowerCase().includes(filterCriteria.labName.toLowerCase())) &&
      (!filterCriteria.dateFrom || new Date(lab.date) >= new Date(filterCriteria.dateFrom)) &&
      (!filterCriteria.dateTo || new Date(lab.date) <= new Date(filterCriteria.dateTo))
    )
    .sort((a, b) => {
      if (a[sortCriteria.field] < b[sortCriteria.field]) return sortCriteria.direction === 'asc' ? -1 : 1;
      if (a[sortCriteria.field] > b[sortCriteria.field]) return sortCriteria.direction === 'asc' ? 1 : -1;
      return 0;
    });

  const renderChart = () => {
    if (!historyData || !historyData.labResultHistory) return null;

    const chartData = {
      labels: historyData.labResultHistory.map(item => item.date),
      datasets: [{
        label: selectedLabResult.labName,
        data: historyData.labResultHistory.map(item => parseFloat(item.result)),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    };

    return (
      <Line data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
    );
  };

  return (
    <div className="lab-manager">
      <Typography variant="h4" gutterBottom>Advanced Lab Results Management Hub</Typography>

      {/* Upload New Lab Result */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography variant="h6">Upload New Lab Result</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Select
                value={selectedLabTest ? selectedLabTest.name : ''}
                onChange={handleLabTestChange}
                fullWidth
              >
                {labOptions.map((lab, index) => (
                  <MenuItem key={index} value={lab.name}>{lab.name}</MenuItem>
                ))}
              </Select>
            </Grid>
            {selectedLabTest && (
              <Grid item xs={12} md={6}>
                <Select
                  value={selectedComponent ? selectedComponent.name : ''}
                  onChange={handleComponentChange}
                  fullWidth
                >
                  {selectedLabTest.components.map((component, index) => (
                    <MenuItem key={index} value={component.name}>{component.name}</MenuItem>
                  ))}
                </Select>
              </Grid>
            )}
            <Grid item xs={12} md={6}>
              <TextField
                label="Result"
                value={newLabResult.result}
                onChange={(e) => setNewLabResult({ ...newLabResult, result: e.target.value })}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Date"
                type="date"
                value={newLabResult.date}
                onChange={(e) => setNewLabResult({ ...newLabResult, date: e.target.value })}
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Reference Range"
                value={newLabResult.referenceRange}
                onChange={(e) => setNewLabResult({ ...newLabResult, referenceRange: e.target.value })}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Units"
                value={newLabResult.units}
                onChange={(e) => setNewLabResult({ ...newLabResult, units: e.target.value })}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Lab Location"
                value={newLabResult.labLocation}
                onChange={(e) => setNewLabResult({ ...newLabResult, labLocation: e.target.value })}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Ordered By"
                value={newLabResult.orderedBy}
                onChange={(e) => setNewLabResult({ ...newLabResult, orderedBy: e.target.value })}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Performed By"
                value={newLabResult.performedBy}
                onChange={(e) => setNewLabResult({ ...newLabResult, performedBy: e.target.value })}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Notes"
                value={newLabResult.notes}
                onChange={(e) => setNewLabResult({ ...newLabResult, notes: e.target.value })}
                fullWidth
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12}>
              <input type="file" onChange={handleFileChange} />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" onClick={handleLabResultSubmit} disabled={!newLabResult.file}>
                Upload Lab Result
              </Button>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      {/* Filter and Sort */}
      <Card style={{ marginTop: '20px', marginBottom: '20px' }}>
        <CardContent>
          <Typography variant="h6">Filter and Sort</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <TextField
                label="Lab Name"
                value={filterCriteria.labName}
                onChange={(e) => setFilterCriteria({ ...filterCriteria, labName: e.target.value })}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                label="Date From"
                type="date"
                value={filterCriteria.dateFrom}
                onChange={(e) => setFilterCriteria({ ...filterCriteria, dateFrom: e.target.value })}
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                label="Date To"
                type="date"
                value={filterCriteria.dateTo}
                onChange={(e) => setFilterCriteria({ ...filterCriteria, dateTo: e.target.value })}
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12}>
              <Select
                value={`${sortCriteria.field}-${sortCriteria.direction}`}
                onChange={(e) => {
                  const [field, direction] = e.target.value.split('-');
                  setSortCriteria({ field, direction });
                }}
                fullWidth
              >
                <MenuItem value="date-desc">Date (Newest First)</MenuItem>
                <MenuItem value="date-asc">Date (Oldest First)</MenuItem>
                <MenuItem value="labName-asc">Lab Name (A-Z)</MenuItem>
                <MenuItem value="labName-desc">Lab Name (Z-A)</MenuItem>
              </Select>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Display Lab Results */}
      {loading ? (
        <LinearProgress />
      ) : error ? (
        <Alert severity="error">Error loading lab results</Alert>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Lab Name</TableCell>
                <TableCell>Result</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredAndSortedLabResults.map((lab) => (
                <TableRow key={lab.id}>
                  <TableCell>{lab.labName}</TableCell>
                  <TableCell>{lab.result} {lab.units}</TableCell>
                  <TableCell>{new Date(lab.date).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <Chip 
                      label={lab.status} 
                      color={lab.status === 'Normal' ? 'primary' : 'secondary'}
                    />
                  </TableCell>
                  <TableCell>
                    <IconButton onClick={() => setSelectedLabResult(lab)}><Visibility /></IconButton>
                    <IconButton onClick={() => setEditLabResult(lab)}><Edit /></IconButton>
                    <IconButton onClick={() => handleLabResultDelete(lab.id)}><Delete /></IconButton>
                    <IconButton onClick={() => { setSelectedLabResult(lab); setOpenShareDialog(true); }}><Share /></IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {/* View Lab Result Dialog */}
      <Dialog open={!!selectedLabResult} onClose={() => setSelectedLabResult(null)} maxWidth="md" fullWidth>
        <DialogTitle>{selectedLabResult?.labName}</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">Result: {selectedLabResult?.result} {selectedLabResult?.units}</Typography>
              <Typography variant="subtitle1">Date: {new Date(selectedLabResult?.date).toLocaleDateString()}</Typography>
              <Typography variant="subtitle1">Reference Range: {selectedLabResult?.referenceRange}</Typography>
              <Typography variant="subtitle1">Lab Location: {selectedLabResult?.labLocation}</Typography>
              <Typography variant="subtitle1">Ordered By: {selectedLabResult?.orderedBy}</Typography>
              <Typography variant="subtitle1">Performed By: {selectedLabResult?.performedBy}</Typography>
              <Typography variant="subtitle1">Notes: {selectedLabResult?.notes}</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6">Result History</Typography>
              {renderChart()}
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setSelectedLabResult(null)} color="primary">Close</Button>
          {selectedLabResult?.fileUrl && (
            <Button href={selectedLabResult.fileUrl} download color="primary">
              Download Report
            </Button>
          )}
        </DialogActions>
      </Dialog>

      {/* Edit Lab Result Dialog */}
      <Dialog open={!!editLabResult} onClose={() => setEditLabResult(null)} maxWidth="sm" fullWidth>
        <DialogTitle>Edit Lab Result</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Lab Name"
                value={editLabResult?.labName}
                onChange={(e) => setEditLabResult({ ...editLabResult, labName: e.target.value })}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Result"
                value={editLabResult?.result}
                onChange={(e) => setEditLabResult({ ...editLabResult, result: e.target.value })}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Date"
                type="date"
                value={editLabResult?.date}
                onChange={(e) => setEditLabResult({ ...editLabResult, date: e.target.value })}
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Notes"
                value={editLabResult?.notes}
                onChange={(e) => setEditLabResult({ ...editLabResult, notes: e.target.value })}
                fullWidth
                multiline
                rows={4}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditLabResult(null)} color="secondary">Cancel</Button>
          <Button onClick={() => handleLabResultUpdate(editLabResult.id)} color="primary">Update</Button>
        </DialogActions>
      </Dialog>

      {/* Share Lab Result Dialog */}
      <Dialog open={openShareDialog} onClose={() => setOpenShareDialog(false)} maxWidth="xs" fullWidth>
        <DialogTitle>Share Lab Result</DialogTitle>
        <DialogContent>
          <TextField
            label="Recipient Email"
            value={shareEmail}
            onChange={(e) => setShareEmail(e.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenShareDialog(false)} color="secondary">Cancel</Button>
          <Button onClick={handleShareLabResult} color="primary">Share</Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar for notifications */}
      <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={() => setSnackbar({ ...snackbar, open: false })}>
        <Alert onClose={() => setSnackbar({ ...snackbar, open: false })} severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Lab;