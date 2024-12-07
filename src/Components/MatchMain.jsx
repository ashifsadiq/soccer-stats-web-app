"use client"; // Add this to make it a client component
import React from "react";
import MatchVs from "./MatchVs";
import InfoComponent from "./Info";

const MatchMain = ({ match = {} }) => {
  return (
    <main className="py-8 container mx-auto px-6">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        {/* Flag and Country */}
        <MatchVs match={match} />
        <InfoComponent match={match} />
      </div>
    </main>
  );
};

export default MatchMain;
