import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import movies from '../data/MovieData';

const BookingPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const movieId = parseInt(id);
  const movie = movies.find(m => m.id === movieId);

  // Ambil jadwal tayang dari query param ?schedule=...
  const queryParams = new URLSearchParams(location.search);
  const schedule = queryParams.get('schedule') || '';

  const [quantity, setQuantity] = useState(1);
  const pricePerTicket = 50000;
  const totalPrice = quantity * pricePerTicket;

  useEffect(() => {
    if (!movie) {
      // Jika film tidak ditemukan, redirect ke homepage
      navigate('/');
    }
  }, [movie, navigate]);

  const handleQuantityChange = (e) => {
    const qty = parseInt(e.target.value);
    if (!isNaN(qty) && qty >= 1) {
      setQuantity(qty);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const booking = {
      id: Date.now(),
      movieId: movie.id,
      movieTitle: movie.title,
      time: schedule,
      bookingDate: new Date().toLocaleString('id-ID'),  // Tanggal & jam pemesanan
      quantity: quantity,
      status: "Sudah Dibayar"
    };

    const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    existingBookings.push(booking);
    localStorage.setItem('bookings', JSON.stringify(existingBookings));

    alert(`Anda memesan ${quantity} tiket ${movie.title} pada jam ${schedule}. Total Harga: Rp${totalPrice.toLocaleString()}`);
    navigate('/history');
  };

  if (!movie) {
    return <div className="text-white p-4">Film tidak ditemukan</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-center">Pesan Tiket: {movie.title}</h1>
        <p className="text-center text-gray-400 mb-4">Jadwal Tayang: {schedule || 'Belum dipilih'}</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-300 mb-2">
              Jumlah Tiket:
            </label>
            <input
              type="number"
              id="quantity"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
              className="w-full px-4 py-2 border border-gray-600 rounded-md bg-gray-800 focus:outline-none focus:border-red-500 text-white"
              required
            />
          </div>

          <div className="text-right">
            <p className="text-sm text-gray-400">Harga per tiket: Rp50.000</p>
            <p className="font-semibold text-lg text-white">
              Total Harga: Rp{totalPrice.toLocaleString()}
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded transition duration-300"
          >
            Bayar Sekarang
          </button>
        </form>

        <div className="mt-4 text-center">
          <a href="/" className="text-red-500 hover:text-red-400 text-sm">
            ← Kembali ke Film
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
