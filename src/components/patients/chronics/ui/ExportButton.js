import React from 'react';
import jsPDF from 'jspdf';

function ExportButton({ prescriptions }) {
  const exportToPDF = () => {
    const doc = new jsPDF();
    let yPos = 10;
    prescriptions.forEach((prescription) => {
      doc.text(`Date: ${prescription.date}`, 10, yPos);
      doc.text(`Medication: ${prescription.medication}`, 10, yPos + 10);
      doc.text(`Doctor: ${prescription.doctor}`, 10, yPos + 20);
      yPos += 30;
    });
    doc.save('prescriptions.pdf');
  };

  return (
    <button className="export-button" onClick={exportToPDF}>
      Export to PDF
    </button>
  );
}

export default ExportButton;
