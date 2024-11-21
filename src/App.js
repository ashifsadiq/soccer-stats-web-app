import React from "react";
import "./App.css"; // Custom CSS if needed
import { Helmet } from "react-helmet";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-800 from-gray-900 to-gray-800 text-white p-5">
      <Helmet>
        <title>SoccerStats</title>
        <meta
          name="description"
          content="Your ultimate destination for real-time player statistics, team data,
          and personalized tracking."
        />
      </Helmet>
      {/* Header Section */}
      <header className="flex flex-col items-center justify-center h-screen text-center">
        {/* Logo */}
        <div className="flex items-center justify-center bg-black rounded-full w-32 h-32 mb-6">
          <span className="text-white font-bold text-4xl flex">
            <span className="text-3xl font-sans mr-1">S</span>s
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Welcome to SoccerStats
        </h1>
        <p className="text-lg md:text-xl font-light text-gray-300 max-w-3xl mx-auto">
          Your ultimate destination for real-time player statistics, team data,
          and personalized tracking.
        </p>
        <button className="mt-8 px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-full shadow-lg text-lg font-medium transition">
          Explore Now
        </button>
      </header>

      {/* Features Section */}
      <section className="bg-gray-800 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Real-Time Stats</h3>
              <p className="text-gray-300">
                Stay updated with live player statistics, including goals,
                assists, and minutes played.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Search Players</h3>
              <p className="text-gray-300">
                Quickly find your favorite players or teams with our fast and
                intuitive search feature.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">
                Personalized Profiles
              </h3>
              <p className="text-gray-300">
                Save players to your profile and track their performance over
                time for a personalized experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 py-6 text-center">
        <p className="text-gray-400 text-sm">
          © 2024 SoccerStats. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;
