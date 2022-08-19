import './WeatherCard.scss';

const WeatherCard = ({ weather }) => {

    return (
        <div className="cardContainer">
            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />

            <div className="weatherInfoContainer">
                <div className="dataRow">
                    <div className="dataLabel">
                        <p>Description</p>
                    </div>
                    <div className='dataValue'>
                        <p>{weather.weather[0].description}</p>
                    </div>
                </div>
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
                        <p>Humidity</p>
                    </div>
                    <div className='dataValue'>
                        <p>{`${weather.main.humidity}%`}</p>
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

                {/* <div>Temp:{weather.main.temp}</div>
                <div>Feels Like: {weather.main.feels_like}</div>
                <div>Humidity: {weather.main.humidity}</div>
                <div>Pressure: {weather.main.pressure}</div> */}
            </div>
        </div>
    )

}

export default WeatherCard