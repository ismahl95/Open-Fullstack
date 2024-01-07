import React from 'react';

const Filtro = ({ filtro, handleFilterChange }) => {
  return (
    <div>
      filter shown with <input value={filtro} onChange={handleFilterChange}/>
    </div>
  )
}

export default Filtro;