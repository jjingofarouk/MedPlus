import React, { useState, useEffect, useRef } from 'react';
import './Select.css';

export const Select = ({ onChange, value, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  const handleToggle = () => setIsOpen((prev) => !prev);

  const handleSelect = (selectedValue) => {
    onChange({ target: { value: selectedValue } });
    setIsOpen(false);
  };

  // Close dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div
      className={`select ${isOpen ? 'open' : ''}`}
      onClick={handleToggle}
      ref={selectRef}
    >
      <SelectTrigger>
        <SelectValue value={value} placeholder="-- Select Calculator --" />
      </SelectTrigger>
      {isOpen && (
        <SelectContent>
          {React.Children.map(children, (child) =>
            React.cloneElement(child, {
              onClick: () => handleSelect(child.props.value),
            })
          )}
        </SelectContent>
      )}
    </div>
  );
};

export const SelectTrigger = ({ children }) => (
  <div className="select-trigger">{children}</div>
);

export const SelectValue = ({ value, placeholder }) => (
  <span className="select-value">{value || placeholder}</span>
);

export const SelectContent = ({ children }) => (
  <div className="select-content">{children}</div>
);

export const SelectItem = ({ value, children, onClick }) => (
  <div onClick={onClick} value={value} className="select-item">
    {children}
  </div>
);
