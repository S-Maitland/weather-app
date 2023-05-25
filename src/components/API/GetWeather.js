import axios from 'axios';

export async function getWeather(url, city) {
  const myData = await axios
    .get(`${url}weather?` , {
      params: {
        q: `${city}, UK`,
        appid: process.env.REACT_APP_OPEN_WEATHER_KEY,
        units: 'metric'
      }
    })
  return myData
}

export async function getWeatherForecast(url, city) {
  const myData = await axios
    .get(`${url}forecast?` , {
      params: {
        q: `${city}, UK`,
        appid: process.env.REACT_APP_OPEN_WEATHER_KEY,
        units: 'metric'
      }
    })
  return myData
}