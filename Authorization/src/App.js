import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<h1 className="text-center mt-5">Welcome!</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
