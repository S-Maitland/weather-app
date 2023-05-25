import '../../sass/components/CurrentWeatherCard.scss';

const CurrentWeatherCard = ({ weather }) => {

    return (
        <div className="cardContainer">
            <div className="iconWrap">
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weatherIcon" />
                {weather.weather[0].description}
            </div>

            <div className="weatherInfoContainer">
                <div className="dataRow">
                    <div className="dataLabel">
                        <p>Temp</p>
                    </div>
                    <div className='dataValue'>
                        <p>{`${weather.main.temp}\u00b0C`}</p>
                    </div>
                </div>
                <div className="dataRow">
                    <div className="dataLabel">
                        <p>Feels Like</p>
                    </div>
                    <div className='dataValue'>
                        <p>{`${weather.main.feels_like}\u00b0C`}</p>
                    </div>
                </div>
                <div className="dataRow">
                    <div className="dataLabel">
                        <p>Pressure</p>
                    </div>
                    <div className='dataValue'>
                        <p>{`${weather.main.pressure}hPa`}</p>
                    </div>
                </div>
            </div>

            <div className="weatherInfoContainer">
                <div className="dataRow">
                    <div className="dataLabel">
                        <p>Latitude</p>
                    </div>
                    <div className='dataValue'>
                        <p>{`${weather.coord.lat}`}</p>
                    </div>
                </div>
                <div className="dataRow">
                    <div className="dataLabel">
                        <p>Longitude</p>
                    </div>
                    <div className='dataValue'>
                        <p>{`${weather.coord.lon}`}</p>
                    </div>
                </div>
                <div className="dataRow">
                    <div className="dataLabel">
                        <p>Humidity</p>
                    </div>
                    <div className='dataValue'>
                        <p>{`${weather.main.humidity}%`}</p>
                    </div>
                </div>
                </div>
        </div>
    )

}

export default CurrentWeatherCard