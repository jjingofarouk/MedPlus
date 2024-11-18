import React, { useState } from 'react';
import ProfileForm from './ProfileForm';

const ProfilePage = () => {
  const [formData, setFormData] = useState({
    csrf_token: '', // Initialize with actual token value if needed
    username: '',
    email: '',
    name: '',
    phone: '',
    date_of_birth: '',
    address: '',
    gender: '',
    profile_pic: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Add form validation and submit logic here
    // For example, use FormData to handle file uploads and make a POST request
  };

  return (
    <ProfileForm
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      errors={errors}
    />
  );
};

export default ProfilePage;
