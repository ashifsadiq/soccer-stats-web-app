"use client"; // Add this to make it a client component
import React from "react";

const MatchVs = ({ match = {} }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-items-center items-center justify-around mb-6">
      <div className="flex w-full flex-col items-center justify-center">
        <img
          src={match?.flag}
          alt={`${match?.country} flag`}
          className="w-16 h-16 rounded-full"
        />
        <h2 className="text-2xl font-bold">{match?.country}</h2>
      </div>
      <h2 className="text-3xl font-semibold text-white">Vs</h2>
      <div className="flex w-full flex-col items-center justify-center">
        <img
          src={match?.vs_data.flag}
          alt={`${match?.vs_data.country} flag`}
          className="w-16 h-16 rounded-full"
        />
        <h2 className="text-2xl font-bold">{match?.vs_data.country}</h2>
      </div>
    </div>
  );
};

export default MatchVs;
