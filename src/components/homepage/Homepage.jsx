import React, { useEffect, useState } from 'react';
import '../../scss/pages/_homepage.scss';
import { CitiesForm } from './CitiesForm';
import CurrentWeatherCard from '../card/CurrentWeatherCard';
import ForecastWeatherCard from '../card/ForecastWeatherCard';
import { getCityByCoords, getWeather, getWeatherForecast } from '../API/GetWeather';

const Homepage = () => {
  const [weatherNow, setWeatherNow] = useState();
  const [weatherForecast, setWeatherForecast] = useState();
  const [city, setCity] = useState("London");

  useEffect(() => {
    if (city) {
      getWeather(process.env.REACT_APP_OPEN_WEATHER_DATA_URL, city)
        .then(response => {
          setWeatherNow(response.data);
        });
      getWeatherForecast(process.env.REACT_APP_OPEN_WEATHER_DATA_URL, city)
        .then(response => {
          setWeatherForecast(response.data);
        });
    }
  }, [city]);

  const fetchUserCity = async () => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        const city = await getCityByCoords(latitude, longitude);
        setCity(city.data[0].name);
      }, (error) => {
        console.error('Error getting location:', error);
      });
  };

  return (
    <>
      <div className='citySelector'>
        <CitiesForm setCity={setCity} currentCity={city} />
        <button onClick={fetchUserCity}>Find Me!</button>
      </div>
      <div className='cardWrap'>
        {weatherNow ? <CurrentWeatherCard currentCity = {city} currentWeather={weatherNow} /> : null}
      </div>
      <div className='cardWrap'>
        {weatherForecast ? <ForecastWeatherCard weatherForecast={weatherForecast} /> : null}
      </div>
    </>
  );
};
export default Homepage;