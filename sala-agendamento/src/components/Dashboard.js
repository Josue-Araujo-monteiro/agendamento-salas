import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <ul>
        <li><Link to="/room-management">Manage Rooms</Link></li>
        <li><Link to="/available-rooms">View Available Rooms</Link></li>
        <li><Link to="/profile">User Profile</Link></li>
      </ul>
    </div>
  );
}

export default Dashboard;