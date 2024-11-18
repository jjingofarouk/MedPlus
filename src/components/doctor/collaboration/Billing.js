import React, { useState } from 'react';
import './Common.css';

const Billing = () => {
  const [bill, setBill] = useState({ patient: '', service: '', amount: '' });
  const [invoices, setInvoices] = useState([]);

  const handleBilling = (e) => {
    e.preventDefault();
    if (bill.patient && bill.service && bill.amount) {
      setInvoices([...invoices, { id: invoices.length + 1, ...bill }]);
      setBill({ patient: '', service: '', amount: '' });
    }
  };

  return (
    <div className="billing-container">
      <h2>Billing</h2>
      <form onSubmit={handleBilling}>
        <input
          type="text"
          placeholder="Patient Name"
          value={bill.patient}
          onChange={(e) => setBill({ ...bill, patient: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Service Provided"
          value={bill.service}
          onChange={(e) => setBill({ ...bill, service: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={bill.amount}
          onChange={(e) => setBill({ ...bill, amount: e.target.value })}
          required
        />
        <button type="submit" className="billing-btn">Create Invoice</button>
      </form>
      <h3>Generated Invoices</h3>
      <ul className="invoice-list">
        {invoices.map((invoice) => (
          <li key={invoice.id}>
            {invoice.patient} - {invoice.service} - ${invoice.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Billing;
