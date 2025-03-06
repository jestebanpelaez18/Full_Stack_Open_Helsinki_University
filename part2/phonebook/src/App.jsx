import { useState, useEffect } from "react";
import axios from "axios";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchItem, setSearchItem] = useState("");
  const [filtering, setNewFilter] = useState([]);

  useEffect(() => {
    console.log("efect");
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("promised fullfilled");
      setPersons(response.data)
      setNewFilter(response.data)
    });
  },[]);

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
      setNewFilter(filtering.concat(nameObjet));
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
      <Filter handle={handleFiltering} item={searchItem}></Filter>
      <h3>add a new</h3>
      <PersonForm
        addButton={addNumbers}
        name={newName}
        handleName={handleNameChange}
        number={newNumber}
        handleNumber={handleNumberChange}
      ></PersonForm>
      <h3>Numbers</h3>
      <Persons ListofPersons={filtering}></Persons>
    </div>
  );
};

export default App;
