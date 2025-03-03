const ShowPersons = ({number}) =>{
    return (
        <p>{number.name} {number.number}</p>
    )
}

const Persons = ({ListofPersons}) => { 
    return ListofPersons.map((person) => (
            <ShowPersons key={person.id} number={person}></ShowPersons>))
} 

export default Persons