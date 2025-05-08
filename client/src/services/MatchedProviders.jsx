import React from 'react';

const MatchedProviders = ({ providers, onRequest }) => {
  return (
    <div className="mt-4">
      <h4>Matched Providers</h4>
      {providers.length === 0 && <p>No providers found.</p>}
      {providers.map((p, idx) => (
        <div key={idx} className="card p-2 mb-2">
          <p><strong>Name:</strong> {p.name}</p>
          <p><strong>Gender:</strong> {p.gender}</p>
          <p><strong>Fee:</strong> ₹{p.fee}</p>
          <p><strong>Experience:</strong> {p.experience} years</p>
          <button className="btn btn-success" onClick={() => onRequest(p)}>Send Request</button>
        </div>
      ))}
    </div>
  );
};

export default MatchedProviders;
