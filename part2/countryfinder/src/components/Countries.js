import React, { useState, useEffect } from 'react';
import Country from './Country';

const Countries = ({ countryList }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    setSelectedCountry(null);
  }, [countryList]);

  const handleShowButtonClick = (country) => {
    setSelectedCountry(country);
  }

  if (countryList.length > 10) {
    return <p>Too many matches, specify another filter</p>
  } else if (countryList.length === 1 || selectedCountry) {
    const countryToShow = selectedCountry || countryList[0];
    return (
      <div>
        <Country country={countryToShow} />
      </div>
    );
  } else {
    return (
      <ul>
        {countryList.map((country, index) => (
          <div key={index}>
            <span style={{ marginRight: '10px' }}>{country.name.common}</span>
            <button onClick={() => handleShowButtonClick(country)}>Show</button>
          </div>
        ))}
      </ul>
    );
  }
}

export default Countries;
