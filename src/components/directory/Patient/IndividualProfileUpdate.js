import React, { useState, useEffect } from 'react';
import axios from 'axios';

const patientProfileUpdate = () => {
    const [formData, setFormData] = useState({
        name: '',
        dob: '',
        gender: '',
        district: '',
        email: '',
        phoneNumber: '',
        occupation: '',
        maritalStatus: '',
        smokingStatus: '',
        alcoholConsumption: '',
        physicalActivity: '',
        familyMedicalHistory: '',
        familyMedicalHistoryDetails: '',
        emergencyContact: '',
        emergencyPhone: '',
        emergencyContactRelationship: '',
        languagePreference: '',
        insuranceCoverage: '',
        insuranceProvider: '',
        insurancePolicyNumber: '',
        medicalHistory: '',
        medicalHistoryDetails: '',
        primaryCarePhysician: '',
        currentMedications: '',
        medicationDetails: '',
        medicationDuration: '',
        surgicalHistory: '',
        surgeryDetails: '',
    });

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await axios.get('http://localhost:3000/profile', {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
                });
                setFormData(response.data);
            } catch (error) {
                console.error('Failed to fetch profile:', error);
            }
        };
        fetchUserProfile();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put('http://localhost:3000/profile', formData, {
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
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
                <input type="date" name="dob" value={formData.dob} onChange={handleChange} placeholder="Date of Birth" />
                <select name="gender" value={formData.gender} onChange={handleChange} required>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="non-binary">Non-binary</option>
                    <option value="prefer not to say">Prefer not to say</option>
                </select>
                <select name="district" value={formData.district} onChange={handleChange} required>
                    <option value="">Select your district</option>
                    <option value="yumbe">Yumbe</option>
                    <option value="zombo">Zombo</option>
                </select>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
                <select name="country_code" value={formData.countryCode} onChange={handleChange} style={{ width: '30%', marginRight: '10px' }}>
                    <option value="">Select Country Code</option>
                    <option value="+93">+93 Afghanistan</option>
                    <option value="+263">+263 Zimbabwe</option>
                </select>
                <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone" />
                <input type="text" name="occupation" value={formData.occupation} onChange={handleChange} placeholder="Occupation" />
                <select name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} required>
                    <option value="">Select Marital Status</option>
                    <option value="single">Single</option>
                    <option value="other">Other (please specify)</option>
                </select>
                {/* Additional fields follow the same pattern */}
                <input type="text" name="emergencyContact" value={formData.emergencyContact} onChange={handleChange} placeholder="Emergency Contact Name" required />
                <input type="tel" name="emergencyPhone" value={formData.emergencyPhone} onChange={handleChange} placeholder="Emergency Contact Phone" required />
                <select name="emergencyContactRelationship" value={formData.emergencyContactRelationship} onChange={handleChange} required>
                    <option value="">Select a relationship</option>
                    <option value="parent">Parent</option>
                    <option value="sibling">Sibling</option>
                    <option value="spouse">Spouse</option>
                    <option value="friend">Friend</option>
                    <option value="colleague">Colleague</option>
                    <option value="guardian">Guardian</option>
                    <option value="other">Other (please specify)</option>
                </select>
                <input type="text" name="primaryCarePhysician" value={formData.primaryCarePhysician} onChange={handleChange} placeholder="Primary Care Physician" />
                <input type="text" name="insuranceProvider" value={formData.insuranceProvider} onChange={handleChange} placeholder="Insurance Provider" required />
                <input type="text" name="insurancePolicyNumber" value={formData.insurancePolicyNumber} onChange={handleChange} placeholder="Insurance Policy Number" />
                {/* Continue adding fields from the registration form... */}
                <button type="submit">Update Profile</button>
            </form>
        </div>
    );
};

export default patientProfileUpdate;
