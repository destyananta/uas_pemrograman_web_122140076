// src/pages/MovieDetail.jsx
import React from 'react';

const MovieDetail = () => {
  const movie = {
    id: 1,
    title: "Jumbo",
    genre: "Drama, Comedy",
    duration: "1h 42min",
    synopsis:
      "Don (Prince Poetiray), anak gemuk yang sering diolok-olok dengan panggilan 'Jumbo' ingin membalas perbuatan anak yang suka merundungnya, tapi sesosok arwah bernama Meri (Quinn Salman) meminta pertolongan Don untuk disatukan dengan makam keluarganya yang dirusak.",
    schedule: ["13:00", "16:00", "19:00"],
    image: "/movieposter.png", // Path ke gambar di folder public/

  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="flex flex-col md:flex-row items-center justify-between pb-6">
          {/* Gambar Poster */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-96 object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Detail Film */}
          <div className="w-full md:w-2/3 md:pl-6">
            <h1 className="text-4xl font-bold text-red-500">{movie.title}</h1>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="bg-red-500 text-white px-2 py-1 rounded">CGV</span>
              <span className="bg-blue-500 text-white px-2 py-1 rounded">Cinépolis</span>
            </div>
            <p className="text-base text-gray-300 mt-4">{movie.synopsis}</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <button className="bg-black hover:bg-gray-800 border border-red-500 text-white px-4 py-2 rounded transition duration-300">
                Watch the Trailer
              </button>
              <p className="text-xl font-semibold text-gray-300 self-center">Durasi: {movie.duration}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Jadwal Tayang */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Jadwal Tayang:</h2>
        <div className="flex flex-wrap gap-2">
          {movie.schedule.map((time, index) => (
            <a
              key={index}
              href={`/booking/${movie.id}?schedule=${time}`}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition duration-300"
            >
              {time}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MovieDetail;