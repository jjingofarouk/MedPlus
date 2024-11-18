import React, { useState, useEffect } from 'react';
import './HealthDirectory.css'; // Import CSS file for styling

const HealthDirectory = () => {
    const [facilities, setFacilities] = useState([]);

    useEffect(() => {
        // Fetch facilities from the API (you need to replace this with your API endpoint)
        fetch('/api/health-facilities')
            .then(response => response.json())
            .then(data => setFacilities(data))
            .catch(error => console.error('Error fetching facilities:', error));
    }, []);

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this facility?')) {
            fetch(`/api/health-facilities/${id}`, {
                method: 'DELETE',
            })
            .then(() => {
                setFacilities(facilities.filter(facility => facility.id !== id));
            })
            .catch(error => console.error('Error deleting facility:', error));
        }
    };

    return (
        <div className="health-directory">
            <h1>Health Directory</h1>
            <a href="/add-health-facility" className="add-facility-link">Add New Facility</a>
            <ul>
                {facilities.map(facility => (
                    <li key={facility.id}>
                        <strong>{facility.name}</strong><br />
                        {facility.address}<br />
                        Phone: {facility.phone}<br />
                        Email: {facility.email}<br />
                        Website: <a href={facility.website} target="_blank" rel="noopener noreferrer">{facility.website}</a><br />
                        Type: {facility.facility_type}<br />
                        Services: {facility.services}<br />
                        <a href={`/edit-health-facility/${facility.id}`}>Edit</a>
                        <button onClick={() => handleDelete(facility.id)} className="delete-button">Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HealthDirectory;
