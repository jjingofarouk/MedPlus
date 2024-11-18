import React from 'react';
import './UserProfiles.css';

const UserProfiles = () => {
  // Example user profiles
  const userProfiles = [
    { id: 1, name: 'Dr. Smith', bio: 'Medical researcher and doctor.', img: 'https://via.placeholder.com/50' },
    { id: 2, name: 'Dr. Adams', bio: 'Expert in infectious diseases.', img: 'https://via.placeholder.com/50' },
  ];

  return (
    <section className="user-profiles">
      <h2 className="section-title">User Profiles</h2>
      <div className="profile-container">
        {userProfiles.map(user => (
          <div key={user.id} className="profile-card">
            <img src={user.img} alt={user.name} className="profile-img" />
            <div className="profile-info">
              <h3 className="profile-name">{user.name}</h3>
              <p className="profile-bio">{user.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UserProfiles;
