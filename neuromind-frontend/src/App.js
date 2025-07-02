import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import SignupOrLogin from './pages/SignupOrLogin.js'; // ✅ Capitalized import
import Login from './pages/Login';
import Signup from './pages/Signup.jsx';
import Dashboard from './pages/Dashboard.jsx';
// Assuming you have a Dashboard page 
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signuporlogin" element={<SignupOrLogin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
