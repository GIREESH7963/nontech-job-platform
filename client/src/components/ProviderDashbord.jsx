import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProviderDashboard = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    axios.get('/api/provider/requests').then(res => setRequests(res.data.requests));
  }, []);

  const respondToRequest = async (id, decision) => {
    await axios.post(`/api/provider/respond`, { id, decision });
    alert(`You have ${decision}ed the request.`);
  };

  return (
    <div className="container py-5 text-light" style={{ backgroundColor: '#121212' }}>
      <h2 className="mb-4">Client Requests</h2>
      <div className="row">
        {requests.map((req) => (
          <div key={req._id} className="col-md-6 mb-3">
            <div className="card bg-dark text-white p-3">
              <h5>Service: {req.service}</h5>
              <p>Date: {req.date}</p>
              <p>Time: {req.time}</p>
              <p>Fare Offered: ₹{req.fare}</p>
              <p>Client Contact: {req.contact}</p>
              <p>Location: {req.location}</p>
              <div className="d-flex gap-2">
                <button className="btn btn-success" onClick={() => respondToRequest(req._id, 'accept')}>Accept</button>
                <button className="btn btn-danger" onClick={() => respondToRequest(req._id, 'reject')}>Reject</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProviderDashboard;
