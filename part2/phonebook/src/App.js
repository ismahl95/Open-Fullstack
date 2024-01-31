import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import PersonService from './services/PersonService'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filtro, setFiltro] = useState('')

  const hook = () => {
    PersonService.getAll()
      .then(PersonList => {
        setPersons(PersonList)
      })
  }

  useEffect(hook, [])

  useEffect(hook, [persons])

  const addPerson = (event) => {
    event.preventDefault()
    if (isPersonRepeated) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const personObject = {
        name: newName,
        number: newNumber
      }

      PersonService.create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
    }
  }

  const handlePersonNameChange = (event) => {
    console.log("Name: " + event.target.value)
    setNewName(event.target.value)
  }
  const handlePersonNumberChange = (event) => {
    console.log("Number: " + event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => { // Función para manejar el cambio
    setFiltro(event.target.value);
  }

  const personsToShow = persons.filter(person => person.name.toLowerCase().startsWith(filtro.toLowerCase()));

  const isPersonRepeated = persons.some(person => person.name === newName);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filtro={filtro} handleFilterChange={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm addPerson={addPerson} newName={newName} handlePersonNameChange={handlePersonNameChange}
        newNumber={newNumber} handlePersonNumberChange={handlePersonNumberChange} />
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} />
    </div>
  )
}

export default App