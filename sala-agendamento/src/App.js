// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SupabaseProvider } from './contexts/SupabaseContext';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import RoomManagement from './components/RoomManagement';
import AvailableRooms from './components/AvailableRooms';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <SupabaseProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/room-management" element={<RoomManagement />} />
          <Route path="/available-rooms" element={<AvailableRooms />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </Router>
    </SupabaseProvider>
  );
}

export default App;