import React from "react";
import PlayerCard from "./PlayerCard";

const Players = ({ match = {}, players = [] }) => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto px-6">
        <div className="w-full bg-gray-800 py-3 rounded-lg shadow-lg my-10">
          <div className="flex items-center gap-3 w-full justify-center">
            <h3 className="text-2xl font-bold">Players for</h3>
            <img
              src={match?.flag}
              alt={`${match?.country} flag`}
              className="w-16"
            />
            <h3 className="text-2xl font-bold">{match?.country}</h3>
          </div>
          {/* <h3> {match?.country}</h3> */}
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
            {players.data.map((player, playerIndex) => (
              <PlayerCard
                player={player}
                sNo={undefined}
                key={playerIndex.toString()}
              />
            ))}
          </ul>
        </div>
        <div className="w-full bg-gray-800 py-3 rounded-lg shadow-lg my-10">
          <div className="flex items-center gap-3 w-full justify-center">
            <h3 className="text-2xl font-bold">Players for</h3>
            <img
              src={match?.vs_data?.flag}
              alt={`${match?.vs_data?.country} flag`}
              className="w-16"
            />
            <h3 className="text-2xl font-bold">{match?.vs_data?.country}</h3>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
            {players.vs_data.map((player, playerIndex) => (
              <PlayerCard
                player={player}
                sNo={undefined}
                key={playerIndex.toString()}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Players;
