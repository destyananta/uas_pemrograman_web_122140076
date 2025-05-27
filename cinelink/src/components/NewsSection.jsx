// src/components/NewsSection.jsx
import React from 'react';

const NewsSection = ({ articles }) => {
  return (
    <div className="bg-white text-black p-6">
      <h2 className="text-3xl font-bold mb-6">CineLink Now</h2>
      <div className="space-y-4">
        {articles.map((article) => (
          <div key={article.id} className="border-b border-gray-300 pb-4 last-of-type:border-b-0">
            <p className="text-lg font-semibold">{article.title}</p>
            <p className="text-sm text-gray-500 mt-1">{article.date}</p>
            <p className="mt-2">{article.content}</p>
          </div>
        ))}
        <button className="w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition duration-300">
          View More Articles
        </button>
      </div>
    </div>
  );
};

export default NewsSection;