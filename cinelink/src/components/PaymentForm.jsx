// src/components/PaymentForm.jsx
import React, { useState } from 'react';

const PaymentForm = () => {
  const [quantity, setQuantity] = useState(1);
  const pricePerTicket = 50000;
  const totalPrice = quantity * pricePerTicket;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Anda memesan ${quantity} tiket. Total: Rp${totalPrice.toLocaleString()}`);
    // Di sini kamu bisa tambahkan integrasi ke Midtrans / Stripe
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="bg-gray-900 p-6 rounded-lg shadow-md w-full max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Pembayaran Tiket</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-300 mb-2">
              Jumlah Tiket
            </label>
            <input
              type="number"
              id="quantity"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="w-full px-4 py-2 border border-gray-600 rounded-md bg-gray-800 focus:outline-none focus:border-red-500 text-white"
              required
            />
          </div>

          <div className="text-right">
            <p className="text-sm text-gray-400">Harga per tiket: Rp{pricePerTicket.toLocaleString()}</p>
            <p className="font-semibold text-lg text-white">
              Total: Rp{totalPrice.toLocaleString()}
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded transition duration-300"
          >
            Bayar Sekarang
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;