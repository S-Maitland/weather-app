import '../../scss/components/_forecastWeatherCard.scss';
import { TempForecastGraph } from '../graphs/TempForecastGraph';

const ForecastWeatherCard = ({ weatherForecast }) => {

  let temperatureForecastData = weatherForecast.list.map((forecastSegment) => (
    {
      temp: forecastSegment.main.temp,
      temp_max: forecastSegment.main.temp_max,
      temp_min: forecastSegment.main.temp_min,
      date: forecastSegment.dt_txt.slice(0, 10),
      time: forecastSegment.dt_txt.slice(11, 19)
    }));

  return (
    <div className='cardContainer'>
      <TempForecastGraph forecast={temperatureForecastData} />
    </div>
  );
};

export default ForecastWeatherCard;