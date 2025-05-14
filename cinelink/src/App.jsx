// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import MovieDetail from './pages/MovieDetail';
import BookingPage from './pages/BookingPage';
import DashboardAdmin from './pages/DashboardAdmin';
import History from './pages/History';
import AuthProvider from './context/AuthContext';
import Navbar from './components/Navbar'; // ✅ Import Navbar

function App() {
  return (
    <AuthProvider>
      <Router>
        {/* Navbar akan muncul di semua halaman */}
        <Navbar />

        {/* Routing Halaman */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/booking/:id" element={<BookingPage />} />
          <Route path="/history" element={<History />} />  
          <Route path="/admin" element={<DashboardAdmin />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;