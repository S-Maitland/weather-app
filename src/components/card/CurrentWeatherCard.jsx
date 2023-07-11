import '../../scss/components/_currentWeatherCard.scss';

const CurrentWeatherCard = ({ currentCity, currentWeather }) => {

  return (
    <div className='currentWeatherContainer'>
      <div className='currentWeatherGauge'>
        <div className='iconWrap'>
          <img src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`} alt='weatherIcon' />
          {currentWeather.weather[0].description}
          <p>{currentCity}</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeatherCard;