import React, { useEffect, useState } from 'react';
import '../../scss/pages/_homepage.scss';
import { CitiesForm } from './CitiesForm';
import CurrentWeatherCard from '../card/CurrentWeatherCard';
import ForecastWeatherCard from '../card/ForecastWeatherCard';
import { getWeather, getWeatherForecast } from '../API/GetWeather';
import axios from 'axios';

const Homepage = () => {
  const [weatherNow, setWeatherNow] = useState();
  const [weatherForecast, setWeatherForecast] = useState();
  const [city, setCity] = useState("London");

  useEffect(() => {
    if (city) {
      getWeather(process.env.REACT_APP_OPEN_WEATHER_URL, city)
        .then(response => {
          setWeatherNow(response.data);
        });
      getWeatherForecast(process.env.REACT_APP_OPEN_WEATHER_URL, city)
        .then(response => {
          setWeatherForecast(response.data);
        });
    }
  }, [city]);

//TODO - refactor fetch user city call into Location_Services JS file
  const fetchUserCity = async () => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
        const geocodingUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

        await axios
          .get(geocodingUrl)
          .then((response) => {
            const addressComponents = response.data.results[0].address_components;
              console.log(addressComponents);
            const cityComponent = addressComponents.find((component) =>
              component.types.includes('postal_town')
            );

            if (cityComponent) {
              setCity(cityComponent.long_name);
            }
          })
          .catch((error) => {
            console.error('Error fetching city: ', error);
          });
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