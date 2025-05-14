// src/pages/DashboardAdmin.jsx
import React, { useState } from 'react';

const DashboardAdmin = () => {
  const [movies, setMovies] = useState([
    { id: 1, title: "Avengers: Endgame", genre: "Action", duration: "180 min" },
    { id: 2, title: "Spider-Man: No Way Home", genre: "Action", duration: "148 min" },
    { id: 3, title: "The Batman", genre: "Crime", duration: "176 min" }
  ]);

  const [newMovie, setNewMovie] = useState({
    title: '',
    genre: '',
    duration: ''
  });

  const handleAddMovie = (e) => {
    e.preventDefault();
    if (!newMovie.title || !newMovie.genre || !newMovie.duration) return;
    const newEntry = { ...newMovie, id: movies.length + 1 };
    setMovies([...movies, newEntry]);
    setNewMovie({ title: '', genre: '', duration: '' });
  };

  const handleDeleteMovie = (id) => {
    setMovies(movies.filter(movie => movie.id !== id));
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 border-b border-gray-800">
        <h1 className="text-3xl font-bold">Dashboard Admin</h1>
        <p className="mt-1 text-gray-400">Kelola film dan jadwal bioskop di sini</p>
      </header>

      {/* Statistik */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-900 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-red-500">Total Film</h2>
          <p className="text-3xl font-bold mt-2">{movies.length}</p>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-red-500">Tiket Terjual</h2>
          <p className="text-3xl font-bold mt-2">2.450</p>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-red-500">Pendapatan</h2>
          <p className="text-3xl font-bold mt-2">Rp120.000.000</p>
        </div>
      </section>

      {/* Daftar Film & Form Tambah Film */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Film Sedang Tayang</h2>
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition duration-300">
            Tambah Film
          </button>
        </div>

        {/* Form Tambah Film (Opsional) */}
        <form onSubmit={handleAddMovie} className="mb-8 space-y-4 max-w-md">
          <input
            type="text"
            placeholder="Judul Film"
            value={newMovie.title}
            onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
            className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:border-red-500"
          />
          <input
            type="text"
            placeholder="Genre"
            value={newMovie.genre}
            onChange={(e) => setNewMovie({ ...newMovie, genre: e.target.value })}
            className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:border-red-500"
          />
          <input
            type="text"
            placeholder="Durasi"
            value={newMovie.duration}
            onChange={(e) => setNewMovie({ ...newMovie, duration: e.target.value })}
            className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:border-red-500"
          />
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md transition duration-300"
          >
            Simpan Film Baru
          </button>
        </form>

        {/* Daftar Film */}
        <div className="space-y-4">
          {movies.map((movie) => (
            <div key={movie.id} className="bg-gray-900 p-4 rounded-lg shadow-md flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold">{movie.title}</h3>
                <p className="text-sm text-gray-400">Genre: {movie.genre}</p>
                <p className="text-sm text-gray-400">Durasi: {movie.duration}</p>
              </div>
              <div className="flex space-x-2">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm transition duration-300">
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteMovie(movie.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition duration-300"
                >
                  Hapus
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DashboardAdmin;