import React from 'react';
import MovieCard from '../components/MovieCard';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer.jsx';
import movies from '../data/MovieData.js';  // gunakan data film dari sini

const FooterLinks = [
  { label: "Now Showing", url: "#" },
  { label: "CineLink Now", url: "#" },
  { label: "Spotlight", url: "#" },
  { label: "Video & Trailers", url: "#" },
  { label: "Careers", url: "#" },
  { label: "Contact Us", url: "#" },
  { label: "Privacy Policy", url: "#" },
  { label: "Terms & Conditions", url: "#" },
];

const Home = () => {
  return (
    <div className="bg-black text-white">

      {/* Hero Section */}
      <section
        className="bg-cover bg-center bg-no-repeat h-96 flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('https://via.placeholder.com/1920x1080?text=Cinelink+Hero')",
          backgroundSize: 'cover',
        }}
      >
        <div className="px-4">
          <h2 className="text-4xl font-bold text-white mb-4">Selamat Datang di Cinelink</h2>
          <p className="text-xl text-gray-300 mb-6">Platform digital untuk memesan tiket bioskop secara cepat dan mudah.</p>
        </div>
      </section>

      {/* Now Showing */}
      <section className="container mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6">Film Sedang Tayang</h2>
        <Carousel>
          {movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </Carousel>
      </section>

      {/* Footer */}
      <Footer links={FooterLinks} />

    </div>
  );
};

export default Home;
