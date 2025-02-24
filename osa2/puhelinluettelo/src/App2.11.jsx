import { useState, useEffect } from 'react'
import axios from 'axios'

const PersonForm = ({
  newName,
  newNumber,
  addName,
  addNumber,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={addName}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={addNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

const Persons = ({ persons }) => {
  return (
    <ul>
      {persons.map((person, index) => (
        <Person key={index} person={person} />
      ))}
    </ul>
  )
}

const Person = ({ person }) => {
  return (
    <li>
    {person.name} {person.number}
  </li>
  )
}


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/persons')
    .then(response => {
      setPersons(response.data)
    })
  }, [])

  const addName = (event) => {
    setNewName(event.target.value)
  }

  const addNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    axios
      .post('http://localhost:3001/persons', { name: newName, number: newNumber })
      .then(response => {
        setPersons([...persons, response.data])
        setNewName("")
        setNewNumber("")
      })

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        addName={addName}
        addNumber={addNumber}
        handleSubmit={handleSubmit}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  )
}

export default App;