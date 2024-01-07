import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-1234567' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    if(isPersonRepeated){
      alert(`${newName} is already added to phonebook`)
    } else{
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

  const handlePersonaNumberChange= (event) => {
    console.log("Number: " + event.target.value)
    setNewNumber(event.target.value)
  }

  const showPersons = () => {
    return (
      persons.map(person => <div key={person.name}>{person.name} {person.number}</div>)
    )
  }

  const isPersonRepeated = persons.some(person => person.name === newName);

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePersonNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handlePersonaNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {showPersons()}
    </div>
  )
}

export default App