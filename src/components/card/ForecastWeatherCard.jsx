import '../../scss/components/_forecastWeatherCard.scss';
import { TempForecastGraph } from '../graphs/TempForecastGraph';

const ForecastWeatherCard = ({ weatherForecast }) => {
  console.log(weatherForecast);

  let temperatureForecastData = weatherForecast.list.map((forecastSegment) => {
    let forecastDate = forecastSegment.dt_txt.slice(0,10);
    let forecastTime = forecastSegment.dt_txt.slice(12,19);
    return ({
      temp: forecastSegment.main.temp,
      date: forecastDate,
      time: forecastTime
    });
  });

  return (
    <div className='cardContainer'>
      <TempForecastGraph forecast={temperatureForecastData} />
    </div>
  );
};

export default ForecastWeatherCard;