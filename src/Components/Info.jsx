"use client"; // Add this to make it a client component
import React from "react";
const InfoComponent = ({ match= {} }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-items-center">
      <div className="text-gray-400 flex items-center gap-x-2 bg-white px-4 py-1.5 rounded-full w-full md:w-fit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 text-purple-700"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
          />
        </svg>
        <span className="text-black">Place: {match?.place}</span>
      </div>
      <div className="text-gray-400 flex items-center gap-x-2 bg-white px-4 py-1.5 rounded-full w-full md:w-fit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 text-purple-700"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
        <span className="text-black">Players: {match?.players}</span>
      </div>
      <div className="text-gray-400 flex items-center gap-x-2 bg-white px-4 py-1.5 rounded-full w-full md:w-fit">
        <div className="w-3 h-3 bg-purple-700/50 rounded-full">
          <div className="w-full h-full bg-purple-700 rounded-full animate-ping" />
        </div>
        <span className="text-black">Live Score: {match?.current_score}</span>
      </div>
    </div>
  );
};

export default InfoComponent;
// hwo i call
// <InfoComponent match={match} />
// error i got 
// [ Server ] Error: match is not defined
