import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filtro, setFiltro] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    if (isPersonRepeated) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const personObject = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
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
      <Filter filtro={filtro} handleFilterChange={handleFilterChange}/>
      <h2>add a new</h2>
      <PersonForm addPerson={addPerson} newName={newName} handlePersonNameChange={handlePersonNameChange}
        newNumber={newNumber} handlePersonNumberChange={handlePersonNumberChange}/>
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow}/>
    </div>
  )
}

export default App