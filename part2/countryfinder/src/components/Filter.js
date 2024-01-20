import React from 'react';

const Filtro = ({ filtro, handleFilterChange }) => {
  return (
    <div>
      Find countries <input value={filtro} onChange={handleFilterChange}/>
    </div>
  )
}

export default Filtro;