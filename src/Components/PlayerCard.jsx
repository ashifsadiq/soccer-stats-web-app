import React, { useState } from "react";
import heart from '../assets/svg/heart.svg'
import heartOutline from '../assets/svg/heart-outline.svg'
import globe from '../assets/svg/globe.svg'
import goalNet from '../assets/svg/goal-net.svg'
import captain from '../assets/svg/captain.svg'

const PlayerCard = ({ player = players.data[0], match = {} }) => {
  const localKeyPrefix = `fav_player_`
  const [isPlayerLiked, setIsPlayerLiked] = useState(localStorage.getItem(`${localKeyPrefix}${player.id}`) == "true")
  const performance = (player?.["Goals per match"] * 100).toFixed(0);
  return (
    <li className="w-full px-4 py-2 bg-gray-700 rounded-lg shadow-lg flex flex-col gap-y-3">
      <div className="flex items-center justify-between" >
        <h3 className="text-2xl font-semibold">{player.Player}</h3>
        <button onClick={() => {
          localStorage.setItem(`${localKeyPrefix}${player.id}`, isPlayerLiked ? 'false' : 'true');
          setIsPlayerLiked(!isPlayerLiked);
        }}>
          <img src={`${isPlayerLiked ? heart : heartOutline}`} className="w-5" />
        </button>
      </div>
      <div className="flex gap-2">
        <img src={globe} className="w-5" />
        <span>{match.country}</span>
      </div>
      <div className="flex gap-2">
        <div className="flex gap-2">
          <img src={goalNet} className="w-5" />
          Goals:
        </div>
        <span>{player.Goals}</span>
      </div>
      <div className="flex gap-2">
        <div className="flex gap-2">
          <img src={captain} className="w-5" />
          Last capitan:
        </div>
        <span>{player?.["Last cap"]}</span>
      </div>
      <div className="flex justify-between gap-2 items-center">
        <div className="h-3 w-full rounded-full bg-purple-700/40 relative">
          <div
            className="h-full rounded-full bg-purple-700"
            style={{ width: `${performance > 99 ? '100' : performance}%` }}
          />
        </div>
        <span className="font-semibold">
          {performance > 99 ? '100' : performance}%
        </span>
      </div>
    </li>
  );
};

export default PlayerCard;
