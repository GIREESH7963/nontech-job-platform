import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: '',
    contact: '',
    address: '',
    city: '',
    state: '',
    landmark: ''
  });

  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem('clientProfile'));
    if (savedProfile) {
      setProfile(savedProfile);  // Load saved profile
    }
  }, []);

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    localStorage.setItem('clientProfile', JSON.stringify(profile));  // Save updated profile
    alert('Profile updated successfully!');
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Update Your Profile</h2>
      <form onSubmit={handleProfileUpdate} className="bg-dark text-white p-4 rounded">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="contact" className="form-label">Contact</label>
          <input
            type="text"
            className="form-control"
            id="contact"
            value={profile.contact}
            onChange={(e) => setProfile({ ...profile, contact: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <textarea
            className="form-control"
            id="address"
            rows="3"
            value={profile.address}
            onChange={(e) => setProfile({ ...profile, address: e.target.value })}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="city" className="form-label">City</label>
          <input
            type="text"
            className="form-control"
            id="city"
            value={profile.city}
            onChange={(e) => setProfile({ ...profile, city: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="state" className="form-label">State</label>
          <input
            type="text"
            className="form-control"
            id="state"
            value={profile.state}
            onChange={(e) => setProfile({ ...profile, state: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="landmark" className="form-label">Nearby Landmark</label>
          <input
            type="text"
            className="form-control"
            id="landmark"
            value={profile.landmark}
            onChange={(e) => setProfile({ ...profile, landmark: e.target.value })}
            required
          />
        </div>
        <button type="submit" className="btn btn-warning">Update Profile</button>
      </form>
    </div>
  );
};

export default Profile;
