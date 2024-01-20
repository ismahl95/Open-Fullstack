import React from 'react';

const Country = ({ country }) => {

  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital}</p>
      <p>population: {country.population}</p>

      <h3>Languages</h3>
      <ul>
        {Object.values(country.languages).map((lang, index) => (
          <li key={index}>{lang}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt="flag" />
    </div>
  );

}

export default Country;