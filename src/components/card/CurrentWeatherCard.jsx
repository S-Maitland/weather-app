import '../../scss/components/_currentWeatherCard.scss';

const CurrentWeatherCard = ({currentCity, currentWeather }) => {

    return (
        <div className="cardContainer">
            <div className="iconWrap">
                <img src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`} alt="weatherIcon" />
                {currentWeather.weather[0].description}
                <p>{currentCity}</p>
            </div>

            <div className="weatherInfoContainer">
                <div className="dataRow">
                    <div className="dataLabel">
                        <p>Temp</p>
                    </div>
                    <div className='dataValue'>
                        <p>{`${currentWeather.main.temp}\u00b0C`}</p>
                    </div>
                </div>
                <div className="dataRow">
                    <div className="dataLabel">
                        <p>Feels Like</p>
                    </div>
                    <div className='dataValue'>
                        <p>{`${currentWeather.main.feels_like}\u00b0C`}</p>
                    </div>
                </div>
                <div className="dataRow">
                    <div className="dataLabel">
                        <p>Pressure</p>
                    </div>
                    <div className='dataValue'>
                        <p>{`${currentWeather.main.pressure}hPa`}</p>
                    </div>
                </div>
            </div>

            <div className="weatherInfoContainer">
                <div className="dataRow">
                    <div className="dataLabel">
                        <p>Latitude</p>
                    </div>
                    <div className='dataValue'>
                        <p>{`${currentWeather.coord.lat}`}</p>
                    </div>
                </div>
                <div className="dataRow">
                    <div className="dataLabel">
                        <p>Longitude</p>
                    </div>
                    <div className='dataValue'>
                        <p>{`${currentWeather.coord.lon}`}</p>
                    </div>
                </div>
                <div className="dataRow">
                    <div className="dataLabel">
                        <p>Humidity</p>
                    </div>
                    <div className='dataValue'>
                        <p>{`${currentWeather.main.humidity}%`}</p>
                    </div>
                </div>
                </div>
        </div>
    )

}

export default CurrentWeatherCard