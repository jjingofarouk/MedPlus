import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ClinicianProfileUpdate = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [specialization, setSpecialization] = useState('');
    const [phone, setPhone] = useState('');
    const [licenseNumber, setLicenseNumber] = useState('');

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await axios.get('http://localhost:3000/profile', {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
                });
                const user = response.data;
                setName(user.name);
                setEmail(user.email);
                setSpecialization(user.specialization);
                setPhone(user.phone);
                setLicenseNumber(user.licenseNumber);
            } catch (error) {
                console.error('Failed to fetch profile:', error);
            }
        };
        fetchUserProfile();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put('http://localhost:3000/profile', { name, email, specialization, phone, licenseNumber }, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            });
            alert('Profile updated successfully!');
        } catch (error) {
            console.error('Failed to update profile:', error);
        }
    };

    return (
        <div>
            <h2>Update Your Profile</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                <input type="text" value={specialization} onChange={(e) => setSpecialization(e.target.value)} placeholder="Specialization" required />
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" />
                <input type="text" value={licenseNumber} onChange={(e) => setLicenseNumber(e.target.value)} placeholder="License Number" />
                <button type="submit">Update Profile</button>
            </form>
        </div>
    );
};

export default ClinicianProfileUpdate;
