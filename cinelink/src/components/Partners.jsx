// src/components/Partners.jsx
import React from 'react';

const Partners = ({ logos }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-6">
      {logos.map((logo, index) => (
        <div key={index} className="px-4 py-2 bg-gray-800 rounded-md text-white font-semibold text-center shadow-sm hover:bg-gray-700 transition duration-300">
          {logo}
        </div>
      ))}
    </div>
  );
};

export default Partners;