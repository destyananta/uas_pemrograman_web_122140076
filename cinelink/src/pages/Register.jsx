// src/pages/Register.jsx
import React, { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nama:', name);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Judul */}
      <h1 className="text-4xl font-bold text-center mb-6">Daftar Akun Baru</h1>

      {/* Form Register */}
      <div className="max-w-md mx-auto my-8 bg-black p-6 rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-300 text-sm font-bold mb-2">
              Nama Lengkap
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-500 focus:outline-none focus:border-red-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-500 focus:outline-none focus:border-red-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-300 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-500 focus:outline-none focus:border-red-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition duration-300"
          >
            Daftar
          </button>
        </form>
        <p className="mt-4 text-center">
          Sudah punya akun?{' '}
          <a href="/login" className="text-red-500 hover:text-red-600">
            Masuk di sini
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;