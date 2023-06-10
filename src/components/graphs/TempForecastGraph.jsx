import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis, Tooltip } from 'recharts';

export function TempForecastGraph({ forecast }) {

  console.log(forecast);

  return (
    <>
      <LineChart width={900} height={250} data={forecast}
                 margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid stroke="black" strokeDasharray='3 3' />
        <XAxis dataKey='time' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type='monotone' dataKey='temp' stroke='black' />
      </LineChart>
    </>
  );
}