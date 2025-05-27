// src/pages/Home.jsx
import React from 'react';
import MovieCard from '../components/MovieCard';
import Carousel from '../components/Carousel';
import NewsSection from '../components/NewsSection';
import VideoTrailer from '../components/VideoTrailer';
import Partners from '../components/Partners';
import Footer from '../components/Footer.jsx';

const movies = [
  {
    id: 1,
    title: "Avengers: Endgame",
    genre: "Action",
    duration: "180 min",
    image: "https://via.placeholder.com/300x450?text=Avengers+Endgame "
  },
  {
    id: 2,
    title: "Spider-Man: No Way Home",
    genre: "Action",
    duration: "148 min",
    image: "https://via.placeholder.com/300x450?text=Spider-Man+No+Way+Home "
  },
  {
    id: 3,
    title: "The Batman",
    genre: "Crime",
    duration: "176 min",
    image: "https://via.placeholder.com/300x450?text=The+Batman "
  }
];

const newsArticles = [
  {
    id: 1,
    title: "Ketemu Lagi Sama Jackie Chan di Film Karate Kid: Legends!",
    date: "Friday, 23 May 2025",
    content:
      "Pecinta seni bela diri bersiaplah! Teaser terbaru untuk film Karate Kid: Legends baru saja dirilis pada Selasa, 1 April 2025 lalu, memicu antusiasme bagi para..."
  },
  {
    id: 2,
    title: "Bukan Gundik Biasa, Wanita Ini Ternyata Siluman Ular...",
    date: "Thursday, 22 May 2025",
    content:
      "Ada film horor Home Sweet Home: Rebirth siap menghadirkan kembali buah tanggisan ibu dalam misteri dan tantangan yang menegangkan."
  },
  // ... tambahkan artikel lainnya
];

const trailers = [
  {
    id: 1,
    title: "The Karate Kid - Lasting Legacy",
    thumbnail: "https://via.placeholder.com/300x169?text=Karate+Kid ",
    videoUrl: "#",
  },
  {
    id: 2,
    title: "Nobody 2 | Official Trailer",
    thumbnail: "https://via.placeholder.com/300x169?text=Nobody+2 ",
    videoUrl: "#",
  },
  // ... tambahkan trailer lainnya
];

const partners = [
  "XXI",
  "Dana",
  "Cinépolis",
  "Viu",
  "Sushiro",
  "KLIFM",
  "WeTV",
];

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

      {/* Spotlight */}
      <section className="bg-purple-900 text-white p-6">
        <h2 className="text-3xl font-bold mb-6">Spotlight</h2>
        <Carousel>
          {/* Konten Spotlight */}
        </Carousel>
      </section>

      {/* CineLink Now */}
      <section className="container mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6">CineLink Now</h2>
        <NewsSection articles={newsArticles} />
      </section>

      {/* Video & Trailers */}
      <section className="bg-blue-900 text-white p-6">
        <h2 className="text-3xl font-bold mb-6">Video & Trailers</h2>
        <VideoTrailer videos={trailers} />
      </section>

      {/* Our Features */}
      <section className="container mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6">Fitur Kami</h2>
        {/* Konten fitur */}
      </section>

      {/* Partners */}
      <section className="container mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6">Partner Kami</h2>
        <Partners logos={partners} />
      </section>

      {/* Footer */}
      <Footer links={FooterLinks} />
    </div>
  );
};

export default Home;