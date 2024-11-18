import React, { useEffect, useState } from "react";

const LabImagingOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      // Fetch lab and imaging orders from the backend in the future
      const dummyData = [
        { id: 1, patientName: "John Doe", test: "CBC", status: "Pending" },
        { id: 2, patientName: "Jane Smith", test: "MRI", status: "Completed" },
      ];
      setOrders(dummyData);
    };
    fetchOrders();
  }, []);

  return (
    <div className="lab-imaging-orders">
      <h3>Lab & Imaging Orders</h3>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            {order.patientName} - {order.test} - Status: {order.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LabImagingOrders;
