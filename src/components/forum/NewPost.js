import React, { useState } from 'react';
import PostForm from './PostDetail.js';

const NewPostPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    const newErrors = {};
    if (!formData.title) newErrors.title = 'Title is required';
    if (!formData.content) newErrors.content = 'Content is required';
    setErrors(newErrors);

    // If no errors, submit form data
    if (Object.keys(newErrors).length === 0) {
      // Example: post form data to the server
    }
  };

  return (
    <div>
      <h1>New Forum Post</h1>
      <PostForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        errors={errors}
      />
      <a href="/forum">Back to Forum</a>
    </div>
  );
};

export default NewPostPage;
