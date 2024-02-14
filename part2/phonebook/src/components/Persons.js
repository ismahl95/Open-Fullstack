import React, { useState } from 'react';
import PersonService from '../services/PersonService';
import Notification from './Notification';

function DeleteUser(id, user, setNotification) {
  return new Promise((resolve, reject) => {
    let msg = "¿Estás seguro de que quieres borrar a " + user + "?";
    if (window.confirm(msg)) {
      PersonService.remove(id)
        .then(() => {
          setNotification({
            message: `${user} fue eliminado exitosamente`,
            type: 'success',
          });
          resolve(user);
        })
        .catch((error) => {
          setNotification({
            message: `Error eliminando a ${user}: ${error.message}`,
            type: 'error',
          });
          reject(error);
        });
    } else {
      setNotification({
        message: `${user} no fue eliminado de la app`,
        type: 'info',
      });
      reject();
    }
  });
}

const Persons = ({ personsToShow }) => {
  const [notification, setNotification] = useState(null);

  const handleDelete = (id, name) => {
    DeleteUser(id, name, setNotification)
      .then((deletedUser) => {
        // Puedes hacer algo adicional si es necesario, como actualizar el estado o recargar la lista de personas
        console.log(`${deletedUser} eliminado exitosamente`);
      })
      .catch((error) => {
        console.error('Error al intentar eliminar el usuario:', error);
      });
  };

  return (
    <div>
      {personsToShow.map((person, index) => (
        <div key={index}>
          <p style={{ display: 'inline-block', marginRight: '8px' }}>{person.name} {person.number}</p>
          <button onClick={() => handleDelete(person.id, person.name)}>Delete</button>
        </div>
      ))}
      {notification && (
        <Notification message={notification.message} type={false} />
      )}
    </div>
  );
}

export default Persons;
