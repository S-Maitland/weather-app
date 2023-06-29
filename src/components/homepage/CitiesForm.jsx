import cities from '../../cities.json';
import React from 'react';

const cityData = cities.cities.sort();

export const CitiesForm = ({ currentCity, setCity }) => {

  const citiesList = cityData.map((city, index) => {
    const selected = city === currentCity
    return (
      <option key={index} value={city} selected={selected}>{city}</option>
    );
  });

  return (
    <>
      <form>
        <select id='citySelection'
                defaultValue='DEFAULT'
                onChange={(e) => {
                  setCity(e.target.value);
                }}>
          <option value='DEFAULT' disabled>Select A City...</option>
          {citiesList}
        </select>
      </form>
    </>
  );
};
