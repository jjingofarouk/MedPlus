import React, { useState } from "react";

const PrescriptionRefills = () => {
  const [prescriptionRefill, setPrescriptionRefill] = useState({
    medication: "",
    dosage: "",
    quantity: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Prescription refill request:", prescriptionRefill);
    // Later, this will send a POST request to your backend to request a refill
  };

  return (
    <div className="prescription-refills">
      <h3>Prescription Refills</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Medication:
          <input
            type="text"
            value={prescriptionRefill.medication}
            onChange={(e) => setPrescriptionRefill({ ...prescriptionRefill, medication: e.target.value })}
          />
        </label>
        <label>
          Dosage:
          <input
            type="text"
            value={prescriptionRefill.dosage}
            onChange={(e) => setPrescriptionRefill({ ...prescriptionRefill, dosage: e.target.value })}
          />
        </label>
        <label>
          Quantity:
          <input
            type="number"
            value={prescriptionRefill.quantity}
            onChange={(e) => setPrescriptionRefill({ ...prescriptionRefill, quantity: e.target.value })}
          />
        </label>
        <button type="submit">Request Refill</button>
      </form>
    </div>
  );
};

export default PrescriptionRefills;
