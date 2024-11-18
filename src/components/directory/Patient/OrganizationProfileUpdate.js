import React, { useState, useEffect } from 'react';
import axios from 'axios';

const hospitalProfileUpdate = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contactPerson, setContactPerson] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await axios.get('http://localhost:3000/profile', {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
                });
                const user = response.data;
                setName(user.name);
                setEmail(user.email);
                setContactPerson(user.contactPerson);
                setPhone(user.phone);
                setAddress(user.address);
            } catch (error) {
                console.error('Failed to fetch profile:', error);
            }
        };
        fetchUserProfile();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put('http://localhost:3000/profile', { name, email, contactPerson, phone, address }, {
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
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="hospital Name" required />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                <input type="text" value={contactPerson} onChange={(e) => setContactPerson(e.target.value)} placeholder="Contact Person" />
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" />
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" />
                <button type="submit">Update Profile</button>
            </form>
        </div>
    );
};

export default hospitalProfileUpdate;
