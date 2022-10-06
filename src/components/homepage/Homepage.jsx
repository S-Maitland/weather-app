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

  async function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
  }

  useEffect(() => {
    getWeather(process.env.REACT_APP_OPEN_WEATHER_URL, city)
      .then(response => {
        setWeatherNow(response.data)
      })
  }, [city])

  return (
    <>
      <CitiesForm setCity={setCity} />
      <div className="cardWrap">
      {weatherNow ? <WeatherCard weather={weatherNow} /> : null}
      </div>
    </>
  )

}
export default Homepage;