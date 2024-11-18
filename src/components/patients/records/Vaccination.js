import React, { useState, useEffect } from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';
import { 
  Button, TextField, Select, MenuItem, Card, CardContent, CardActions, Typography, IconButton, 
  Dialog, DialogTitle, DialogContent, DialogActions, Snackbar, LinearProgress, Chip, Avatar, 
  Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip
} from '@material-ui/core';
import { 
  Edit, Delete, Visibility, Share, Map, Notifications, LocalHospital, 
  Assessment, VerifiedUser, Group, PhoneAndroid, Language
} from '@mui/icons-material';
import { Alert, AlertTitle } from '@mui/material';
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';

// GraphQL Queries & Mutations (expanded)
const GET_VACCINATION_RECORDS = gql`
  query GetVaccinationRecords($userId: ID!) {
    vaccinationRecords(userId: $userId) {
      id
      vaccineName
      dateAdministered
      administeredBy
      batchNumber
      expirationDate
      manufacturer
      location
      nextDoseDate
      sideEffects
      notes
    }
  }
`;

const ADD_VACCINATION_RECORD = gql`
  mutation AddVaccinationRecord($userId: ID!, $vaccineName: String!, $dateAdministered: String!, $administeredBy: String!, $batchNumber: String!, $expirationDate: String!, $manufacturer: String!, $location: String!, $nextDoseDate: String, $sideEffects: String, $notes: String) {
    addVaccinationRecord(userId: $userId, vaccineName: $vaccineName, dateAdministered: $dateAdministered, administeredBy: $administeredBy, batchNumber: $batchNumber, expirationDate: $expirationDate, manufacturer: $manufacturer, location: $location, nextDoseDate: $nextDoseDate, sideEffects: $sideEffects, notes: $notes) {
      id
      vaccineName
      dateAdministered
      administeredBy
      batchNumber
      expirationDate
      manufacturer
      location
      nextDoseDate
      sideEffects
      notes
    }
  }
`;

const UPDATE_VACCINATION_RECORD = gql`
  mutation UpdateVaccinationRecord($vaccinationId: ID!, $vaccineName: String!, $dateAdministered: String!, $administeredBy: String!, $batchNumber: String!, $expirationDate: String!, $manufacturer: String!, $location: String!, $nextDoseDate: String, $sideEffects: String, $notes: String) {
    updateVaccinationRecord(vaccinationId: $vaccinationId, vaccineName: $vaccineName, dateAdministered: $dateAdministered, administeredBy: $administeredBy, batchNumber: $batchNumber, expirationDate: $expirationDate, manufacturer: $manufacturer, location: $location, nextDoseDate: $nextDoseDate, sideEffects: $sideEffects, notes: $notes) {
      id
      vaccineName
      dateAdministered
      administeredBy
      batchNumber
      expirationDate
      manufacturer
      location
      nextDoseDate
      sideEffects
      notes
    }
  }
`;

const DELETE_VACCINATION_RECORD = gql`
  mutation DeleteVaccinationRecord($vaccinationId: ID!) {
    deleteVaccinationRecord(vaccinationId: $vaccinationId) {
      id
    }
  }
`;

const REPORT_SIDE_EFFECT = gql`
  mutation ReportSideEffect($vaccinationId: ID!, $sideEffects: String!) {
    reportSideEffect(vaccinationId: $vaccinationId, sideEffects: $sideEffects) {
      id
      sideEffects
    }
  }
`;

const GET_VACCINATION_STATISTICS = gql`
  query GetVaccinationStatistics {
    vaccinationStatistics {
      totalVaccinations
      vaccinationsByType {
        name
        count
      }
      vaccinationTrends {
        date
        count
      }
    }
  }
`;

const Vaccination = () => {
  const userId = "user-123"; // Replace with actual userId from context
  const { data = { vaccinationRecords: [] }, loading, error, refetch } = useQuery(GET_VACCINATION_RECORDS, { variables: { userId } });
  const { data: statsData = { vaccinationStatistics: { totalVaccinations: 0, vaccinationsByType: [], vaccinationTrends: [] } } } = useQuery(GET_VACCINATION_STATISTICS);
  const [addVaccinationRecord] = useMutation(ADD_VACCINATION_RECORD);
  const [updateVaccinationRecord] = useMutation(UPDATE_VACCINATION_RECORD);
  const [deleteVaccinationRecord] = useMutation(DELETE_VACCINATION_RECORD);
  const [reportSideEffect] = useMutation(REPORT_SIDE_EFFECT);

  const [newVaccination, setNewVaccination] = useState({ 
    vaccineName: '', dateAdministered: '', administeredBy: '', batchNumber: '', 
    expirationDate: '', manufacturer: '', location: '', nextDoseDate: '', sideEffects: '', notes: '' 
  });
  const [editVaccination, setEditVaccination] = useState(null);
  const [sideEffectReport, setSideEffectReport] = useState({ id: null, effects: '' });
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'info' });
  const [showStatistics, setShowStatistics] = useState(false);

  const vaccineOptions = [
    'BCG', 'OPV', 'DPT-HepB-Hib', 'PCV', 'Rotavirus', 'Measles', 'Yellow Fever',
    'HPV', 'Td', 'Hepatitis B', 'Meningococcal', 'Typhoid', 'COVID-19'
  ];

  const ugandanRegions = [
    'Central Region', 'Eastern Region', 'Northern Region', 'Western Region'
  ];

  useEffect(() => {
    const checkUpcomingVaccinations = () => {
      const today = new Date();
      data.vaccinationRecords.forEach(record => {
        if (record.nextDoseDate) {
          const nextDose = new Date(record.nextDoseDate);
          const timeDiff = nextDose.getTime() - today.getTime();
          const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
          
          if (daysDiff <= 7 && daysDiff > 0) {
            setSnackbar({
              open: true,
              message: `Upcoming vaccination: ${record.vaccineName} due in ${daysDiff} days`,
              severity: 'info'
            });
          }
        }
      });
    };
    checkUpcomingVaccinations();
  }, [data.vaccinationRecords]);

  const handleAddVaccination = async () => {
    try {
      await addVaccinationRecord({
        variables: {
          userId,
          ...newVaccination
        }
      });
      setNewVaccination({ 
        vaccineName: '', dateAdministered: '', administeredBy: '', batchNumber: '', 
        expirationDate: '', manufacturer: '', location: '', nextDoseDate: '', sideEffects: '', notes: '' 
      });
      refetch();
      setSnackbar({ open: true, message: 'Vaccination record added successfully!', severity: 'success' });
    } catch (error) {
      setSnackbar({ open: true, message: 'Failed to add vaccination record. Please try again.', severity: 'error' });
    }
  };

  const handleVaccinationUpdate = async (vaccinationId) => {
    try {
      await updateVaccinationRecord({
        variables: {
          vaccinationId,
          ...editVaccination
        }
      });
      setEditVaccination(null);
      refetch();
      setSnackbar({ open: true, message: 'Vaccination record updated successfully!', severity: 'success' });
    } catch (error) {
      setSnackbar({ open: true, message: 'Failed to update vaccination record. Please try again.', severity: 'error' });
    }
  };

  const handleVaccinationDelete = async (vaccinationId) => {
    try {
      await deleteVaccinationRecord({ variables: { vaccinationId } });
      refetch();
      setSnackbar({ open: true, message: 'Vaccination record deleted successfully!', severity: 'success' });
    } catch (error) {
      setSnackbar({ open: true, message: 'Failed to delete vaccination record. Please try again.', severity: 'error' });
    }
  };

  const handleReportSideEffect = async () => {
    try {
      await reportSideEffect({
        variables: {
          vaccinationId: sideEffectReport.id,
          sideEffects: sideEffectReport.effects
        }
      });
      setSideEffectReport({ id: null, effects: '' });
      refetch();
      setSnackbar({ open: true, message: 'Side effects reported successfully!', severity: 'success' });
    } catch (error) {
      setSnackbar({ open: true, message: 'Failed to report side effects. Please try again.', severity: 'error' });
    }
  };

  const renderVaccinationStatistics = () => {
    const { totalVaccinations, vaccinationsByType, vaccinationTrends } = statsData.vaccinationStatistics;
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

    return (
      <Dialog open={showStatistics} onClose={() => setShowStatistics(false)} maxWidth="md" fullWidth>
        <DialogTitle>Vaccination Statistics</DialogTitle>
        <DialogContent>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6">Total Vaccinations: {totalVaccinations}</Typography>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={vaccinationsByType}
                    dataKey="count"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    label
                  >
                    {vaccinationsByType.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6">Vaccination Trends</Typography>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={vaccinationTrends}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="count" stroke="#8884d8" />
                </LineChart>
              </ResponsiveContainer>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    );
  };

  return (
    <div className="comprehensive-vaccination-system">
      <Typography variant="h4" gutterBottom>Uganda Vaccination Management System</Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          {/* Add New Vaccination Record */}
          <Card style={{ marginBottom: '20px' }}>
            <CardContent>
              <Typography variant="h6">Add New Vaccination Record</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Select
                    value={newVaccination.vaccineName}
                    onChange={(e) => setNewVaccination({ ...newVaccination, vaccineName: e.target.value })}
                    fullWidth
                  >
                    {vaccineOptions.map((vaccine, index) => (
                      <MenuItem key={index} value={vaccine}>{vaccine}</MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Date Administered"
                    type="date"
                    value={newVaccination.dateAdministered}
                    onChange={(e) => setNewVaccination({ ...newVaccination, dateAdministered: e.target.value })}
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Administered By"
                    value={newVaccination.administeredBy}
                    onChange={(e) => setNewVaccination({ ...newVaccination, administeredBy: e.target.value })}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Batch Number"
                    value={newVaccination.batchNumber}
                    onChange={(e) => setNewVaccination({ ...newVaccination, batchNumber: e.target.value })}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Expiration Date"
                    type="date"
                    value={newVaccination.expirationDate}
                    onChange={(e) => setNewVaccination({ ...newVaccination, expirationDate: e.target.value })}
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Manufacturer"
                    value={newVaccination.manufacturer}
                    onChange={(e) => setNewVaccination({ ...newVaccination, manufacturer: e.target.value })}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Select
                    value={newVaccination.location}
                    onChange={(e) => setNewVaccination({ ...newVaccination, location: e.target.value })}
                    fullWidth
                    displayEmpty
                  >
                    <MenuItem value="" disabled>Select Region</MenuItem>
                    {ugandanRegions.map((region, index) => (
                      <MenuItem key={index} value={region}>{region}</MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Next Dose Date (if applicable)"
                    type="date"
                    value={newVaccination.nextDoseDate}
                    onChange={(e) => setNewVaccination({ ...newVaccination, nextDoseDate: e.target.value })}
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Notes"
                    value={newVaccination.notes}
                    onChange={(e) => setNewVaccination({ ...newVaccination, notes: e.target.value })}
                    fullWidth
                    multiline
                    rows={2}
                  />
                </Grid>
              </Grid>
            </CardContent>
            <CardActions>
              <Button onClick={handleAddVaccination} color="primary" variant="contained">
                Add Vaccination Record
              </Button>
            </CardActions>
          </Card>

          {/* Vaccination Records List */}
          <Typography variant="h6" gutterBottom>Vaccination Records</Typography>
          {loading ? (
            <LinearProgress />
          ) : error ? (
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              Failed to load vaccination records. Please try again.
            </Alert>
          ) : (
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Vaccine</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Location</TableCell>
                    <TableCell>Next Dose</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.vaccinationRecords.map((record) => (
                    <TableRow key={record.id}>
                      <TableCell>{record.vaccineName}</TableCell>
                      <TableCell>{record.dateAdministered}</TableCell>
                      <TableCell>{record.location}</TableCell>
                      <TableCell>{record.nextDoseDate || 'N/A'}</TableCell>
                      <TableCell>
                        <Tooltip title="View Details">
                          <IconButton onClick={() => setEditVaccination(record)}>
                            <Visibility />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Report Side Effects">
                          <IconButton onClick={() => setSideEffectReport({ id: record.id, effects: '' })}>
                            <LocalHospital />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete Record">
                          <IconButton onClick={() => handleVaccinationDelete(record.id)}>
                            <Delete />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Grid>

        <Grid item xs={12} md={4}>
          {/* Quick Actions */}
          <Card style={{ marginBottom: '20px' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>Quick Actions</Typography>
              <Button
                startIcon={<Assessment />}
                onClick={() => setShowStatistics(true)}
                fullWidth
                variant="outlined"
                style={{ marginBottom: '10px' }}
              >
                View Statistics
              </Button>
              <Button
                startIcon={<Share />}
                onClick={() => {/* Implement share functionality */}}
                fullWidth
                variant="outlined"
                style={{ marginBottom: '10px' }}
              >
                Share Records
              </Button>
              <Button
                startIcon={<Map />}
                onClick={() => {/* Implement nearby centers functionality */}}
                fullWidth
                variant="outlined"
                style={{ marginBottom: '10px' }}
              >
                Find Nearby Centers
              </Button>
              <Button
                startIcon={<Notifications />}
                onClick={() => {/* Implement reminder setup */}}
                fullWidth
                variant="outlined"
              >
                Set Reminders
              </Button>
            </CardContent>
          </Card>

          {/* Information Cards */}
          <Card style={{ marginBottom: '20px' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>Vaccination Information</Typography>
              <Typography variant="body2" paragraph>
                Staying up-to-date with vaccinations is crucial for personal and public health.
                If you have any questions about your vaccination schedule, please consult with a healthcare professional.
              </Typography>
              <Chip icon={<VerifiedUser />} label="Verified Information" color="primary" />
              <Chip icon={<Group />} label="Community Health" style={{ marginLeft: '10px' }} />
            </CardContent>
          </Card>

          {/* Mobile App Promotion */}
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>Get Our Mobile App</Typography>
              <Typography variant="body2" paragraph>
                Download our mobile app for easy access to your vaccination records on the go.
              </Typography>
              <Button startIcon={<PhoneAndroid />} variant="contained" color="secondary">
                Download App
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Edit Vaccination Dialog */}
      <Dialog open={!!editVaccination} onClose={() => setEditVaccination(null)} maxWidth="sm" fullWidth>
        <DialogTitle>Edit Vaccination Record</DialogTitle>
        <DialogContent>
          {editVaccination && (
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Vaccine Name"
                  value={editVaccination.vaccineName}
                  onChange={(e) => setEditVaccination({ ...editVaccination, vaccineName: e.target.value })}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Date Administered"
                  type="date"
                  value={editVaccination.dateAdministered}
                  onChange={(e) => setEditVaccination({ ...editVaccination, dateAdministered: e.target.value })}
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              {/* Add more fields as needed */}
            </Grid>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditVaccination(null)}>Cancel</Button>
          <Button onClick={() => handleVaccinationUpdate(editVaccination.id)} color="primary">
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>

      {/* Report Side Effects Dialog */}
      <Dialog open={!!sideEffectReport.id} onClose={() => setSideEffectReport({ id: null, effects: '' })} maxWidth="sm" fullWidth>
        <DialogTitle>Report Side Effects</DialogTitle>
        <DialogContent>
          <TextField
            label="Describe Side Effects"
            value={sideEffectReport.effects}
            onChange={(e) => setSideEffectReport({ ...sideEffectReport, effects: e.target.value })}
            fullWidth
            multiline
            rows={4}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setSideEffectReport({ id: null, effects: '' })}>Cancel</Button>
          <Button onClick={handleReportSideEffect} color="primary">
            Submit Report
          </Button>
        </DialogActions>
      </Dialog>

      {/* Render Statistics Dialog */}
      {renderVaccinationStatistics()}

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

export default Vaccination;