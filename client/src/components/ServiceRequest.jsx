import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ChatBox from './ChatBox'; // Import the ChatBox component

const ServiceRequest = () => {
  const { serviceName } = useParams(); // Get the service name from the URL
  const navigate = useNavigate();

  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [fee, setFee] = useState('');
  const [location, setLocation] = useState('');
  const [professionals, setProfessionals] = useState([]); // To hold fetched professional profiles

  const handleServiceRequest = () => {
    // Simulate fetching professionals based on location (could be an API call in real scenarios)
    setProfessionals([
      { name: 'John Doe', experience: '5 years', rate: '500' }, // Simulated data
      { name: 'Jane Smith', experience: '3 years', rate: '450' }
    ]);
  };

  const handleRequestClick = (professional) => {
    // Send request to the selected professional (you can call an API for this)
    alert(`Request sent to ${professional.name}`);
    navigate('/client-dashboard'); // Redirect to the client dashboard after sending the request
  };

  return (
    <div className="container py-5 text-light" style={{ backgroundColor: '#121212' }}>
      <h2 className="text-center mb-4">Request {serviceName}</h2>

      {/* Form for selecting date, time, fee, and location */}
      <div className="mb-4">
        <label className="form-label">Select Date</label>
        <input
          type="date"
          className="form-control"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="form-label">Select Time</label>
        <input
          type="time"
          className="form-control"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="form-label">Select Fee</label>
        <input
          type="number"
          className="form-control"
          value={fee}
          onChange={(e) => setFee(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="form-label">Nearby Location</label>
        <input
          type="text"
          className="form-control"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      {/* Button to fetch professionals based on location */}
      <button className="btn btn-primary" onClick={handleServiceRequest}>
        Fetch Professionals
      </button>

      {/* Display fetched professionals */}
      {professionals.length > 0 && (
        <div className="mt-4">
          <h4>Nearby Professionals</h4>
          <ul className="list-group">
            {professionals.map((professional, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                {professional.name} - {professional.experience}
                <button className="btn btn-success" onClick={() => handleRequestClick(professional)}>
                  Send Request
                </button>
                
                {/* Chat box for each professional */}
                <ChatBox professionalName={professional.name} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ServiceRequest;
