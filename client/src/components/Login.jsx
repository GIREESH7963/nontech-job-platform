import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [role, setRole] = useState('');
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleRoleChange = (selectedRole) => setRole(selectedRole);
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!role) return alert('Please select a role to login.');
    console.log('Login Details:', { ...formData, role });
    alert('Login successful (check console)');
    if (role === 'provider') navigate('/provider-dashboard');
    else if (role === 'client') navigate('/client-dashboard');
  };

  return (
    <div style={{ backgroundColor: '#121212', minHeight: '100vh' }}>
      <div className="container d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div className="card shadow border-0" style={{ maxWidth: '450px', width: '100%' }}>
          <div className="card-header bg-dark text-light text-center">
            <h2 className="h5 mb-0">Login</h2>
          </div>
          <div className="card-body bg-secondary-subtle p-4" style={{ backgroundColor: '#f7f7f7' }}>
            <div className="d-flex justify-content-center mb-4 gap-3">
              <button
                onClick={() => handleRoleChange('client')}
                className={`btn ${role === 'client' ? 'btn-dark' : 'btn-outline-dark'} rounded-0`}
                style={{ minWidth: '120px' }}
              >
                Client
              </button>
              <button
                onClick={() => handleRoleChange('provider')}
                className={`btn ${role === 'provider' ? 'btn-dark' : 'btn-outline-dark'} rounded-0`}
                style={{ minWidth: '120px' }}
              >
                Service Provider
              </button>
            </div>
            {role && (
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label text-muted">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control rounded-0 border-dark"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label text-muted">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control rounded-0 border-dark"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-dark w-100 rounded-0 py-2" style={{ backgroundColor: '#202123' }}>
                  Login
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
