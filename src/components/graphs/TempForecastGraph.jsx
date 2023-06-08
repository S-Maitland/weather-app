import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

export function TempForecastGraph({ forecast }) {

  console.log(forecast);
  return (
    <>
      <LineChart width={730} height={250} data={forecast}
                 margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='timestamp' />
        <YAxis dataKey='temp'/>
        <Tooltip />
        <Legend />
        <Line type='monotone' dataKey='TEMP' stroke='red' />
        <Line type='monotone' dataKey='TIMESTAMP' stroke='blue' />
      </LineChart>
    </>
  );
}