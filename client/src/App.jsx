import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup'; // Import Signup component
import Login from './components/Login'; // Import Login component
import ClientDashboard from './components/ClientDashboard';
 
import Profile from './components/Profile';
import ServiceRequest from './components/ServiceRequest'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ClientDashboard" element={<ClientDashboard/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/request/:serviceName" element={<ServiceRequest />} />
      </Routes>
    </Router>
  );
};

export default App;
