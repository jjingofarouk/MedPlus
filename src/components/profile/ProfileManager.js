import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';

const ProfileManager = ({ savedProfiles, handleSaveProfile, handleLoadProfile, showSaveDialog, setShowSaveDialog, showLoadDialog, setShowLoadDialog }) => {
  const [profileName, setProfileName] = useState('');

  return (
    <>
      {/* Save Profile Dialog */}
      <Dialog open={showSaveDialog} onClose={() => setShowSaveDialog(false)}>
        <DialogTitle>Save Profile</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Profile Name"
            fullWidth
            variant="standard"
            value={profileName}
            onChange={(e) => setProfileName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowSaveDialog(false)}>Cancel</Button>
          <Button onClick={() => handleSaveProfile(profileName)}>Save</Button>
        </DialogActions>
      </Dialog>

      {/* Load Profile Dialog */}
      <Dialog open={showLoadDialog} onClose={() => setShowLoadDialog(false)}>
        <DialogTitle>Load Profile</DialogTitle>
        <DialogContent>
          {savedProfiles.map((profile, index) => (
            <Button key={index} onClick={() => handleLoadProfile(profile)}>
              {profile.name}
            </Button>
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowLoadDialog(false)}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ProfileManager;
