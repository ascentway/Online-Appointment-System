
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Appointments from './pages/Appointments';
import Doctors from './pages/Doctors';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Records from './pages/Records';
import Profile from './pages/Profile';
import { AuthProvider } from './pages/Context';

const App = () => {
  return (
    <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/records" element={<Records />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
    </AuthProvider>
  );
};

export default App;
