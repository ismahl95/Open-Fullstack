import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [filtro, setFiltro] = useState('')

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

  const handleFilterChange = (event) => { // Función para manejar el cambio
    setFiltro(event.target.value);
  }

  const personsToShow = persons.filter(person => person.name.toLowerCase().startsWith(filtro.toLowerCase()));

  const isPersonRepeated = persons.some(person => person.name === newName);

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
          filter shown with <input value={filtro} onChange={handleFilterChange}/>
        </div>
      <h2>add a new</h2>
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
      {personsToShow.map(person => <p key={person.name}>{person.name} {person.number}</p>)}
    </div>
  )
}

export default App