import React from 'react';
import { useState  } from "react";

export default function Searchbar({onSearch}){
    const [city,setCity]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(city.trim()){
            onSearch(city.trim());
            setCity("");
        }
    };
    return(
        <form onSubmit={handleSubmit} className="flex max-w-md mx-auto mb-8">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name (e.g., London)"
        className="flex-1 px-4 py-3 border border-r-0 border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-blue-600 text-white font-medium rounded-r-lg hover:bg-blue-700 transition"
      >
        Search
      </button>
    </form>
    );
 
}