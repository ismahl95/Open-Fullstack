import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import PersonService from './services/PersonService';
import Notification from './components/Notification';
import './index.css';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filtro, setFiltro] = useState('');
  const [isPersonAdded, setIsPersonAdded] = useState(false);
  const [addedPersonName, setAddedPersonName] = useState('');

  const hook = () => {
    PersonService.getAll().then((PersonList) => {
      setPersons(PersonList);
    });
  };

  useEffect(hook, []);

  useEffect(hook, [persons]);

  const addPerson = (event) => {
    event.preventDefault();

    const existingPerson = persons.find((person) => person.name === newName);
    const sameNameAndNumber = persons.find(
      (person) => person.name === newName && person.number === newNumber
    );

    if (sameNameAndNumber) {
      alert(`${newNumber} is already added to ${newName}`);
    } else if (existingPerson) {
      // The person with the same name already exists
      if (
        window.confirm(
          `${newName} is already added to phonebook. Do you want to update the number?`
        )
      ) {
        const updatedPerson = { ...existingPerson, number: newNumber };
        updatePerson(existingPerson.id, updatedPerson);
      }
    } else {
      createPerson();
    }
  };

  const createPerson = () => {
    const personObject = {
      name: newName,
      number: newNumber,
    };

    PersonService.create(personObject)
      .then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setNewName('');
        setNewNumber('');
        setIsPersonAdded(true);
        setAddedPersonName(returnedPerson.name);
        setTimeout(() => {
          setIsPersonAdded(false);
        }, 5000); // Oculta el mensaje después de 5 segundos
      })
      .catch((error) => {
        console.error('Error creating person:', error);
      });
  };

  const updatePerson = (id, updatedPerson) => {
    PersonService.update(id, updatedPerson)
      .then((returnedPerson) => {
        setPersons(
          persons.map((person) => (person.id === id ? returnedPerson : person))
        );
        setNewName('');
        setNewNumber('');
        setIsPersonAdded(true);
        setAddedPersonName(returnedPerson.name + "'s number updated");
        setTimeout(() => {
          setIsPersonAdded(false);
        }, 5000); // Oculta el mensaje después de 5 segundos
      })
      .catch((error) => {
        console.error('Error updating person:', error);
      });
  };

  const handlePersonNameChange = (event) => {
    console.log('Name: ' + event.target.value);
    setNewName(event.target.value);
  };

  const handlePersonNumberChange = (event) => {
    console.log('Number: ' + event.target.value);
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFiltro(event.target.value);
  };

  const personsToShow = persons.filter((person) =>
    person.name.toLowerCase().startsWith(filtro.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      {isPersonAdded && <Notification message={`Added ${addedPersonName}`} />}
      <Filter filtro={filtro} handleFilterChange={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handlePersonNameChange={handlePersonNameChange}
        newNumber={newNumber}
        handlePersonNumberChange={handlePersonNumberChange}
      />
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} />
    </div>
  );
};

export default App;
