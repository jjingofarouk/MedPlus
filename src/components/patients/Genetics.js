import React, { useState } from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';
import { Button, TextField, Select, MenuItem, Card, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { CloudUpload, CloudDownload, Edit, Delete, Visibility } from '@mui/icons-material';

// GraphQL Queries & Mutations
const GET_GENETIC_RESULTS = gql`
  query GetGeneticResults($userId: ID!) {
    geneticResults(userId: $userId) {
      id
      testType
      description
      date
      fileUrl
      summary
    }
  }
`;

const UPLOAD_GENETIC_RESULT = gql`
  mutation UploadGeneticResult($userId: ID!, $testType: String!, $description: String!, $date: String!, $file: Upload!, $summary: String!) {
    uploadGeneticResult(userId: $userId, testType: $testType, description: $description, date: $date, file: $file, summary: $summary) {
      id
      testType
      description
      date
      fileUrl
      summary
    }
  }
`;

const UPDATE_GENETIC_RESULT = gql`
  mutation UpdateGeneticResult($geneticResultId: ID!, $testType: String!, $description: String!, $date: String!, $summary: String!) {
    updateGeneticResult(geneticResultId: $geneticResultId, testType: $testType, description: $description, date: $date, summary: $summary) {
      id
      testType
      description
      date
      fileUrl
      summary
    }
  }
`;

const DELETE_GENETIC_RESULT = gql`
  mutation DeleteGeneticResult($geneticResultId: ID!) {
    deleteGeneticResult(geneticResultId: $geneticResultId) {
      id
    }
  }
`;

const Genetics = () => {
  const userId = "user-123"; // Replace with actual userId from context
  const {  data = { geneticResults: [] }, loading, error, refetch } = useQuery(GET_GENETIC_RESULTS, { variables: { userId } });
  const [uploadGeneticResult] = useMutation(UPLOAD_GENETIC_RESULT);
  const [updateGeneticResult] = useMutation(UPDATE_GENETIC_RESULT);
  const [deleteGeneticResult] = useMutation(DELETE_GENETIC_RESULT);

  const [newGeneticResult, setNewGeneticResult] = useState({ testType: '', description: '', date: '', file: null, summary: '' });
  const [editGeneticResult, setEditGeneticResult] = useState(null);

  const geneticTestOptions = [
    'DNA Sequencing',
    'Carrier Screening',
    'Pharmacogenetics',
    'Ancestry Test',
    'Whole Genome Sequencing',
    'Gene Panel Test',
    'Prenatal Genetic Screening',
    'Cancer Risk Assessment',
    'Hereditary Disease Screening'
  ];

  const handleFileChange = (e) => {
    setNewGeneticResult({ ...newGeneticResult, file: e.target.files[0] });
  };

  const handleGeneticResultSubmit = async () => {
    if (newGeneticResult.file) {
      await uploadGeneticResult({
        variables: {
          userId,
          testType: newGeneticResult.testType,
          description: newGeneticResult.description,
          date: newGeneticResult.date,
          file: newGeneticResult.file,
          summary: newGeneticResult.summary
        }
      });
      setNewGeneticResult({ testType: '', description: '', date: '', file: null, summary: '' });
      refetch();
    }
  };

  const handleGeneticResultUpdate = async (geneticResultId) => {
    await updateGeneticResult({
      variables: {
        geneticResultId,
        testType: editGeneticResult.testType,
        description: editGeneticResult.description,
        date: editGeneticResult.date,
        summary: editGeneticResult.summary
      }
    });
    setEditGeneticResult(null);
    refetch();
  };

  const handleGeneticResultDelete = async (geneticResultId) => {
    await deleteGeneticResult({ variables: { geneticResultId } });
    refetch();
  };


  return (
    <div className="genetics-manager">
      <Typography variant="h4" gutterBottom>Manage Your Genetic Profile</Typography>

      {/* Upload New Genetic Test Result */}
      <Card style={{ marginBottom: '20px' }}>
        <CardContent>
          <Typography variant="h6">Upload New Genetic Test Result</Typography>
          <Select
            value={newGeneticResult.testType}
            onChange={(e) => setNewGeneticResult({ ...newGeneticResult, testType: e.target.value })}
            fullWidth
            style={{ marginBottom: '20px' }}
          >
            {geneticTestOptions.map((test, index) => (
              <MenuItem key={index} value={test}>{test}</MenuItem>
            ))}
          </Select>
          <TextField
            label="Description"
            value={newGeneticResult.description}
            onChange={(e) => setNewGeneticResult({ ...newGeneticResult, description: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Date"
            type="date"
            value={newGeneticResult.date}
            onChange={(e) => setNewGeneticResult({ ...newGeneticResult, date: e.target.value })}
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="Summary"
            value={newGeneticResult.summary}
            onChange={(e) => setNewGeneticResult({ ...newGeneticResult, summary: e.target.value })}
            fullWidth
            margin="normal"
            multiline
          />
          <input type="file" onChange={handleFileChange} />
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary" onClick={handleGeneticResultSubmit} disabled={!newGeneticResult.file}>
            Upload Genetic Test Result
          </Button>
        </CardActions>
      </Card>

      {/* Display Genetic Test Results */}
      <div className="genetic-result-list">
        {data.geneticResults.map((result) => (
          <Card key={result.id} style={{ marginBottom: '20px' }}>
            <CardContent>
              <Typography variant="h6">{result.testType}</Typography>
              <Typography variant="body1">Description: {result.description}</Typography>
              <Typography variant="body2">Date: {result.date}</Typography>
              <Typography variant="body2">Summary: {result.summary}</Typography>
              {result.fileUrl && (
                <Button variant="contained" color="secondary" startIcon={<CloudDownload />}>
                  <a href={result.fileUrl} download>Download Report</a>
                </Button>
              )}
            </CardContent>
            <CardActions>
              <IconButton color="primary" onClick={() => setEditGeneticResult(result)}><Edit /></IconButton>
              <IconButton color="secondary" onClick={() => handleGeneticResultDelete(result.id)}><Delete /></IconButton>
              {result.fileUrl && (
                <IconButton color="default">
                  <a href={result.fileUrl} target="_blank" rel="noopener noreferrer"><Visibility /></a>
                </IconButton>
              )}
            </CardActions>
          </Card>
        ))}
      </div>

      {/* Edit Genetic Result Modal */}
      {editGeneticResult && (
        <Card style={{ marginBottom: '20px' }}>
          <CardContent>
            <Typography variant="h6">Edit Genetic Test Result</Typography>
            <Select
              value={editGeneticResult.testType}
              onChange={(e) => setEditGeneticResult({ ...editGeneticResult, testType: e.target.value })}
              fullWidth
              style={{ marginBottom: '20px' }}
            >
              {geneticTestOptions.map((test, index) => (
                <MenuItem key={index} value={test}>{test}</MenuItem>
              ))}
            </Select>
            <TextField
              label="Description"
              value={editGeneticResult.description}
              onChange={(e) => setEditGeneticResult({ ...editGeneticResult, description: e.target.value })}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Date"
              type="date"
              value={editGeneticResult.date}
              onChange={(e) => setEditGeneticResult({ ...editGeneticResult, date: e.target.value })}
              fullWidth
              margin="normal"
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="Summary"
              value={editGeneticResult.summary}
              onChange={(e) => setEditGeneticResult({ ...editGeneticResult, summary: e.target.value })}
              fullWidth
              margin="normal"
              multiline
            />
          </CardContent>
          <CardActions>
            <Button variant="contained" color="primary" onClick={() => handleGeneticResultUpdate(editGeneticResult.id)}>
              Update Genetic Test Result
            </Button>
          </CardActions>
        </Card>
      )}
    </div>
  );
};

export default Genetics;
