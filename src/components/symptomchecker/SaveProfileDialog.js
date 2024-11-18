// SaveProfileDialog.js
import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';

const SaveProfileDialog = ({ open, onClose, onSave, profileName, setProfileName }) => (
  <Dialog open={open} onClose={onClose}>
    <DialogTitle>Save Profile</DialogTitle>
    <DialogContent>
      <TextField
        label="Profile Name"
        fullWidth
        value={profileName}
        onChange={(e) => setProfileName(e.target.value)}
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose} color="secondary">Cancel</Button>
      <Button onClick={onSave} color="primary">Save</Button>
    </DialogActions>
  </Dialog>
);

export default SaveProfileDialog;
