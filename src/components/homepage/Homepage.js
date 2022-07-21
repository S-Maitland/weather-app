import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Homepage.scss";

const Homepage = () => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [weather, setWeather] = useState([]);
  const [city, setCity] = useState("Glasgow");

  const currentWeatherByCity={
    method: 'GET',
    url: 'https://api.openweathermap.org/data/2.5/weather?',
    params: {
      q: `${city}`,
      appid: process.env.REACT_APP_OPEN_WEATHER_KEY
    }
  }

  const weatherFetch = async () => {
    axios.request(currentWeatherByCity)
      .then((response) => {
        console.log(response.data);
        setWeather(response.data)
      }).catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    weatherFetch()
  }, [])

  return (
    <>
      <div>
        This is the home page
      </div>
    </>
  )

}
export default Homepage;