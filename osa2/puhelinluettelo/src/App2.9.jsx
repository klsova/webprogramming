import { useState } from 'react'

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
  const [search, setSearch] = useState('')

  const addName = (event) => {
    setNewName(event.target.value)
  }

  const addNumber = (event) => {
    setNewNumber(event.target.value)
  }
  
  const handleSearch = (event) => {
    setSearch(event.target.value)
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

    const searchPersons =persons.filter((person) =>
      person.name.toLowerCase().includes(search.toLowerCase())
    )

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input value={search} onChange={handleSearch}/> 
      </div>
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
      <div>debug: {newName}</div>
      <h2>Numbers</h2>
      <ul>
        {searchPersons.map((persons, index) => (
          <li key={index}>
            {persons.name} {persons.number}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App