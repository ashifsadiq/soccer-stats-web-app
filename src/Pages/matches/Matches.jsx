import { useEffect, useState } from "react";
import MenJson from '../../assets/men.json';
import Matches from '../../assets/matches.json';
import MatchMain from '../../Components/MatchMain'
import Players from '../../Components/Players'
import { useParams } from "react-router";
export default function MatchPage() {
  const params = () => null; // Get params using the useParams hook
  const { match_id } = useParams();
  const id = match_id;

  const [match, setMatch] = useState(null); // State to hold the match data
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [players, setPlayers] = useState({
    data: [
      {
        id: "5",
        Player: "Mokhtar Dahari",
        Country: "Malaysia",
        "Country Code": "MY",
        Goals: "89",
        Caps: "142",
        "Goals per match": "0.63",
        "First cap": "5 June 1972",
        "Last cap": "19 May 1985",
      },
    ],
    vs_data: [
      {
        id: "7",
        Player: "Romelu Lukaku",
        Country: "Belgium",
        "Country Code": "BE",
        Goals: "85",
        Caps: "120",
        "Goals per match": "0.71",
        "First cap": "3 March 2010",
        "Last cap": "14 November 2024",
      },
    ],
  }); // State to hold player data

  // Fetch players data
  useEffect(() => {
    if (match && match.players_resumes) {
      const data = MenJson.filter((men) =>
        match?.players_resumes?.includes(men.id)
      );
      const vs_data = MenJson.filter((men) =>
        match?.vs_data?.players_resumes?.includes(men.id)
      );
      setPlayers({ data, vs_data });
      setIsDataLoaded(true)
    }
  }, [match]);

  // Fetch match data
  useEffect(() => {
    const foundMatch = Matches.find((item) => item.id.toString() === id);
    if (foundMatch) {
      const vsData = Matches.find((item) => item.id === foundMatch.vs);
      setMatch({ ...foundMatch, vs_data: vsData });
    }
    setIsDataLoaded(true)
  }, [id]);

  if (!match) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <p>{isDataLoaded?'No data available for the selected match.':'Loading match details...'}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="py-6 text-center bg-purple-700">
        <h1 className="text-3xl font-bold">Match Details</h1>
      </header>
      {/* Match Overview */}
      <MatchMain match={match} />
      <Players match={match} players={players} />
    </div>
  );
}
