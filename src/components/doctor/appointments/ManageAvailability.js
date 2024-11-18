// ManageAvailability.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from './ui/button';

const ManageAvailability = () => {
  const [isAvailable, setIsAvailable] = useState(false);

  useEffect(() => {
    fetchAvailability();
  }, []);

  const fetchAvailability = async () => {
    try {
      const response = await axios.get('http://localhost:3000/availability', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setIsAvailable(response.data.isAvailable);
    } catch (error) {
      console.error('Error fetching availability:', error);
    }
  };

  const toggleAvailability = async () => {
    try {
      await axios.post('http://localhost:3000/availability/toggle', {}, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setIsAvailable((prev) => !prev);
    } catch (error) {
      console.error('Error toggling availability:', error);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Manage Availability</h2>
      <p className="mb-4">
        You are currently <strong>{isAvailable ? 'Available' : 'Unavailable'}</strong> for appointments.
      </p>
      <Button onClick={toggleAvailability}>
        {isAvailable ? 'Set as Unavailable' : 'Set as Available'}
      </Button>
    </div>
  );
};

export default ManageAvailability;
