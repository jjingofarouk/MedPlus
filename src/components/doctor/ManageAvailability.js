import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from './button.js';

const ManageAvailability = () => {
  const [isAvailable, setIsAvailable] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAvailability();
  }, []);

  const fetchAvailability = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:3000/api/availability', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setIsAvailable(response.data.isAvailable);
    } catch (error) {
      setError(error.response?.data?.message || 'Error fetching availability');
      console.error('Error fetching availability:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleAvailability = async () => {
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:3000/api/availability/toggle', {}, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      // Log the server's response to understand what is returned
      console.log('Toggle availability response:', response.data);

      // Update the availability state
      setIsAvailable((prev) => !prev);
    } catch (error) {
      setError(error.response?.data?.message || 'Error toggling availability');
      console.error('Error toggling availability:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Manage Availability</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p className="mb-4">
            You are currently <strong>{isAvailable ? 'Available' : 'Unavailable'}</strong> for appointments.
          </p>
          <Button onClick={toggleAvailability}>
            {isAvailable ? 'Set as Unavailable' : 'Set as Available'}
          </Button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </>
      )}
    </div>
  );
};

export default ManageAvailability;
