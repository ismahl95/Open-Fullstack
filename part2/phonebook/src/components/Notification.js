// Cambios en el componente Notification
import React from 'react'

const Notification = ({ message, type }) => {

  let cssClass = type ? "personAdded" : "personDeleted" 

  return (
    <div>
      <h1 className={cssClass}>{message}</h1>
    </div>
  )
}

export default Notification
