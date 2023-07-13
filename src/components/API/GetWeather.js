import axios from 'axios';

export async function getWeather(url, city) {
  return await axios
    .get(`${url}weather?`, {
      params: {
        q: `${city}, UK`,
        appid: process.env.REACT_APP_OPEN_WEATHER_KEY,
        units: 'metric'
      }
    })
}

export async function getWeatherForecast(url, city) {
  return await axios
    .get(`${url}forecast?`, {
      params: {
        q: `${city}, UK`,
        appid: process.env.REACT_APP_OPEN_WEATHER_KEY,
        units: 'metric'
      }
    })
}

export async function getCityByCoords(lat, lon) {
  return await axios
    .get(process.env.REACT_APP_OPEN_WEATHER_GEO_URL, {
      params: {
        lat:  lat,
        lon:  lon,
        limit: 1,
        appid: process.env.REACT_APP_OPEN_WEATHER_KEY
      }
    })
}