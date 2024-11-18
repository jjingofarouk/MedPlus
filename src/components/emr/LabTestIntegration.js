import React, { useState, useEffect } from 'react';
import './LabTestIntegration.css';

const LabTestIntegration = () => {
  const [testOrders, setTestOrders] = useState([]);
  const [formData, setFormData] = useState({
    testId: '',
    patientName: '',
    testType: '',
    orderDate: '',
    resultDate: '',
    results: '',
    status: 'Pending', // Status can be 'Pending', 'Completed', 'Cancelled'
  });
  const [errors, setErrors] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    // Load existing test orders from a data source if needed
    setTestOrders([]);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.patientName) errors.patientName = 'Patient name is required';
    if (!formData.testType) errors.testType = 'Test type is required';
    if (!formData.orderDate) errors.orderDate = 'Order date is required';
    if (formData.resultDate && new Date(formData.resultDate) < new Date(formData.orderDate)) {
      errors.resultDate = 'Result date cannot be before order date';
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (isEditing) {
        const updatedOrders = testOrders.map((order, index) =>
          index === editIndex ? formData : order
        );
        setTestOrders(updatedOrders);
        setIsEditing(false);
      } else {
        setTestOrders([...testOrders, formData]);
      }
      setFormData({
        testId: '',
        patientName: '',
        testType: '',
        orderDate: '',
        resultDate: '',
        results: '',
        status: 'Pending',
      });
    }
  };

  const handleEdit = (index) => {
    setFormData(testOrders[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedOrders = testOrders.filter((_, i) => i !== index);
    setTestOrders(updatedOrders);
  };

  const handleCancel = (index) => {
    const updatedOrders = testOrders.map((order, i) =>
      i === index ? { ...order, status: 'Cancelled' } : order
    );
    setTestOrders(updatedOrders);
  };

  return (
    <div className="lab-test-integration">
      <h2>Lab Test Integration</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="patientName">Patient Name:</label>
          <input
            type="text"
            id="patientName"
            name="patientName"
            value={formData.patientName}
            onChange={handleChange}
            className={errors.patientName ? 'input-error' : ''}
          />
          {errors.patientName && <span className="error-text">{errors.patientName}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="testType">Test Type:</label>
          <input
            type="text"
            id="testType"
            name="testType"
            value={formData.testType}
            onChange={handleChange}
            className={errors.testType ? 'input-error' : ''}
          />
          {errors.testType && <span className="error-text">{errors.testType}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="orderDate">Order Date:</label>
          <input
            type="date"
            id="orderDate"
            name="orderDate"
            value={formData.orderDate}
            onChange={handleChange}
            className={errors.orderDate ? 'input-error' : ''}
          />
          {errors.orderDate && <span className="error-text">{errors.orderDate}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="resultDate">Result Date:</label>
          <input
            type="date"
            id="resultDate"
            name="resultDate"
            value={formData.resultDate}
            onChange={handleChange}
            className={errors.resultDate ? 'input-error' : ''}
          />
          {errors.resultDate && <span className="error-text">{errors.resultDate}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="results">Results:</label>
          <textarea
            id="results"
            name="results"
            value={formData.results}
            onChange={handleChange}
            rows="4"
          />
        </div>

        <button type="submit" className="submit-btn">
          {isEditing ? 'Update Test Order' : 'Order Test'}
        </button>
      </form>

      <div className="test-orders-list">
        <h3>Lab Test Orders</h3>
        <table>
          <thead>
            <tr>
              <th>Patient Name</th>
              <th>Test Type</th>
              <th>Order Date</th>
              <th>Result Date</th>
              <th>Results</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {testOrders.map((order, index) => (
              <tr key={index}>
                <td>{order.patientName}</td>
                <td>{order.testType}</td>
                <td>{order.orderDate}</td>
                <td>{order.resultDate}</td>
                <td>{order.results}</td>
                <td>{order.status}</td>
                <td>
                  {order.status === 'Pending' && (
                    <>
                      <button onClick={() => handleEdit(index)} className="edit-btn">Edit</button>
                      <button onClick={() => handleCancel(index)} className="cancel-btn">Cancel</button>
                    </>
                  )}
                  <button onClick={() => handleDelete(index)} className="delete-btn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LabTestIntegration;
