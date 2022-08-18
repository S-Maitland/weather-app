import './WeatherCard.scss';

const WeatherCard = ({ weather }) => {

    return (
        <div className="cardContainer">
            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />

            <table className="weatherInfoTable">
                <tbody>
                    <tr>
                        <td className="tableLabel">Description</td>
                        <td className="tableValue">{weather.weather[0].description}</td>
                    </tr>
                    <tr>
                        <td className="tableLabel">Temp</td>
                        <td className="tableValue">{weather.main.temp}</td>
                    </tr>
                    <tr>
                        <td className="tableLabel">Feels Like</td>
                        <td className="tableValue">{weather.main.feels_like}</td>
                    </tr>
                    <tr>
                        <td className="tableLabel">Humidity</td>
                        <td className="tableValue">{weather.main.humidity}</td>
                    </tr>
                    <tr>
                        <td className="tableLabel">Pressure</td>
                        <td className="tableValue">{weather.main.pressure}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )

}

export default WeatherCard