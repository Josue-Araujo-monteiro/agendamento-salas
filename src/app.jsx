// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { SupabaseProvider } from './contexts/SupabaseContext';
import Login from './components/Login';
import Register from './components/Register';  // Importe o componente Register
import Dashboard from './components/Dashboard';
import RoomManagement from './components/RoomManagement';
import AvailableRooms from './components/AvailableRooms';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <SupabaseProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />  // Adicione esta linha
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/room-management" component={RoomManagement} />
          <Route path="/available-rooms" component={AvailableRooms} />
          <Route path="/profile" component={UserProfile} />
        </Switch>
      </Router>
    </SupabaseProvider>
  );
}

export default App;