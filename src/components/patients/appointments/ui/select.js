// ./src/ui/select.js
import React, { useState } from 'react';

export const Select = ({ onChange, value, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (selectedValue) => {
    onChange({ target: { value: selectedValue } }); // Simulating the event object
    setIsOpen(false);
  };

  return (
    <div className="select" onClick={handleToggle}>
      <SelectTrigger>
        <SelectValue value={value} placeholder="-- Select Tool --" />
      </SelectTrigger>
      {isOpen && (
        <SelectContent>
          {React.Children.map(children, (child) => {
            return React.cloneElement(child, {
              onClick: () => handleSelect(child.props.value),
            });
          })}
        </SelectContent>
      )}
    </div>
  );
};

export const SelectTrigger = ({ children }) => <div>{children}</div>;

export const SelectValue = ({ value, placeholder }) => (
  <span>{value || placeholder}</span>
);

export const SelectContent = ({ children }) => <div className="select-content">{children}</div>;

export const SelectItem = ({ value, children, onClick }) => (
  <div onClick={onClick} value={value} className="select-item">
    {children}
  </div>
);
