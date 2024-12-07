import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import matchesJson from '../assets/matches.json';

const Explore = () => {
    const [matches, setMatches] = useState([
        {
            id: "1",
            country: "Norway",
            code: "NO",
            vs: "17",
            flag: "https://flagcdn.com/no.svg",
            players: "22",
            place: "Oslo",
            current_score: "2-2",
            vs_data: {
                id: "1",
                country: "Norway",
                code: "NO",
                vs: "17",
                flag: "https://flagcdn.com/no.svg",
                players: "22",
                place: "Oslo",
                current_score: "2-2",
            },
        },
    ]);
    useEffect(() => {
        
        const temp = [];
        matchesJson.map((item, index) => {
            matchesJson.map((item_2, index_2) => {
                if (item.vs == item_2.id) {
                    temp.push({ ...item, vs_data: item_2 });
                }
            });
        });
        console.log(temp[0]);
        setMatches(temp);
    }, []);

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <header className="py-6 text-center bg-purple-700">
                <h1 className="text-3xl font-bold">Explore Matches</h1>
            </header>
            <main className="py-8 container mx-auto px-6">
                {matches.length === 0 ? (
                    <p className="text-center text-gray-400">Loading matches...</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {matches.map((match) => (
                            <a
                                href={`/matches/${match.id}`}
                                key={match.id}
                                className="bg-gray-800 p-4 rounded-lg shadow-lg cursor-pointer"
                            >
                                <div className="flex justify-around items-center mb-4">
                                    <div className="flex w-full flex-col items-center justify-center">
                                        <img
                                            src={match.flag}
                                            alt={`${match.country} flag`}
                                            className="w-10 h-10 rounded-full"
                                        />
                                        <h2 className="text-xl font-semibold">{match.country}</h2>
                                    </div>
                                    <h2 className="text-xl font-semibold text-purple-700">Vs</h2>
                                    <div className="flex w-full flex-col items-center justify-center">
                                        <img
                                            src={match.vs_data.flag}
                                            alt={`${match.vs_data.country} flag`}
                                            className="w-10 h-10 rounded-full"
                                        />
                                        <h2 className="text-xl font-semibold">
                                            {match.vs_data.country}
                                        </h2>
                                    </div>
                                </div>
                                <div className="flex w-full justify-center" >
                                    <div className="w-2 h-2 bg-red-700/50 rounded-full">
                                        <div className="w-full h-full bg-red-700 rounded-full animate-ping" />
                                    </div>
                                    <span className="text-gray-400 text-center">
                                        Current Score: {match.current_score}
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
};

export default Explore;
