import React from "react";
export default function CurrentWeather({data}){
 if (!data || !data.list?.[0]) return null;
    const current = data.list[0];
  const iconUrl = `https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`;
  return (
    // Change the div class to:
<div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center max-w-4xl mx-auto mb-12">


      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        {data.city.name}
      </h2>
      <img src={iconUrl} alt="Weather icon" className="w-32 h-32 mx-auto" />
      <p className="text-5xl font-light text-gray-900 my-4">
        {Math.round(current.main.temp)}°C
      </p>
      <p className="text-xl text-gray-600 capitalize">
        {current.weather[0].description}
      </p>
      <div className="mt-6 grid grid-cols-2 gap-4 text-gray-700">
        <p>Humidity: {current.main.humidity}%</p>
        <p>Wind: {current.wind.speed} m/s</p>
      </div>
    </div>
  );
}