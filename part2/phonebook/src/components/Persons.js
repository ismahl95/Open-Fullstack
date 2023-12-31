import React from 'react';

const Persons = ({ personsToShow }) => {
  return (
    <div>
      {personsToShow.map(person => <p key={person.name}>{person.name} {person.number}</p>)}
    </div>
  )
}

export default Persons;