import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Homepage.scss";
import { CitiesForm } from './CitiesForm';
import WeatherCard from '../card/WeatherCard';


const Homepage = () => {
  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  const [weatherNow, setWeatherNow] = useState();
  const [city, setCity] = useState("London");
  const [weatherImage,setWeatherImage]=useState("")

  const currentWeatherByCity = {
    method: 'GET',
    url: 'https://api.openweathermap.org/data/2.5/weather?',
    params: {
      q: `${city}, UK`,
      appid: process.env.REACT_APP_OPEN_WEATHER_KEY,
      units:'metric'
    }
  }

  const weatherFetch = async () => {
    axios.request(currentWeatherByCity)
      .then((response) => {
        console.log(response.data);
        setWeatherNow(response.data)
        setWeatherImage(response.data.weather[0].icon)
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
      {weatherNow?<WeatherCard weather={weatherNow}/>:null}
    </>
  )

}
export default Homepage;