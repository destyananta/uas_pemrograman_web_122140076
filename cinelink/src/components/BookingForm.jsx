// src/components/BookingForm.jsx
import React, { useState } from 'react';

const BookingForm = () => {
  const [quantity, setQuantity] = useState(1);
  const pricePerTicket = 50000; // Harga per tiket
  const totalPrice = quantity * pricePerTicket;

  const handleQuantityChange = (e) => {
    const qty = parseInt(e.target.value);
    if (qty >= 1) {
      setQuantity(qty);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Pesan ${quantity} tiket. Total: Rp${totalPrice.toLocaleString()}`);
    // Di sini kamu bisa tambahkan logic ke API atau ke halaman pembayaran
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Pilih Jumlah Tiket</h2>

      <div className="mb-4">
        <label htmlFor="quantity" className="block text-sm font-medium mb-2">
          Jumlah Tiket:
        </label>
        <input
          id="quantity"
          type="number"
          min="1"
          value={quantity}
          onChange={handleQuantityChange}
          className="border w-full px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>

      <div className="mb-4">
        <p className="text-sm text-gray-600">
          Harga per tiket: Rp{pricePerTicket.toLocaleString()}
        </p>
        <p className="font-semibold mt-1">
          Total Harga: Rp{totalPrice.toLocaleString()}
        </p>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition"
      >
        Bayar Sekarang
      </button>
    </form>
  );
};

export default BookingForm;