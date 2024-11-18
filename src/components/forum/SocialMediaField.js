import React, { useState } from 'react';

const SocialMediaField = () => {
  const [profiles, setProfiles] = useState([{ id: 1, platform: '', handle: '' }]);

  const addProfile = () => {
    setProfiles([...profiles, { id: profiles.length + 1, platform: '', handle: '' }]);
  };

  const removeProfile = (id) => {
    setProfiles(profiles.filter(profile => profile.id !== id));
  };

  return (
    <div className="form-group">
      <label>Social Media Profiles:</label>
      {profiles.map((profile, index) => (
        <div key={index} className="social-media-group">
          <select name="social_media_platform[]">
            <option value="">Select Platform</option>
            <option value="facebook">Facebook</option>
            <option value="twitter">Twitter</option>
            <option value="linkedin">LinkedIn</option>
            <option value="instagram">Instagram</option>
          </select>
          <input type="text" name="social_media_handle[]" placeholder="e.g., @username" />
          <button type="button" onClick={() => removeProfile(profile.id)}>Remove</button>
        </div>
      ))}
      <button type="button" onClick={addProfile}>Add Another Profile</button>
    </div>
  );
};

export default SocialMediaField;
