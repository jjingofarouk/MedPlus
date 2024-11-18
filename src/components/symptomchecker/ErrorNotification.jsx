import React from 'react';
import { Snackbar, Alert } from '@mui/material';

const ErrorNotification = ({ open, message, onClose }) => (
  <Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
    <Alert onClose={onClose} severity="error">{message}</Alert>
  </Snackbar>
);

export default ErrorNotification;
