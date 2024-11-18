// src/components/doctor/history/ui/Checkbox.jsx

import React from 'react';
import PropTypes from 'prop-types';
import './Checkbox.css';

const Checkbox = ({
  label,
  checked,
  onChange,
  disabled,
  id,
  name,
  value,
  className,
}) => {
  return (
    <div className={`checkbox-container ${className || ''}`}>
      <input
        type="checkbox"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="checkbox-input"
        aria-checked={checked}
        aria-disabled={disabled}
      />
      {label && (
        <label htmlFor={id} className="checkbox-label">
          {label}
        </label>
      )}
    </div>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
};

Checkbox.defaultProps = {
  label: '',
  disabled: false,
  name: '',
  value: '',
  className: '',
};

export default Checkbox;
