// PrescriptionTable.js
import React from 'react';
import PrescriptionRow from './PrescriptionRow';

function PrescriptionTable({ prescriptions }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Patient ID</th>
          <th>Doctor ID</th>
          <th>Date</th>
          <th>Medication</th>
          <th>Dosage</th>
          <th>Instructions</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {prescriptions.map(prescription => (
          <PrescriptionRow key={prescription.id} prescription={prescription} />
        ))}
      </tbody>
    </table>
  );
}

export default PrescriptionTable;
