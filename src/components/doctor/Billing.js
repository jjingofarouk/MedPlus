import React, { useState } from 'react';
import './Billing.css'; // Import CSS for styling
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Billing = () => {
  const [patients, setPatients] = useState([]);
  const [newPatient, setNewPatient] = useState({
    name: '',
    phone: '',
    service: '',
    amount: '',
    notes: '',
    date: new Date().toISOString().slice(0, 10), // Today's date
  });
  const [payments, setPayments] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [totalEarnings, setTotalEarnings] = useState(0);
  const [statusFilter, setStatusFilter] = useState('All');

  // Handle adding a new patient
  const handleAddPatient = (e) => {
    e.preventDefault();
    if (newPatient.name && newPatient.phone && newPatient.service && newPatient.amount) {
      const patient = { ...newPatient, id: Date.now(), status: 'Pending' };
      setPatients([...patients, patient]);
      setPayments([...payments, patient]);
      setNewPatient({ name: '', phone: '', service: '', amount: '', notes: '', date: new Date().toISOString().slice(0, 10) });
      calculateTotalEarnings([...payments, patient]);
      toast.success("Patient added successfully!");
    } else {
      toast.error("Please fill in all fields.");
    }
  };

  // Calculate total earnings
  const calculateTotalEarnings = (payments) => {
    const total = payments.reduce((sum, payment) => sum + parseFloat(payment.amount), 0);
    setTotalEarnings(total);
  };

  // Handle payment status update
  const handlePaymentStatus = (id) => {
    setPayments(payments.map(payment =>
      payment.id === id ? { ...payment, status: 'Paid' } : payment
    ));
    toast.success("Payment status updated!");
  };

  // Handle deleting a patient
  const handleDeletePatient = (id) => {
    if (window.confirm("Are you sure you want to delete this patient?")) {
      const updatedPatients = patients.filter(patient => patient.id !== id);
      const updatedPayments = payments.filter(payment => payment.id !== id);
      setPatients(updatedPatients);
      setPayments(updatedPayments);
      calculateTotalEarnings(updatedPayments);
      toast.success("Patient deleted successfully!");
    }
  };

  // Search patients
  const filteredPatients = patients.filter(patient =>
    (patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.phone.includes(searchQuery)) &&
    (statusFilter === 'All' || patient.status === statusFilter)
  );

  // Export to CSV
  const handleExport = () => {
    const csvData = [
      ['Name', 'Phone', 'Service', 'Amount (UGX)', 'Status', 'Notes', 'Date'],
      ...patients.map(patient => [
        patient.name,
        patient.phone,
        patient.service,
        patient.amount,
        patient.status,
        patient.notes,
        patient.date,
      ]),
    ];
    
    const csvContent = csvData.map(e => e.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    toast.success("Data exported successfully!");
  };

  return (
    <div className="billing-container">
      <h1>Practice Billing Management</h1>

      {/* Form for adding patients */}
      <form onSubmit={handleAddPatient} className="patient-form">
        <input
          type="text"
          placeholder="Patient Name"
          value={newPatient.name}
          onChange={(e) => setNewPatient({ ...newPatient, name: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={newPatient.phone}
          onChange={(e) => setNewPatient({ ...newPatient, phone: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Service Provided"
          value={newPatient.service}
          onChange={(e) => setNewPatient({ ...newPatient, service: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Amount (UGX)"
          value={newPatient.amount}
          onChange={(e) => setNewPatient({ ...newPatient, amount: e.target.value })}
          required
        />
        <textarea
          placeholder="Notes"
          value={newPatient.notes}
          onChange={(e) => setNewPatient({ ...newPatient, notes: e.target.value })}
        />
        <input
          type="date"
          value={newPatient.date}
          onChange={(e) => setNewPatient({ ...newPatient, date: e.target.value })}
          required
        />
        <button type="submit">Add Patient</button>
      </form>

      {/* Search functionality */}
      <input
        type="text"
        placeholder="Search Patients..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />

      {/* Status filter */}
      <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="status-filter">
        <option value="All">All</option>
        <option value="Pending">Pending</option>
        <option value="Paid">Paid</option>
      </select>

      {/* Display patients and payment status */}
      <div className="patients-list">
        <h2>Patients</h2>
        {filteredPatients.length > 0 ? (
          filteredPatients.map(patient => (
            <div key={patient.id} className="patient-item">
              <p>{patient.name} - {patient.phone}</p>
              <p>Service: {patient.service} | Amount: UGX {patient.amount} | Status: {patient.status}</p>
              <p>Notes: {patient.notes} | Date of Service: {patient.date}</p>
              <button onClick={() => handlePaymentStatus(patient.id)}>
                {payments.find(p => p.id === patient.id).status}
              </button>
              <button onClick={() => handleDeletePatient(patient.id)} className="delete-button">Delete</button>
            </div>
          ))
        ) : (
          <p>No patients found.</p>
        )}
      </div>

      {/* Display total earnings */}
      <div className="total-earnings">
        <h3>Total Earnings: UGX {totalEarnings}</h3>
      </div>

      {/* Export Button */}
      <button onClick={handleExport} className="export-button">Export Data</button>

      {/* Notification Toast */}
      <ToastContainer />
    </div>
  );
};

export default Billing;
