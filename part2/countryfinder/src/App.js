import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Countries from './components/Countries'

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filtro, setFiltro] = useState('')

  const hook = () => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        if (Array.isArray(response.data)) {
          setCountries(response.data);
        }
      });
  };

  useEffect(hook, [])

  const handleFilterChange = (event) => { // Función para manejar el cambio
    setFiltro(event.target.value);
  }

  const countriesToShow = countries.filter(country =>
    country.name.common.toLowerCase().startsWith(filtro.toLowerCase())
  );

  return (
    <div>
      <Filter filtro={filtro} handleFilterChange={handleFilterChange} />
      <Countries countryList={countriesToShow} />
    </div>
  )
}

export default App