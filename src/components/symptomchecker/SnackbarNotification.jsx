import React from 'react';
import { Snackbar, Alert } from '@mui/material';

const SnackbarNotification = ({ open, message, onClose }) => {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
      <Alert onClose={onClose} severity="error">{message}</Alert>
    </Snackbar>
  );
};

export default SnackbarNotification;
