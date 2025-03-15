import { useState, useEffect } from "react";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Notification from "./components/Notification";
import phoneService from "./services/Phone";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchItem, setSearchItem] = useState("");
  const [filtering, setNewFilter] = useState([]);
  const [notificationMessage, setNotificationMessage] = useState(null);

  useEffect(() => {
    phoneService.getAll().then((currentNumbers) => {
      setPersons(currentNumbers);
      setNewFilter(currentNumbers);
    });
  }, []);

  const addNumbers = (event) => {
    event.preventDefault();
    const existingcontacts = persons.find((person) => person.name == newName);
    const existingnumbers = persons.find(
      (person) => person.number == newNumber
    );
    if (existingcontacts) {
      if (existingcontacts) {
        if (
          window.confirm(
            `${newName} is already added to phonebook, replace the old number with a new one ?`
          )
        ) {
          const updatedContact = { ...existingcontacts, number: newNumber };
          phoneService
            .updateNumber(existingcontacts.id, updatedContact)
            .then((returnedNumber) => {
              setPersons(
                persons.map((person) =>
                  person.id !== existingcontacts.id ? person : returnedNumber
                )
              );
              setNewFilter(
                persons.map((person) =>
                  person.id !== existingcontacts.id ? person : returnedNumber
                )
              );
              setNewName("");
              setNewNumber("");
              setNotificationMessage(`Updated ${newName} number`);
              setTimeout(() => {
                setNotificationMessage(null);
              }, 3000);
            })
            .catch((error) => {
              alert("Fail during the post");
            });
        }
      }
    } else if (existingnumbers) {
      alert(`${newNumber} is already added to phonebook`);
    } else {
      const nameObjet = {
        name: newName,
        number: newNumber,
      };
      phoneService
        .postNumber(nameObjet)
        .then((returnedContact) => {
          setPersons(persons.concat(returnedContact));
          setNewFilter(filtering.concat(returnedContact));
          setNewName("");
          setNewNumber("");
          setNotificationMessage(`Added ${newName}`);
          setTimeout(() => {
            setNotificationMessage(null);
          }, 3000);
        })
        .catch((error) => {
          alert("Fail during the post");
        });
    }
  };

  const deleteNumbers = (id) => {
    const person = persons.find((p) => p.id === id);
    if (window.confirm(`Delete '${person.name}'`)) {
      setNotificationMessage(`Deleted ${person.name}`);
      setTimeout(() => {
        setNotificationMessage(null);
      }, 3000);
      phoneService
        .deleteNumber(id)
        .then((deletedContact) => {
          const updatenumbers = persons.filter(
            (person) => person.id !== deletedContact.id
          );
          setPersons(updatenumbers);
          setNewFilter(updatenumbers);
        })
        .catch((error) => {
          alert("Fail during deleting");
        });
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
      <Notification message={notificationMessage}></Notification>
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
      <Persons ListofPersons={filtering} deleteButton={deleteNumbers}></Persons>
    </div>
  );
};

export default App;
