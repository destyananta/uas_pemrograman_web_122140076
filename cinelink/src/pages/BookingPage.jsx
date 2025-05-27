// src/pages/BookingPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookingPage = () => {
  const [quantity, setQuantity] = useState(1);
  const pricePerTicket = 50000;
  const totalPrice = quantity * pricePerTicket;
  const navigate = useNavigate();

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
      movie: "Judul Film Contoh", // Ganti jika ada judul film dinamis
      time: new Date().toLocaleString('id-ID'),
      quantity: quantity,
      status: "Sudah Dibayar"
    };

    const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    existingBookings.push(booking);
    localStorage.setItem('bookings', JSON.stringify(existingBookings));

    alert(`Anda memesan ${quantity} tiket. Total Harga: Rp${totalPrice.toLocaleString()}`);
    navigate('/history');
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      {/* Kotak Utama Booking */}
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-center">Pesan Tiket</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Jumlah Tiket */}
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

          {/* Total Harga */}
          <div className="text-right">
            <p className="text-sm text-gray-400">Harga per tiket: Rp50.000</p>
            <p className="font-semibold text-lg text-white">
              Total Harga: Rp{totalPrice.toLocaleString()}
            </p>
          </div>

          {/* Tombol Bayar */}
          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded transition duration-300"
          >
            Bayar Sekarang
          </button>
        </form>

        {/* Link Kembali */}
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
