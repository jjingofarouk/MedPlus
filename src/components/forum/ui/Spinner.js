import React from 'react';
import 'H:/Med/medhub/src/components/styles/Spinner.css';

const Spinner = () => {
  return (
    <div className="spinner-container">
      <div className="wave-spinner">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
    </div>
  );
};

export default Spinner;
