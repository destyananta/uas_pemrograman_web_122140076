// src/components/ScheduleList.jsx
import React from 'react';

const ScheduleList = ({ schedules, movieId }) => {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold text-white mb-4">Jadwal Tayang</h2>
      <div className="flex flex-wrap gap-2">
        {schedules.map((time, index) => (
          <a
            key={index}
            href={`/booking/${movieId}?schedule=${time}`}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition duration-300"
          >
            {time}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ScheduleList;