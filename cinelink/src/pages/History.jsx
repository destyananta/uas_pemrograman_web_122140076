// src/pages/History.jsx
import React from 'react';

const History = () => {
  // Simulasi data riwayat pemesanan
  const bookings = [
    {
      id: 1,
      movie: "Avengers: Endgame",
      time: "15:00, 12 Maret 2025",
      quantity: 2,
      status: "Sudah Dibayar"
    },
    {
      id: 2,
      movie: "Spider-Man: No Way Home",
      time: "18:00, 10 Maret 2025",
      quantity: 1,
      status: "Belum Dibayar"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 border-b border-gray-800">
        <h1 className="text-3xl font-bold">Riwayat Pemesanan</h1>
        <p className="mt-1 text-gray-400">Lihat daftar film yang pernah Anda pesan.</p>
      </header>

      {/* Daftar Riwayat Tiket */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="space-y-4">
          {bookings.map(booking => (
            <div key={booking.id} className="bg-gray-900 rounded-lg shadow-md p-4 hover:bg-gray-800 transition duration-300">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold">{booking.movie}</h2>
                  <p className="text-sm text-gray-400 mt-1">Jadwal: {booking.time}</p>
                  <p className="text-sm text-gray-400">Jumlah Tiket: {booking.quantity}</p>
                </div>
                <span
                  className={`inline-block text-sm font-medium px-3 py-1 rounded ${
                    booking.status === 'Sudah Dibayar'
                      ? 'bg-green-500 text-white'
                      : 'bg-yellow-500 text-white'
                  }`}
                >
                  {booking.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default History;