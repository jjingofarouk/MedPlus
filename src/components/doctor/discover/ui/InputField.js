import React from 'react';

const InputField = ({ label, id, name, type = 'text', placeholder, required }) => (
  <div className="form-group">
    <label htmlFor={id}>{label}</label>
    <input type={type} id={id} name={name} placeholder={placeholder} required={required} />
  </div>
);

export default InputField;
