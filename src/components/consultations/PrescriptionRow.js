// PrescriptionRow.js
import React from 'react';
import { Link } from 'react-router-dom';

function PrescriptionRow({ prescription }) {
  return (
    <tr>
      <td>{prescription.id}</td>
      <td>{prescription.patientId}</td>
      <td>{prescription.doctorId}</td>
      <td>{prescription.date}</td>
      <td>{prescription.medication}</td>
      <td>{prescription.dosage}</td>
      <td>{prescription.instructions}</td>
      <td>
        <Link to={`/edit-prescription/${prescription.id}`}>Edit</Link>
      </td>
    </tr>
  );
}

export default PrescriptionRow;
