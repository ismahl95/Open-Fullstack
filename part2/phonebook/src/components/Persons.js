import React from 'react';
import PersonService from '../services/PersonService';

function DeleteUser(id, user) {
  let msg = "¿Estás seguro de que quieres borrar a " + user + "?";
  if (window.confirm(msg)) {
    alert(user + " fue eliminado");
    PersonService.remove(id)
    .then(response => console.log(response))
  } else {
    alert(user + " no fue eliminado de la app");
  }
}

const Persons = ({ personsToShow }) => {
  return (
    <div>
      {personsToShow.map((person, index) => (
        <div key={index}>
          <p style={{ display: 'inline-block', marginRight: '8px' }}>{person.name} {person.number}</p>
          <button onClick={() => DeleteUser(person.id, person.name)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Persons;
