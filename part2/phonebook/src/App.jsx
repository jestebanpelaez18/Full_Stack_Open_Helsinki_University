import { useState } from "react";
import Numbers from "./components/Numbers";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchItem, setSearchItem] = useState("");
  const [Filter, setNewFilter] = useState(persons);

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
      setNewFilter(Filter.concat(nameObjet));
      setNewName("");
      setNewNumber("");
    }
  };

  const handleNameChange = (event) => {
    const searchTerm = event.target.value;
    setNewName(searchTerm);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFiltering = (event) => {
    const searchTerm = event.target.value;
    setSearchItem(searchTerm);
    const filternames = persons.filter((person) =>
      person.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setNewFilter(filternames);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          filter shown with:{" "}
          <input value={searchItem} onChange={handleFiltering} />
        </div>
      </form>
      <h2>add a new</h2>
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
      {Filter.map((person) => (
        <Numbers key={person.id} number={person}></Numbers>
      ))}
    </div>
  );
};

export default App;
