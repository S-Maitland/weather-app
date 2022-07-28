import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Homepage.scss";
import { CitiesForm } from './CitiesForm';

const Homepage = () => {

  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  const [weather, setWeather] = useState([]);
  const [city, setCity] = useState("London");

  const currentWeatherByCity = {
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
  }, [city])

  return (
    <>
      <div>
        This is the home page
      </div>
      <CitiesForm setCity={setCity} />
      {weather ? <p>{weather.weather[0].description}</p> : <p>No Weather</p>}
    </>
  )

}
export default Homepage;