import { useState } from 'react'
import Numbers from './components/Numbers'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      id:0 }
  ]) 
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const existingcontacts = persons.find(person => person.name == newName)
    if(existingcontacts)
    {
      alert(`${newName} is already added to phonebook`)
    }
    else
    {
      const nameObjet = {
        name: newName,
        id: String(persons.length + 1)
      }
      setPersons(persons.concat(nameObjet))
      setNewName('')
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input 
          value={newName} 
          onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <Numbers key={person.id} number={person}></Numbers>)}
    </div>
  )
}

export default App
