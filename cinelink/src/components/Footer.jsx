// src/components/Footer.jsx
import React from 'react';

const Footer = ({ links }) => {
  return (
    <footer className="bg-black text-white p-8 border-t border-gray-800">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo + Deskripsi */}
        <div>
          <h2 className="text-2xl font-bold text-red-500 mb-4">Cinelink</h2>
          <p className="text-gray-400">
            Platform digital untuk memesan tiket bioskop secara cepat dan mudah.
          </p>
        </div>

        {/* Menu Footer */}
        <div>
          <h3 className="text-lg font-semibold mb-4">MENU</h3>
          <ul className="space-y-2">
            {links.map((link, index) => (
              <li key={index}>
                <a href={link.url} className="text-gray-400 hover:text-white transition duration-300">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Informasi Kontak */}
        <div>
          <h3 className="text-lg font-semibold mb-4">KONTAK KAMI</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Email: support@cinelink.id</li>
            <li>Telepon: +62 812 3456 7890</li>
            <li>Social Media: @cinelink</li>
          </ul>
        </div>
      </div>

      {/* Hak Cipta */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Cinelink. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;