import '../../scss/components/_forecastWeatherCard.scss';

const ForecastWeatherCard = ({ weatherForecast }) => {
  console.log(weatherForecast);

  // let temperatureForecastData = weatherForecast.list.map((forecastSegment) => {
  //     {
  //       timestamp: forecastSegment.dt_txt,
  //       temp: forecastSegment.main.temp,
  //     }
  // });

  return (
    <div className='cardContainer'>
      {/*{temperatureForecastData}*/}
      {/*<TempForecastGraph data={{ temperatureForecastData }} />*/}
    </div>
  );

};

export default ForecastWeatherCard;