import { useState } from 'react'

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
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas', number: '123456789'
    },
    {
      name: "Ada Lovelace", number: "39-44-5323523"

    },
    {
      name: "Dan Abramov", number: "12-43-234345"
    },
    {
      name: "Mary Poppendieck", number: "39-23-6423122"
    }

  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

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

    setPersons([...persons, { name: newName, number: newNumber}])
      setNewName("")
      setNewNumber("")
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

export default App