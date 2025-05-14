// src/components/MovieCard.jsx
import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-md transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
      {/* Gambar Film */}
      <div className="overflow-hidden">
        <img
          src={movie.image}
          alt={movie.title}
          className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Detail Film */}
      <div className="p-4">
        <h2 className="text-xl font-bold text-white">{movie.title}</h2>
        <p className="text-sm text-gray-400 mt-1">Genre: {movie.genre}</p>
        <p className="text-sm text-gray-400">Durasi: {movie.duration}</p>

        {/* Tombol Detail */}
        <a
          href={`/movie/${movie.id}`}
          className="mt-4 inline-block text-red-500 hover:text-red-400 text-sm font-semibold"
        >
          Lihat Detail →
        </a>
      </div>
    </div>
  );
};

export default MovieCard;