import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [role, setRole] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    category: '',
    experience: '',
    bio: '',
    document: null,
  });

  useEffect(() => {
    document.body.style.backgroundColor = '#121212'; // dark background for the whole page
    document.body.style.color = '#e0e0e0'; // light text for readability
    return () => {
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
    };
  }, []);

  const serviceCategories = [
    'Home Cleaning', 'Electrician', 'AC Mechanic', 'Plumber', 'Carpenter', 'Home Cook',
    'TV Repair', 'Appliance Repair', 'Painter', 'Gardener', 'Mason', 'Pest Control',
    'Driver', 'Beautician', 'Tailor', 'Computer Repair', 'Mobile Repair',
    'Babysitter', 'Elderly Care', 'Pet Care'
  ];

  const handleRoleChange = (selectedRole) => {
    setRole(selectedRole);
    setFormData({ name: '', email: '', password: '', category: '', experience: '', bio: '', document: null });
  };

  const handleChange = (e) => {
    if (e.target.name === 'document') {
      setFormData({ ...formData, document: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!role) return alert("Please select a role before submitting.");
    if (role === 'provider' && !formData.document) return alert("Please upload a document for verification.");
    
    const submittedData = { ...formData, role };
    console.log("Submitted Data:", submittedData);
    alert("Signup successful (see console)");
  };

  return (
    <div className="container py-5" style={{ maxWidth: '800px' }}>
      <div className="card border-0 shadow-lg" style={{ backgroundColor: '#1e1e1e', color: '#e0e0e0' }}>
        <div className="card-header bg-dark text-light p-3">
          <h2 className="h5 mb-0 text-center">Create Your Account</h2>
        </div>
        <div className="card-body p-4">
          <div className="d-flex justify-content-center mb-4 gap-3">
            <button 
              onClick={() => handleRoleChange('client')} 
              className={`btn ${role === 'client' ? 'btn-light text-dark' : 'btn-outline-light'} rounded-pill px-4`}
            >
              Client
            </button>
            <button 
              onClick={() => handleRoleChange('provider')} 
              className={`btn ${role === 'provider' ? 'btn-light text-dark' : 'btn-outline-light'} rounded-pill px-4`}
            >
              Service Provider
            </button>
          </div>

          {role && (
            <form onSubmit={handleSubmit}>
              <div className="row g-3 mb-4">
                <div className="col-md-4">
                  <label className="form-label">Full Name</label>
                  <input 
                    name="name" 
                    type="text" 
                    className="form-control bg-dark text-light border-secondary" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Email</label>
                  <input 
                    name="email" 
                    type="email" 
                    className="form-control bg-dark text-light border-secondary" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Password</label>
                  <input 
                    name="password" 
                    type="password" 
                    className="form-control bg-dark text-light border-secondary" 
                    value={formData.password} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
              </div>

              {role === 'provider' && (
                <>
                  <div className="row g-3 mb-4">
                    <div className="col-md-4">
                      <label className="form-label">Service Category</label>
                      <select 
                        name="category" 
                        className="form-select bg-dark text-light border-secondary" 
                        value={formData.category} 
                        onChange={handleChange} 
                        required
                      >
                        <option value="">Select your service</option>
                        {serviceCategories.map((category, index) => (
                          <option key={index} value={category}>{category}</option>
                        ))}
                      </select>
                    </div>
                    <div className="col-md-4">
                      <label className="form-label">Experience (years)</label>
                      <input 
                        name="experience" 
                        type="number" 
                        className="form-control bg-dark text-light border-secondary" 
                        value={formData.experience} 
                        onChange={handleChange} 
                        required 
                      />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label">Verification Document</label>
                      <input 
                        name="document" 
                        type="file" 
                        className="form-control bg-dark text-light border-secondary" 
                        onChange={handleChange} 
                        accept=".pdf, .jpg, .jpeg, .png" 
                        required 
                      />
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col-12">
                      <label className="form-label">Professional Bio</label>
                      <textarea 
                        name="bio" 
                        className="form-control bg-dark text-light border-secondary" 
                        rows="2" 
                        value={formData.bio} 
                        onChange={handleChange} 
                        required
                        placeholder="Describe your skills, experience, and services you offer"
                      />
                    </div>
                  </div>
                </>
              )}

              <div className="d-grid">
                <button 
                  type="submit" 
                  className="btn btn-light text-dark fw-semibold rounded-pill py-2"
                >
                  Sign Up
                </button>
              </div>
            </form>
          )}

          <div className="text-center mt-4 pt-3 border-top border-secondary">
            <p className="mb-0">
              Already have an account?{' '}
              <Link to="/login" className="text-info fw-bold" style={{ textDecoration: 'underline' }}>
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
