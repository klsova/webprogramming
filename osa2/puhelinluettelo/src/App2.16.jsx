import { useState, useEffect } from 'react'
import service from '../service.js'



const PersonForm = ({
  newName,
  newNumber,
  addName,
  addNumber,
  handleSubmit,
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

const Persons = ({ persons, handleDelete }) => {
  return (
    <ul>
      {persons.map((person) => (
        <Person key={person.id} person={person} handleDelete={handleDelete}/>
      ))}
    </ul>
  )
}

const Person = ({ person, handleDelete }) => {
  return (
    <li>
    {person.name} {person.number}
    <button onClick={() => handleDelete(person.id)}>delete</button>
  </li>
  )
}

const Notification = ({ message }) => {
  const notificationStyle = {
    color: 'green',
    fontStyle: 'italic',
    fontSize: '16'
  }

  if (message === null) {
    return null
  }

  return (
    <div style={notificationStyle} className="notification">
      {message}
    </div>
  )
}


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)


  useEffect(() => {
    service.getAll().then((response) => {
      setPersons(response.data)
    })
  })

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

    const newPerson = { name: newName, number: newNumber }

    service.create(newPerson).then((response) => {
        setPersons([...persons, response.data])
        setNewName("")
        setNewNumber("")
        setSuccessMessage(`Added ${newPerson.name}`)
        setTimeout(() => {
          setSuccessMessage(null)
        }, 5000)
      }).catch((error) => {
        setErrorMessage('Error adding person')
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      })
    }

  const handleDelete = (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this contact?')

    if (confirmDelete) {
      service.delete(id).then(() => {
        setPersons(persons.filter((person) => person.id !== id))
        setSuccessMessage('Contact deleted successfully')
        setTimeout(() => {
          setSuccessMessage(null)
        }, 5000)
      }).catch((error) => {
        setErrorMessage('Error deleting contact')
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      })
    }
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} />
      <Notification message={successMessage} />
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        addName={addName}
        addNumber={addNumber}
        handleSubmit={handleSubmit}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} handleDelete={handleDelete}/>
    </div>
  )
}

export default App;