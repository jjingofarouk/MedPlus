import React from 'react';
import PropTypes from 'prop-types';

const Label = ({ text, htmlFor, required = false }) => {
  return (
    <label htmlFor={htmlFor} className="custom-label">
      {text}
      {required && <span className="required-indicator">*</span>}
    </label>
  );
};

Label.propTypes = {
  text: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

export default Label;
