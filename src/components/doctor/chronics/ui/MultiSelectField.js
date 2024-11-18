import React, { useState } from 'react';

const MultiSelectField = ({ label, id, name, options, handleOtherField }) => {
  const [showOther, setShowOther] = useState(false);

  const handleChange = (e) => {
    if (Array.from(e.target.selectedOptions).some(option => option.value === 'other')) {
      setShowOther(true);
      handleOtherField(true);
    } else {
      setShowOther(false);
      handleOtherField(false);
    }
  };

  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <select id={id} name={name} multiple onChange={handleChange}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>{option.label}</option>
        ))}
      </select>
      {showOther && (
        <div>
          <label>Please specify:</label>
          <textarea id={`${id}_other`} name={`${name}_other`} />
        </div>
      )}
    </div>
  );
};

export default MultiSelectField;
