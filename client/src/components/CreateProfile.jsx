import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileCreation = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [landmark, setLandmark] = useState('');

  const navigate = useNavigate();

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    // Here, you would typically send the profile data to the server to save it in a database.
    const clientProfile = { name, contact, address, city, state, landmark };
    localStorage.setItem('clientProfile', JSON.stringify(clientProfile));  // Temporarily save in localStorage for demo
    navigate('/client-dashboard');  // Redirect to Client Dashboard after profile creation
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Create Your Profile</h2>
      <form onSubmit={handleProfileSubmit} className="bg-dark text-white p-4 rounded">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="contact" className="form-label">Contact</label>
          <input
            type="text"
            className="form-control"
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <textarea
            className="form-control"
            id="address"
            rows="3"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="city" className="form-label">City</label>
          <input
            type="text"
            className="form-control"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="state" className="form-label">State</label>
          <input
            type="text"
            className="form-control"
            id="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="landmark" className="form-label">Nearby Landmark</label>
          <input
            type="text"
            className="form-control"
            id="landmark"
            value={landmark}
            onChange={(e) => setLandmark(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Save Profile</button>
      </form>
    </div>
  );
};

export default ProfileCreation;
