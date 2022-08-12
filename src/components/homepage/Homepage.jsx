import React, { useEffect, useState } from 'react';
import "./Homepage.scss";
import { CitiesForm } from './CitiesForm';
import WeatherCard from '../card/WeatherCard';
import { getWeather } from '../API/GetWeather'

const Homepage = () => {
  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  const [weatherNow, setWeatherNow] = useState();
  const [city, setCity] = useState("London");
  // const [weatherImage, setWeatherImage] = useState("")

  useEffect(() => {
    getWeather(process.env.REACT_APP_OPEN_WEATHER_URL, city)
    .then(response => {
      console.log(response.data)
      setWeatherNow(response.data)
    }
    )
  }, [city])
  return (
    <>
      <div>
        This is the home page
      </div>
      <CitiesForm setCity={setCity} />
      {weatherNow ? <WeatherCard weather={weatherNow} /> : null}
    </>
  )

}
export default Homepage;