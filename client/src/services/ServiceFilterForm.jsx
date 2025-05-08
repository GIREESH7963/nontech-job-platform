import React, { useState } from 'react';

const ServiceFilterForm = ({ onSearch }) => {
  const [form, setForm] = useState({
    category: '',
    location: '',
    gender: '',
    fee: '',
    date: '',
    time: '',
    experience: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(form); // Call parent function to fetch providers
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded">
      <div className="mb-2">
        <label>Service Category</label>
        <select name="category" onChange={handleChange} required>
          <option value="">Select</option>
          <option value="Home Cleaning">Home Cleaning</option>
          <option value="Home Cooking">Home Cooking</option>
          <option value="Electrician">Electrician</option>
          <option value="Plumber">Plumber</option>
          <option value="AC Mechanic">AC Mechanic</option>
          <option value="TV Repair">TV Repair</option>
        </select>
      </div>
      <input name="location" placeholder="Nearby Location" onChange={handleChange} className="form-control mb-2" required />
      <select name="gender" onChange={handleChange} className="form-control mb-2">
        <option value="">Preferred Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Any">Any</option>
      </select>
      <input name="fee" type="number" placeholder="Basic Fee" onChange={handleChange} className="form-control mb-2" />
      <input name="date" type="date" onChange={handleChange} className="form-control mb-2" />
      <input name="time" type="time" onChange={handleChange} className="form-control mb-2" />
      <input name="experience" placeholder="Years of Experience" onChange={handleChange} className="form-control mb-2" />
      <button type="submit" className="btn btn-primary">Search</button>
    </form>
  );
};

export default ServiceFilterForm;
