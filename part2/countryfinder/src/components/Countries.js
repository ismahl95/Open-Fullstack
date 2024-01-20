import React from 'react';
import Country from './Country';

const Countries = ({ countryList }) => {
  
  if (countryList.length > 10) {
    return <p>Too many matches, specify another filter</p>
  }
  else if(countryList.length == 1){
    return <Country country={countryList[0]} />
  }
  else {
    return <ul>
      {countryList.map((country, index) => (
        <p key={index}>{country.name.common}</p>
      ))}
    </ul>
  }
  
}

export default Countries;