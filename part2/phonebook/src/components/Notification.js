// Cambios en el componente Notification
import React from 'react'

const Notification = ({ message }) => {
  return (
    <div>
      <h1 className="personAdded">{message}</h1>
    </div>
  )
}

export default Notification
