import '../../scss/components/_forecastWeatherCard.scss';
import TempForecastGraph from '../graphs/TempForecastGraph';

const ForecastWeatherCard = ({ weatherForecast }) => {
  let uniqueDates = weatherForecast.list.map((forecastSegment) => {
    return forecastSegment.dt_txt.slice(0, 10);
  });

  uniqueDates = [...new Set(uniqueDates)]

  const forecastData = weatherForecast.list.map((forecastSegment) => (
    {
      'temp': forecastSegment.main.temp,
      'temp_max': forecastSegment.main.temp_max,
      'temp_min': forecastSegment.main.temp_min,
      'date': forecastSegment.dt_txt.slice(0, 10),
      'time': forecastSegment.dt_txt.slice(11, 19)
    }
  ));

  return (
    <div className='forecastCardContainer'>
      <TempForecastGraph forecastData={forecastData} forecastedDates={uniqueDates} />
    </div>
  );
};

export default ForecastWeatherCard;
