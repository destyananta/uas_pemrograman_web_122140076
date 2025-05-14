// src/pages/Home.jsx
import React from 'react';
import MovieCard from '../components/MovieCard';

const movies = [
  {
    id: 1,
    title: "Avengers: Endgame",
    genre: "Action",
    duration: "180 min",
    image: "https://media1.tenor.com/m/5uD5JbGzVdEAAAAC/endgame-avengers.gif "
  },
  {
    id: 2,
    title: "Spider-Man: No Way Home",
    genre: "Action",
    duration: "148 min",
    image: "https://media1.tenor.com/m/4uD5JbGzVdEAAAAC/spiderman-no-way-home.gif "
  },
  {
    id: 3,
    title: "The Batman",
    genre: "Crime",
    duration: "176 min",
    image: "https://media1.tenor.com/m/3uD5JbGzVdEAAAAC/the-batman-robert-pattinson.gif "
  }
];

const Home = () => {
  return (
    <div className="bg-black text-white min-h-screen py-10">
      {/* Hero Section */}
      <header className="container mx-auto px-4 text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-red-600">Halo! Selamat Datang di Cinelink</h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          Platform digital untuk memesan tiket bioskop secara cepat dan mudah.
        </p>
        <button className="mt-6 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-full transition duration-300">
          Jelajahi Film
        </button>
      </header>

      {/* Sorotan Film */}
      <section className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Sorotan Film</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;