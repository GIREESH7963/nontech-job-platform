import React from 'react';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    name: 'Home Cleaning',
    image: '/images/cleaning.jpeg',
    icon: '🧹'
  },
  {
    name: 'Electrician',
    image: '/images/electrician.avif',
    icon: '⚡'
  },
  {
    name: 'AC Mechanic',
    image: '/images/ac-repair.avif',
    icon: '❄️'
  },
  {
    name: 'TV Repair',
    image: '/images/tv-repair.jpeg',
    icon: '📺'
  },
  {
    name: 'Plumber',
    image: '/images/plumber.avif',
    icon: '🚰'
  },
  {
    name: 'Home Cook',
    image: '/images/chef.jpg',
    icon: '👨‍🍳'
  },
  {
    name: 'Driver',
    image: '/images/driver.jpeg',
    icon: '🚗'
  },
  {
    name: 'Computer Repair',
    image: '/images/computer-repair.avif',
    icon: '💻'
  },
  {
    name: 'Mobile Repair',
    image: '/images/mobile-repair.avif',
    icon: '📱'
  }
];

const ClientDashboard = () => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/profile');  // Navigates to the profile page
  };

  const handleServiceClick = (serviceName) => {
    const servicePath = serviceName.toLowerCase().replace(' ', '-');
    navigate(`/request/${servicePath}`);
  };

  return (
    <div className="container-fluid min-vh-100 p-0" style={{ backgroundColor: '#121212' }}>
      {/* Profile Section */}
      <div className="d-flex justify-content-between align-items-center p-4" style={{ backgroundColor: '#1c1c1c' }}>
        <h2 className="text-light text-center w-100">Client Dashboard</h2>
        <div className="dropdown">
          <button className="btn btn-dark dropdown-toggle text-light" type="button" id="profileDropdown" data-bs-toggle="dropdown" aria-expanded="false">
            Client Profile
          </button>
          <ul className="dropdown-menu" aria-labelledby="profileDropdown">
            <li><a className="dropdown-item" onClick={handleProfileClick}>View Profile</a></li> {/* Navigate to Profile */}
            <li><a className="dropdown-item" href="#">Logout</a></li>
          </ul>
        </div>
      </div>

      {/* Services Section */}
      <div className="container py-5 text-light">
        <h3 className="text-center mb-4">Available Services</h3>
        <p className="text-center mb-5 text-muted">Select a service to request a professional</p>

        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-md-4">
              <div
                className="card text-center p-3 shadow-sm bg-dark text-white border border-secondary service-card"
                style={{ 
                  cursor: 'pointer',
                  transition: 'transform 0.2s',
                  minHeight: '200px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onClick={() => handleServiceClick(service.name)}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <div style={{ 
                  width: '80px', 
                  height: '80px', 
                  marginBottom: '15px',
                  borderRadius: '50%',
                  background: '#333',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '36px'
                }}>
                  {service.icon}
                </div>
                <h5 className="mb-0 mt-2">{service.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;
