// src/components/MovieCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-black text-white p-4 rounded-lg shadow-md overflow-hidden">
      <img
        src={movie.image}
        alt={movie.title}
        className="w-full h-64 object-cover mb-2"
      />
      <h3 className="text-xl font-bold">{movie.title}</h3>
      <p className="text-sm text-gray-400">Genre: {movie.genre}</p>
      <p className="text-sm text-gray-400">Durasi: {movie.duration}</p>

      {/* Tambahkan tombol detail */}
      <Link
        to={`/movie/${movie.id}`}
        className="mt-4 inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition duration-300"
      >
        Lihat Detail
      </Link>
    </div>
  );
};

export default MovieCard;
