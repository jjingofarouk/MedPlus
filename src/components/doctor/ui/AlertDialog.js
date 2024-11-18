// src/components/ui/AlertDialog.js
import React from 'react';
import './AlertDialog.css';

// Standalone Components
export const AlertDialogContent = ({ children }) => (
  <div className="alert-dialog-content">{children}</div>
);

export const AlertDialogHeader = ({ children }) => (
  <div className="alert-dialog-header">{children}</div>
);

export const AlertDialogTitle = ({ children }) => (
  <h2 className="alert-dialog-title">{children}</h2>
);

export const AlertDialogDescription = ({ children }) => (
  <div className="alert-dialog-description">{children}</div>
);

export const AlertDialogFooter = ({ children }) => (
  <div className="alert-dialog-footer">{children}</div>
);

export const AlertDialogAction = ({ children, onClick }) => (
  <button className="alert-dialog-action" onClick={onClick}>
    {children}
  </button>
);

// Main AlertDialog Component
const AlertDialog = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="alert-dialog-overlay">
      <div className="alert-dialog-box">
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription>{children}</AlertDialogDescription>
        <AlertDialogFooter>
          <AlertDialogAction onClick={onClose}>Close</AlertDialogAction>
        </AlertDialogFooter>
      </div>
    </div>
  );
};

export default AlertDialog;
