import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

export function TempForecastGraph({ forecast }) {

  console.log(forecast);

  return (
    <>
      <LineChart width={900} height={250} data={forecast}
                 margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid stroke="black" strokeDasharray='1 1' />
        <XAxis dataKey='date' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type='monotone' dataKey='temp' stroke='red' />
      </LineChart>
    </>
  );
}