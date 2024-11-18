import React from 'react';

export const Dialog = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="dialog-backdrop">
      <div className="dialog-content">
        <h2 className="dialog-title">{title}</h2>
        <button className="dialog-close" onClick={onClose}>Close</button>
        <div className="dialog-body">{children}</div>
      </div>
    </div>
  );
};

export const DialogTrigger = ({ onClick, children }) => (
  <button className="dialog-trigger" onClick={onClick}>
    {children}
  </button>
);

export const DialogContent = ({ children }) => (
  <div className="dialog-content-body">{children}</div>
);

export const DialogHeader = ({ title }) => (
  <div className="dialog-header">
    <h2>{title}</h2>
  </div>
);

export const DialogTitle = ({ title }) => (
  <h3 className="dialog-subtitle">{title}</h3>
);

// Add DialogFooter
export const DialogFooter = ({ children }) => (
  <div className="dialog-footer">{children}</div>
);

// Add DialogDescription
export const DialogDescription = ({ children }) => (
  <div className="dialog-description">{children}</div>
);
