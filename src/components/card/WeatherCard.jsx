import './WeatherCard.scss';

const WeatherCard=({weather})=>{

    return (
        <div className="cardContainer">
            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}/>
            <ul>
                <li>DESCRIPTION: {weather.weather[0].description}</li>
                <li>TEMP:{ weather.main.temp}</li>
                <li>FEELS LIKE: {weather.main.feels_like}</li>
                <li>HUMIDITY: {weather.main.humidity}</li>
                <li>PRESSURE: {weather.main.pressure}</li>
            </ul>
        </div>
    )

}

export default WeatherCard