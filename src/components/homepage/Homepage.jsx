import React, { useEffect, useState } from 'react';
import "../../scss/pages/_homepage.scss";
import { CitiesForm } from './CitiesForm';
import CurrentWeatherCard from '../card/CurrentWeatherCard';
import ForecastWeatherCard from '../card/ForecastWeatherCard';
import { getWeather, getWeatherForecast } from '../API/GetWeather'

const Homepage = () => {
  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  const [weatherNow, setWeatherNow] = useState();
  const [weatherForecast, setWeatherForecast] = useState();
  const [city, setCity] = useState("London");
  // const [weatherImage, setWeatherImage] = useState("")


  useEffect(() => {
    getWeather(process.env.REACT_APP_OPEN_WEATHER_URL, city)
      .then(response => {
        setWeatherNow(response.data)
      }) 
    getWeatherForecast(process.env.REACT_APP_OPEN_WEATHER_URL, city)
    .then(response => {
      setWeatherForecast(response.data)
    })
  }, [city])

  return (
    <>
      <div className="citySelector">
      <CitiesForm setCity={setCity} />
      </div>
      <div className="cardWrap">
      {weatherNow ? <CurrentWeatherCard weather={weatherNow} /> : null}
      </div>
      <div className="cardWrap">
      {weatherForecast ? <ForecastWeatherCard weather={weatherForecast} /> : null}
      </div>
    </>
  )
}
export default Homepage;