import { useState } from "react";
import Numbers from "./components/Numbers";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-1234567", id: 0 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addNumbers = (event) => {
    event.preventDefault();
    const existingcontacts = persons.find((person) => person.name == newName);
    const existingnumbers = persons.find(
      (person) => person.number == newNumber
    );
    if (existingcontacts) {
      if (existingcontacts) {
        alert(`${newName} is already added to phonebook`);
      }
    } else if (existingnumbers) {
      alert(`${newNumber} is already added to phonebook`);
    } else {
      const nameObjet = {
        name: newName,
        number: newNumber,
        id: String(persons.length + 1),
      };
      setPersons(persons.concat(nameObjet));
      setNewName("");
      setNewNumber("");
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNumbers}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <Numbers key={person.id} number={person}></Numbers>
      ))}
    </div>
  );
};

export default App;
