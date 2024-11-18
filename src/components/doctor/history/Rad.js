import React, { useState, useEffect } from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';
import { Button, TextField, Select, MenuItem, Card, CardContent, CardActions, Typography, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Snackbar, LinearProgress, Chip, Avatar, Grid } from '@material-ui/core';
import { CloudUpload, CloudDownload, Edit, Delete, Visibility, Share, Compare, Timeline, LocalHospital, Description, Alarm } from '@mui/icons-material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Alert, AlertTitle } from '@mui/material';

// GraphQL Queries & Mutations (expanded)
const GET_RAD_RESULTS = gql`
  query GetRadResults($userId: ID!) {
    radResults(userId: $userId) {
      id
      imagingType
      description
      date
      fileUrl
      thumbnailUrl
      aiAnalysis
      doctorNotes
      relatedConditions
      followUpDate
      shareStatus
      radiationDose
    }
  }
`;

const UPLOAD_RAD_RESULT = gql`
  mutation UploadRadResult($userId: ID!, $imagingType: String!, $description: String!, $date: String!, $file: Upload!, $aiAnalysisRequested: Boolean!) {
    uploadRadResult(userId: $userId, imagingType: $imagingType, description: $description, date: $date, file: $file, aiAnalysisRequested: $aiAnalysisRequested) {
      id
      imagingType
      description
      date
      fileUrl
      thumbnailUrl
      aiAnalysis
      radiationDose
    }
  }
`;

const UPDATE_RAD_RESULT = gql`
  mutation UpdateRadResult($radResultId: ID!, $imagingType: String!, $description: String!, $date: String!, $doctorNotes: String, $followUpDate: String) {
    updateRadResult(radResultId: $radResultId, imagingType: $imagingType, description: $description, date: $date, doctorNotes: $doctorNotes, followUpDate: $followUpDate) {
      id
      imagingType
      description
      date
      doctorNotes
      followUpDate
    }
  }
`;

const DELETE_RAD_RESULT = gql`
  mutation DeleteRadResult($radResultId: ID!) {
    deleteRadResult(radResultId: $radResultId) {
      id
    }
  }
`;

const SHARE_RAD_RESULT = gql`
  mutation ShareRadResult($radResultId: ID!, $recipientEmail: String!) {
    shareRadResult(radResultId: $radResultId, recipientEmail: $recipientEmail) {
      id
      shareStatus
    }
  }
`;

const REQUEST_AI_ANALYSIS = gql`
  mutation RequestAIAnalysis($radResultId: ID!) {
    requestAIAnalysis(radResultId: $radResultId) {
      id
      aiAnalysis
    }
  }
`;

const Rad = () => {
  const userId = "user-123"; // Replace with actual userId from context
  const { data = { radResults: [] }, loading, error, refetch } = useQuery(GET_RAD_RESULTS, { variables: { userId } });
  const [uploadRadResult] = useMutation(UPLOAD_RAD_RESULT);
  const [updateRadResult] = useMutation(UPDATE_RAD_RESULT);
  const [deleteRadResult] = useMutation(DELETE_RAD_RESULT);
  const [shareRadResult] = useMutation(SHARE_RAD_RESULT);
  const [requestAIAnalysis] = useMutation(REQUEST_AI_ANALYSIS);

  const [newRadResult, setNewRadResult] = useState({ imagingType: '', description: '', date: '', file: null, aiAnalysisRequested: false });
  const [editRadResult, setEditRadResult] = useState(null);
  const [compareResults, setCompareResults] = useState([]);
  const [shareDialogOpen, setShareDialogOpen] = useState(false);
  const [shareEmail, setShareEmail] = useState('');
  const [currentSharedResult, setCurrentSharedResult] = useState(null);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'info' });
  const [timelineView, setTimelineView] = useState(false);

  const imagingOptions = [
    'X-ray', 'MRI', 'CT Scan', 'Ultrasound Scan', 'Mammogram', 'PET Scan', 'Echocardiogram', 'Bone Density Scan', 'Angiography'
  ];

  useEffect(() => {
    const checkFollowUps = () => {
      const today = new Date();
      data.radResults.forEach(result => {
        if (result.followUpDate) {
          const followUpDate = new Date(result.followUpDate);
          if (followUpDate <= today) {
            setSnackbar({
              open: true,
              message: `Follow-up required for ${result.imagingType} dated ${result.date}`,
              severity: 'warning'
            });
          }
        }
      });
    };
    checkFollowUps();
  }, [data.radResults]);

  const handleFileChange = (e) => {
    setNewRadResult({ ...newRadResult, file: e.target.files[0] });
  };

  const handleRadResultSubmit = async () => {
    if (newRadResult.file) {
      try {
        await uploadRadResult({
          variables: {
            userId,
            imagingType: newRadResult.imagingType,
            description: newRadResult.description,
            date: newRadResult.date,
            file: newRadResult.file,
            aiAnalysisRequested: newRadResult.aiAnalysisRequested
          }
        });
        setNewRadResult({ imagingType: '', description: '', date: '', file: null, aiAnalysisRequested: false });
        refetch();
        setSnackbar({ open: true, message: 'Imaging result uploaded successfully!', severity: 'success' });
      } catch (error) {
        console.error("Error uploading imaging result", error);
        setSnackbar({ open: true, message: 'Failed to upload imaging result. Please try again.', severity: 'error' });
      }
    }
  };

  const handleRadResultUpdate = async (radResultId) => {
    try {
      await updateRadResult({
        variables: {
          radResultId,
          imagingType: editRadResult.imagingType,
          description: editRadResult.description,
          date: editRadResult.date,
          doctorNotes: editRadResult.doctorNotes,
          followUpDate: editRadResult.followUpDate
        }
      });
      setEditRadResult(null);
      refetch();
      setSnackbar({ open: true, message: 'Imaging result updated successfully!', severity: 'success' });
    } catch (error) {
      console.error("Error updating imaging result", error);
      setSnackbar({ open: true, message: 'Failed to update imaging result. Please try again.', severity: 'error' });
    }
  };

  const handleRadResultDelete = async (radResultId) => {
    try {
      await deleteRadResult({ variables: { radResultId } });
      refetch();
      setSnackbar({ open: true, message: 'Imaging result deleted successfully!', severity: 'success' });
    } catch (error) {
      console.error("Error deleting imaging result", error);
      setSnackbar({ open: true, message: 'Failed to delete imaging result. Please try again.', severity: 'error' });
    }
  };

  const handleShare = async () => {
    try {
      await shareRadResult({
        variables: {
          radResultId: currentSharedResult.id,
          recipientEmail: shareEmail
        }
      });
      setShareDialogOpen(false);
      setShareEmail('');
      setCurrentSharedResult(null);
      setSnackbar({ open: true, message: 'Imaging result shared successfully!', severity: 'success' });
    } catch (error) {
      console.error("Error sharing imaging result", error);
      setSnackbar({ open: true, message: 'Failed to share imaging result. Please try again.', severity: 'error' });
    }
  };

  const handleRequestAIAnalysis = async (radResultId) => {
    try {
      await requestAIAnalysis({ variables: { radResultId } });
      refetch();
      setSnackbar({ open: true, message: 'AI analysis requested successfully!', severity: 'success' });
    } catch (error) {
      console.error("Error requesting AI analysis", error);
      setSnackbar({ open: true, message: 'Failed to request AI analysis. Please try again.', severity: 'error' });
    }
  };

  const renderTimelineView = () => {
    const timelineData = data.radResults.map(result => ({
      date: new Date(result.date),
      imagingType: result.imagingType,
      id: result.id
    })).sort((a, b) => a.date - b.date);

    return (
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={timelineData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" type="category" tickFormatter={(date) => new Date(date).toLocaleDateString()} />
          <YAxis dataKey="imagingType" type="category" />
          <Tooltip
            content={({ payload, label }) => {
              if (payload && payload.length) {
                return (
                  <div className="custom-tooltip" style={{ backgroundColor: 'white', padding: '10px', border: '1px solid #ccc' }}>
                    <p>{`Date: ${new Date(label).toLocaleDateString()}`}</p>
                    <p>{`Type: ${payload[0].payload.imagingType}`}</p>
                  </div>
                );
              }
              return null;
            }}
          />
          <Line type="monotone" dataKey="imagingType" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    );
  };

  return (
    <div className="advanced-medical-imaging-system">
      <Typography variant="h4" gutterBottom>Advanced Medical Imaging Management System</Typography>

      {/* Upload New Imaging Result */}
      <Card style={{ marginBottom: '20px' }}>
        <CardContent>
          <Typography variant="h6">Upload New Imaging Result</Typography>
          <Select
            value={newRadResult.imagingType}
            onChange={(e) => setNewRadResult({ ...newRadResult, imagingType: e.target.value })}
            fullWidth
            style={{ marginBottom: '20px' }}
          >
            {imagingOptions.map((type, index) => (
              <MenuItem key={index} value={type}>{type}</MenuItem>
            ))}
          </Select>
          <TextField
            label="Description"
            value={newRadResult.description}
            onChange={(e) => setNewRadResult({ ...newRadResult, description: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Date"
            type="date"
            value={newRadResult.date}
            onChange={(e) => setNewRadResult({ ...newRadResult, date: e.target.value })}
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
          <input type="file" onChange={handleFileChange} />
          <div style={{ marginTop: '10px' }}>
            <Typography variant="body2">
              <Chip
                avatar={<Avatar>AI</Avatar>}
                label="Request AI Analysis"
                onClick={() => setNewRadResult({ ...newRadResult, aiAnalysisRequested: !newRadResult.aiAnalysisRequested })}
                color={newRadResult.aiAnalysisRequested ? "primary" : "default"}
                style={{ marginRight: '10px' }}
              />
            </Typography>
          </div>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            startIcon={<CloudUpload />}
            onClick={handleRadResultSubmit}
            disabled={!newRadResult.file}
          >
            Upload Imaging Result
          </Button>
        </CardActions>
      </Card>

      {/* Timeline View Toggle */}
      <Button
        variant="outlined"
        color="primary"
        startIcon={<Timeline />}
        onClick={() => setTimelineView(!timelineView)}
        style={{ marginBottom: '20px' }}
      >
        {timelineView ? 'Switch to List View' : 'Switch to Timeline View'}
      </Button>

      {/* Timeline View */}
      {timelineView && renderTimelineView()}

      {/* Display Imaging Records */}
      {!timelineView && (
        <div className="rad-result-list">
          {error ? (
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              Failed to load imaging records. <Button onClick={() => refetch()}>Retry</Button>
            </Alert>
          ) : loading ? (
            <LinearProgress />
          ) : data.radResults.length === 0 ? (
            <Typography variant="body2">No imaging records found.</Typography>
          ) : (
            <Grid container spacing={3}>
              {data.radResults.map((rad) => (
                <Grid item xs={12} sm={6} md={4} key={rad.id}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6">{rad.imagingType}</Typography>
                      <Typography variant="body1">Description: {rad.description}</Typography>
                      <Typography variant="body2">Date: {rad.date}</Typography>
                      {rad.thumbnailUrl && (
                        <div>
                          <Typography variant="body2">Preview:</Typography>
                          <img src={rad.thumbnailUrl} alt={`${rad.imagingType} thumbnail`} style={{ width: '100%', maxWidth: '300px' }} />
                        </div>
                      )}
                      {rad.aiAnalysis && (
                        <div>
                          <Typography variant="body2">AI Analysis:</Typography>
                          <Typography variant="body2">{rad.aiAnalysis}</Typography>
                        </div>
                      )}
                      {rad.doctorNotes && (
                        <div>
                          <Typography variant="body2">Doctor's Notes:</Typography>
                          <Typography variant="body2">{rad.doctorNotes}</Typography>
                        </div>
                      )}
                      {rad.followUpDate && (
                        <div>
                          <Typography variant="body2">Follow-up Date:</Typography>
                          <Typography variant="body2">{rad.followUpDate}</Typography>
                        </div>
                      )}
                      {rad.radiationDose && (
                        <div>
                          <Typography variant="body2">Radiation Dose:</Typography>
                          <Typography variant="body2">{rad.radiationDose}</Typography>
                        </div>
                      )}
                    </CardContent>
                    <CardActions>
                      <IconButton color="primary" onClick={() => setEditRadResult(rad)}><Edit /></IconButton>
                      <IconButton color="secondary" onClick={() => handleRadResultDelete(rad.id)}><Delete /></IconButton>
                      {rad.fileUrl && (
                        <IconButton color="default">
                          <a href={rad.fileUrl} target="_blank" rel="noopener noreferrer"><Visibility /></a>
                        </IconButton>
                      )}
                      <IconButton color="primary" onClick={() => {
                        setCurrentSharedResult(rad);
                        setShareDialogOpen(true);
                      }}><Share /></IconButton>
                      <IconButton color="default" onClick={() => {
                        if (compareResults.includes(rad.id)) {
                          setCompareResults(compareResults.filter(id => id !== rad.id));
                        } else {
                          setCompareResults([...compareResults, rad.id]);
                        }
                      }}>
                        <Compare color={compareResults.includes(rad.id) ? "primary" : "action"} />
                      </IconButton>
                      {!rad.aiAnalysis && (
                        <IconButton color="default" onClick={() => handleRequestAIAnalysis(rad.id)}>
                          <Description />
                        </IconButton>
                      )}
                      {rad.followUpDate && new Date(rad.followUpDate) <= new Date() && (
                        <IconButton color="secondary">
                          <Alarm />
                        </IconButton>
                      )}
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        </div>
      )}

      {/* Edit Imaging Result Modal */}
      <Dialog open={!!editRadResult} onClose={() => setEditRadResult(null)}>
        <DialogTitle>Edit Imaging Result</DialogTitle>
        <DialogContent>
          <Select
            value={editRadResult?.imagingType || ''}
            onChange={(e) => setEditRadResult({ ...editRadResult, imagingType: e.target.value })}
            fullWidth
            style={{ marginBottom: '20px' }}
          >
            {imagingOptions.map((type, index) => (
              <MenuItem key={index} value={type}>{type}</MenuItem>
            ))}
          </Select>
          <TextField
            label="Description"
            value={editRadResult?.description || ''}
            onChange={(e) => setEditRadResult({ ...editRadResult, description: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Date"
            type="date"
            value={editRadResult?.date || ''}
            onChange={(e) => setEditRadResult({ ...editRadResult, date: e.target.value })}
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="Doctor's Notes"
            value={editRadResult?.doctorNotes || ''}
            onChange={(e) => setEditRadResult({ ...editRadResult, doctorNotes: e.target.value })}
            fullWidth
            margin="normal"
            multiline
            rows={4}
          />
          <TextField
            label="Follow-up Date"
            type="date"
            value={editRadResult?.followUpDate || ''}
            onChange={(e) => setEditRadResult({ ...editRadResult, followUpDate: e.target.value })}
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditRadResult(null)}>Cancel</Button>
          <Button variant="contained" color="primary" onClick={() => handleRadResultUpdate(editRadResult.id)}>
            Update Imaging Result
          </Button>
        </DialogActions>
      </Dialog>

      {/* Share Dialog */}
      <Dialog open={shareDialogOpen} onClose={() => setShareDialogOpen(false)}>
        <DialogTitle>Share Imaging Result</DialogTitle>
        <DialogContent>
          <TextField
            label="Recipient Email"
            type="email"
            value={shareEmail}
            onChange={(e) => setShareEmail(e.target.value)}
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShareDialogOpen(false)}>Cancel</Button>
          <Button variant="contained" color="primary" onClick={handleShare}>
            Share
          </Button>
        </DialogActions>
      </Dialog>

      {/* Compare Results Dialog */}
      <Dialog open={compareResults.length > 1} onClose={() => setCompareResults([])}>
        <DialogTitle>Compare Imaging Results</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            {compareResults.map(resultId => {
              const result = data.radResults.find(r => r.id === resultId);
              return (
                <Grid item xs={12} sm={6} key={resultId}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6">{result.imagingType}</Typography>
                      <Typography variant="body2">Date: {result.date}</Typography>
                      {result.thumbnailUrl && (
                        <img src={result.thumbnailUrl} alt={`${result.imagingType} thumbnail`} style={{ width: '100%' }} />
                      )}
                      <Typography variant="body2">Description: {result.description}</Typography>
                      {result.aiAnalysis && (
                        <Typography variant="body2">AI Analysis: {result.aiAnalysis}</Typography>
                      )}
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setCompareResults([])}>Close</Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar for notifications */}
      <Snackbar 
        open={snackbar.open} 
        autoHideDuration={6000} 
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert onClose={() => setSnackbar({ ...snackbar, open: false })} severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Rad;