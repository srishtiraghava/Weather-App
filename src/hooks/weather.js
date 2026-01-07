import { useState,useEffect } from "react" ;
import axios from "axios";
export function useWeather(city) {
const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

useEffect(() => {
    if (city && city.trim()) { // Check if city is not empty or whitespace
        setLoading(true);
        setError(null);
        const API_KEY = "YOUR API KEY HERE"; // Replace with your real key
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;
        axios
            .get(url)
            .then((response) => {
                setData(response.data);
            })
            .catch(() => {
                setError('City not found or API error');
            })
            .finally(() => {
                setLoading(false);
            });
    }
}, [city]);

return {data,loading,error};
}