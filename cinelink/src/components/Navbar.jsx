// src/components/Navbar.jsx
import React from 'react';
import { Link, useMatch } from 'react-router-dom';

const Navbar = () => {
  const isHomeActive = useMatch('/');
  const isLoginActive = useMatch('/login');
  const isRegisterActive = useMatch('/register');
  const isHistoryActive = useMatch('/history'); // Tambahkan match untuk /history

  return (
    <nav className="bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Nama Aplikasi */}
          <div className="flex-shrink-0 font-bold text-xl text-red-500">
            Cinelink
          </div>

          {/* Menu Navigasi */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <Link
                to="/"
                className={`text-sm font-medium px-3 py-2 rounded-md ${
                  isHomeActive ? 'text-red-500' : 'text-gray-300 hover:text-white'
                }`}
              >
                Home
              </Link>
              <Link
                to="/login"
                className={`text-sm font-medium px-3 py-2 rounded-md ${
                  isLoginActive ? 'text-red-500' : 'text-gray-300 hover:text-white'
                }`}
              >
                Masuk
              </Link>
              <Link
                to="/register"
                className={`text-sm font-medium px-3 py-2 rounded-md ${
                  isRegisterActive ? 'text-red-500' : 'text-gray-300 hover:text-white'
                }`}
              >
                Daftar
              </Link>
              <Link
                to="/history"
                className={`text-sm font-medium px-3 py-2 rounded-md ${
                  isHistoryActive ? 'text-red-500' : 'text-gray-300 hover:text-white'
                }`}
              >
                Riwayat
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;