import React from 'react';

const ProfileForm = ({ formData, handleChange, handleSubmit, errors }) => {
  return (
    <main>
      <form method="POST" encType="multipart/form-data" onSubmit={handleSubmit}>
        {/* Hidden field for CSRF token */}
        <input type="hidden" name="csrf_token" value={formData.csrf_token} />

        <div>
          <label htmlFor="username">Username:</label><br />
          <input
            type="text"
            id="username"
            name="username"
            size="32"
            value={formData.username}
            onChange={handleChange}
          /><br />
          {errors.username && <span className="error">{errors.username}</span>}
        </div>

        <div>
          <label htmlFor="email">Email:</label><br />
          <input
            type="email"
            id="email"
            name="email"
            size="32"
            value={formData.email}
            onChange={handleChange}
          /><br />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div>
          <label htmlFor="name">Name:</label><br />
          <input
            type="text"
            id="name"
            name="name"
            size="32"
            value={formData.name}
            onChange={handleChange}
          /><br />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div>
          <label htmlFor="phone">Phone:</label><br />
          <input
            type="text"
            id="phone"
            name="phone"
            size="32"
            value={formData.phone}
            onChange={handleChange}
          /><br />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>

        <div>
          <label htmlFor="date_of_birth">Date of Birth:</label><br />
          <input
            type="date"
            id="date_of_birth"
            name="date_of_birth"
            value={formData.date_of_birth}
            onChange={handleChange}
          /><br />
          {errors.date_of_birth && <span className="error">{errors.date_of_birth}</span>}
        </div>

        <div>
          <label htmlFor="address">Address:</label><br />
          <input
            type="text"
            id="address"
            name="address"
            size="32"
            value={formData.address}
            onChange={handleChange}
          /><br />
          {errors.address && <span className="error">{errors.address}</span>}
        </div>

        <div>
          <label htmlFor="gender">Gender:</label><br />
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select><br />
          {errors.gender && <span className="error">{errors.gender}</span>}
        </div>

        <div>
          <label htmlFor="profile_pic">Profile Picture:</label><br />
          <input
            type="file"
            id="profile_pic"
            name="profile_pic"
            onChange={handleChange}
          /><br />
          {errors.profile_pic && <span className="error">{errors.profile_pic}</span>}
        </div>

        <div>
          <button type="submit">Update Profile</button>
        </div>
      </form>
    </main>
  );
};

export default ProfileForm;
