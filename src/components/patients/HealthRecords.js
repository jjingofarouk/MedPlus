import React, { useState } from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';
import { Card, CardHeader, CardContent, CardActions, Button, TextField, Typography, Select, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';

// GraphQL Queries & Mutations
const GET_HEALTH_RECORDS = gql`
  query GetHealthRecords($userId: ID!) {
    healthRecords(userId: $userId) {
      id
      date
      doctorName
      diagnosis
      treatment
      prescription
      labResults
    }
  }
`;

const ADD_HEALTH_RECORD = gql`
  mutation AddHealthRecord($userId: ID!, $doctorName: String!, $diagnosis: String!, $treatment: String!, $prescription: String!, $labResults: String!) {
    addHealthRecord(userId: $userId, doctorName: $doctorName, diagnosis: $diagnosis, treatment: $treatment, prescription: $prescription, labResults: $labResults) {
      id
      date
      doctorName
      diagnosis
      treatment
      prescription
      labResults
    }
  }
`;

const UPDATE_HEALTH_RECORD = gql`
  mutation UpdateHealthRecord($recordId: ID!, $doctorName: String, $diagnosis: String, $treatment: String, $prescription: String, $labResults: String) {
    updateHealthRecord(recordId: $recordId, doctorName: $doctorName, diagnosis: $diagnosis, treatment: $treatment, prescription: $prescription, labResults: $labResults) {
      id
      date
      doctorName
      diagnosis
      treatment
      prescription
      labResults
    }
  }
`;

const HealthRecords = () => {
  const userId = "user-123"; // Replace with the actual userId
  const { data = { healthRecords: [] }, loading, error, refetch } = useQuery(GET_HEALTH_RECORDS, { variables: { userId } });
  const [addHealthRecord] = useMutation(ADD_HEALTH_RECORD);
  const [updateHealthRecord] = useMutation(UPDATE_HEALTH_RECORD);

  const [newRecord, setNewRecord] = useState({ doctorName: '', diagnosis: '', treatment: '', prescription: '', labResults: '' });
  const [editRecord, setEditRecord] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const handleAddRecord = async () => {
    await addHealthRecord({
      variables: {
        userId,
        doctorName: newRecord.doctorName,
        diagnosis: newRecord.diagnosis,
        treatment: newRecord.treatment,
        prescription: newRecord.prescription,
        labResults: newRecord.labResults,
      },
    });
    setNewRecord({ doctorName: '', diagnosis: '', treatment: '', prescription: '', labResults: '' });
    refetch();
  };

  const handleUpdateRecord = async () => {
    if (editRecord) {
      await updateHealthRecord({
        variables: {
          recordId: editRecord.id,
          doctorName: editRecord.doctorName,
          diagnosis: editRecord.diagnosis,
          treatment: editRecord.treatment,
          prescription: editRecord.prescription,
          labResults: editRecord.labResults,
        },
      });
      setEditRecord(null);
      setOpenDialog(false);
      refetch();
    }
  };

  const openEditDialog = (record) => {
    setEditRecord(record);
    setOpenDialog(true);
  };



  return (
    <div className="health-records-manager">
      <Typography variant="h4" gutterBottom>
        Manage Your Health Records
      </Typography>

      {/* Add New Health Record */}
      <Card style={{ marginBottom: '20px' }}>
        <CardHeader title="Add New Health Record" />
        <CardContent>
          <TextField
            label="Doctor's Name"
            value={newRecord.doctorName}
            onChange={(e) => setNewRecord({ ...newRecord, doctorName: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Diagnosis"
            value={newRecord.diagnosis}
            onChange={(e) => setNewRecord({ ...newRecord, diagnosis: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Treatment"
            value={newRecord.treatment}
            onChange={(e) => setNewRecord({ ...newRecord, treatment: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Prescription"
            value={newRecord.prescription}
            onChange={(e) => setNewRecord({ ...newRecord, prescription: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Lab Results"
            value={newRecord.labResults}
            onChange={(e) => setNewRecord({ ...newRecord, labResults: e.target.value })}
            fullWidth
            margin="normal"
          />
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary" onClick={handleAddRecord}>
            Add Health Record
          </Button>
        </CardActions>
      </Card>

      {/* Display Health Records */}
      <div className="health-records-list">
        {data.healthRecords.map((record) => (
          <Card key={record.id} style={{ marginBottom: '20px' }}>
            <CardHeader title={`Record from ${record.date}`} subheader={`Doctor: ${record.doctorName}`} />
            <CardContent>
              <Typography><strong>Diagnosis:</strong> {record.diagnosis}</Typography>
              <Typography><strong>Treatment:</strong> {record.treatment}</Typography>
              <Typography><strong>Prescription:</strong> {record.prescription}</Typography>
              <Typography><strong>Lab Results:</strong> {record.labResults}</Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" color="secondary" onClick={() => openEditDialog(record)}>
                Edit Record
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>

      {/* Edit Record Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Edit Health Record</DialogTitle>
        <DialogContent>
          {editRecord && (
            <>
              <TextField
                label="Doctor's Name"
                value={editRecord.doctorName}
                onChange={(e) => setEditRecord({ ...editRecord, doctorName: e.target.value })}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Diagnosis"
                value={editRecord.diagnosis}
                onChange={(e) => setEditRecord({ ...editRecord, diagnosis: e.target.value })}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Treatment"
                value={editRecord.treatment}
                onChange={(e) => setEditRecord({ ...editRecord, treatment: e.target.value })}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Prescription"
                value={editRecord.prescription}
                onChange={(e) => setEditRecord({ ...editRecord, prescription: e.target.value })}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Lab Results"
                value={editRecord.labResults}
                onChange={(e) => setEditRecord({ ...editRecord, labResults: e.target.value })}
                fullWidth
                margin="normal"
              />
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleUpdateRecord} color="primary">
            Save Changes
          </Button>
          <Button onClick={() => setOpenDialog(false)} color="secondary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default HealthRecords;
