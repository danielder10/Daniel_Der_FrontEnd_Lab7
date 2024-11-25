import React, { useEffect, useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/name/kingdom');
        const data = await response.json();
        setCountries(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching countries:', error);
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const handleSelection = (event) => {
    const selectedCca2 = event.target.value;
    const selectedCountry = countries.find((country) => country.cca2 === selectedCca2);
    if (selectedCountry) {
      navigate(`countries/${selectedCca2}`, { state: { data: selectedCountry } });
    }
  };

  return (
    <div>
      <h1>World Kingdoms</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <select onChange={handleSelection} defaultValue="">
            <option value="" disabled>
              Select a country
            </option>
            {countries.map((country) => (
              <option key={country.cca2} value={country.cca2}>
                {country.name.common}
              </option>
            ))}
          </select>
          <Outlet />
        </>
      )}
    </div>
  );
};

export default Countries;
