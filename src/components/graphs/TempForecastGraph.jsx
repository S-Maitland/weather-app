import React, { useEffect, useState } from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const TempForecastGraph = ({ forecastData, forecastedDates }) => {
  const [date, setDate] = useState(forecastedDates[0]);
  const [dateData, setDateData] = useState();

  const uniqueDateList = forecastedDates.map((date, index) => {
    return (
      <option key={index} selected={true} value={date}>{date}</option>
    );
  });

  useEffect(() => {

    const filteredData = (date) => {
      setDateData(
        forecastData.filter(forecastSegment => {
          return forecastSegment.date === date;
        })
      );
    };

    filteredData(date);

  }, [forecastData, date]);

  return (
    <>
      <form>
        <select id='dateSelection'
                defaultValue={date[0]}
                onChange={(e) => {
                  setDate(e.target.value);
                }}>
          <option value='DEFAULT' disabled>Select a date...</option>
          {uniqueDateList}
        </select>
      </form>

      <div className='forecastWeatherCard'>
        <LineChart width={900} height={250} data={dateData}
                   margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid stroke='black' strokeDasharray='3 3' />
          <XAxis dataKey='time' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type='monotone' dataKey='temp' stroke='red' />
        </LineChart>
      </div>
    </>
  );
};

export default TempForecastGraph;