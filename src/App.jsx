// src/App.jsx
import React from "react";
import { useState } from 'react';
import SearchBar from './components/Searchbar';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import { useWeather } from './hooks/weather';

function App() {
  const [city, setCity] = useState('');
  const { data, loading, error } = useWeather(city);

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-500 via-cyan-500 to-teal-600 py-8 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-12 drop-shadow-2xl">
          Weather App
        </h1>

        <SearchBar onSearch={setCity} />

        {loading && (
          <p className="text-center text-white text-2xl mt-12">Loading weather...</p>
        )}

        {error && (
          <p className="text-center text-red-200 text-xl bg-red-600 bg-opacity-30 py-6 rounded-2xl mt-10">
            {error}
          </p>
        )}

        {data && (
          <>
            <CurrentWeather data={data} />
            <Forecast data={data} />
          </>
        )}

        {!data && !loading && !error && city === '' && (
          <div className="text-center mt-32">
            <p className="text-white text-3xl md:text-4xl font-light">
              Search for a city to see the weather!
            </p>
            <p className="text-white text-xl mt-6 opacity-80">
              Try "London", "New York", or your city
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;