// src/components/VideoTrailer.jsx
import React from 'react';

const VideoTrailer = ({ videos }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {videos.map((video) => (
        <div key={video.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-auto"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{video.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoTrailer;