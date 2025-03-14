const ShowPersons = ({number, deleteButton}) =>{
    return (
        <div> 
        <p>{number.name} {number.number}  <button onClick={deleteButton}>delete</button></p>
        </div>
    )
}

const Persons = ({ListofPersons,deleteButton}) => { 
    return ListofPersons.map((person) => (
            <ShowPersons key={person.id} number={person} deleteButton={() => deleteButton(person.id)}></ShowPersons>))
} 

export default Persons