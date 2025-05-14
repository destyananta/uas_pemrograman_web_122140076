// src/pages/Login.jsx
import React, { useState } from 'react';
import backgroundImg from '../assets/backgroundlogin.jpg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Ingat saya:', rememberMe);
  };

  return (
    <div className="relative h-screen">
      {/* Background blur */}
      <div
        className="fixed inset-0 bg-cover bg-center filter blur-sm -z-10"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      ></div>

      {/* Konten Utama */}
      <div className="relative z-10 flex items-center justify-center h-screen">
        {/* Tulisan Cinelink di tengah atas */}
        <div className="absolute top-0 left-0 right-0 text-center pt-20">
          <div className="text-red-500 text-5xl font-bold">Cinelink</div>
        </div>

        {/* Form Login */}
        <div className="bg-black bg-opacity-75 p-6 rounded-lg shadow-md w-full max-w-sm">
          <h1 className="text-3xl font-bold text-white mb-4 text-center">Masuk</h1>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Email atau nomor ponsel"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 mt-2 border rounded focus:outline-none focus:border-red-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Sandi"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 mt-2 border rounded focus:outline-none focus:border-red-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 mt-4 rounded transition duration-300"
            >
              Masuk
            </button>
          </form>
          <p className="mt-4 text-gray-400 text-center">ATAU</p>
          <button
            className="w-full bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 mt-2 rounded transition duration-300"
          >
            Gunakan Kode Masuk
          </button>
          <div className="flex items-center justify-between mt-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="mr-2"
              />
              <span className="text-gray-400">Ingat saya</span>
            </label>
            <a href="#" className="text-red-500 hover:text-red-600">
              Lupa sandi?
            </a>
          </div>
          <p className="mt-4 text-gray-400 text-center">
            Baru di Cinelink?{' '}
            <a href="/register" className="text-red-500 hover:text-red-600">
              Daftar sekarang.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;