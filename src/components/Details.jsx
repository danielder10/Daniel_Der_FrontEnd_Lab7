import React from 'react';
import { useLocation } from 'react-router-dom';

const Details = () => {
  const { state } = useLocation();

  if (!state?.data) {
    return <p>Country data not found.</p>;
  }

  const { data } = state;
  const { name, flags, population, region, capital } = data;

  return (
    <div>
      <h2>{name.common}</h2>
      <img src={flags.svg} alt={`${name.common} flag`} style={{ width: '100px' }} />
      <p><strong>Region:</strong> {region}</p>
      <p><strong>Capital:</strong> {capital ? capital[0] : 'N/A'}</p>
      <p><strong>Population:</strong> {population.toLocaleString()}</p>
    </div>
  );
};

export default Details;
