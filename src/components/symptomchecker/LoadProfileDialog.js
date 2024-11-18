// LoadProfileDialog.js
import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, List, ListItem, ListItemText } from '@mui/material';

const LoadProfileDialog = ({ open, onClose, savedProfiles, onLoadProfile }) => (
  <Dialog open={open} onClose={onClose}>
    <DialogTitle>Load Profile</DialogTitle>
    <DialogContent>
      <List>
        {savedProfiles.length ? savedProfiles.map((profile, index) => (
          <ListItem button key={index} onClick={() => onLoadProfile(profile)}>
            <ListItemText primary={profile.name} />
          </ListItem>
        )) : (
          <ListItem>
            <ListItemText primary="No saved profiles available." />
          </ListItem>
        )}
      </List>
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose} color="secondary">Cancel</Button>
    </DialogActions>
  </Dialog>
);

export default LoadProfileDialog;
