import React from 'react';
import { List, ListItem, Button, TextField } from '@mui/material';

const DrugHistory = ({ drugHistory, onAddDrug }) => {
  const [newDrug, setNewDrug] = React.useState('');

  const handleAddDrug = () => {
    if (newDrug) {
      onAddDrug(newDrug);
      setNewDrug('');
    }
  };

  return (
    <div>
      <List>
        {drugHistory.map((drug, index) => (
          <ListItem key={index}>{drug}</ListItem>
        ))}
      </List>
      <TextField value={newDrug} onChange={(e) => setNewDrug(e.target.value)} placeholder="New Drug" />
      <Button onClick={handleAddDrug}>Add Drug</Button>
    </div>
  );
};

export default DrugHistory;
