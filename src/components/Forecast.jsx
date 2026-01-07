import React from 'react'
export default function Forecast({ data }) {
  if (!data) return null;
  //Filter to one forecast per day (every 8th item ≈ midday)
  const dailyData=data.list.filter((_,index)=>index%8===0)
  return(
    <>
    <div className="max-w-5xl mx-auto">
      <h3 className="text-2xl font-semibold text-center mb-6 text-gray-800">
        5-Day Forecast
      </h3>
      // Change the grid div to:
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
        {dailyData.map((day, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-4 text-center hover:shadow-xl transition"
          >
            <p className="font-medium text-gray-700">
              {new Date(day.dt_txt).toLocaleDateString('en-US', {
                weekday: 'short',
                month: 'short',
                day: 'numeric',
              })}
            </p>
            <img
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              alt="icon"
              className="w-20 h-20 mx-auto my-2"
            />
            <p className="text-2xl font-bold">{Math.round(day.main.temp)}°</p>
            <p className="text-sm text-gray-600 capitalize">
              {day.weather[0].description}
            </p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}