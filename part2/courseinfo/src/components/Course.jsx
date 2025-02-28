const Total = ({parts}) => {
    const total = parts.reduce((sum, part) => sum + part.exercises,0)
    return(
      <p><b>total of {total} of exercises</b></p>
    )
  }
  
  const Part = ({part}) => {
    return(
      <p>{part.name} {part.exercises}</p>
    )
  }
  
  const Header = ({name}) => {
    return(
      <h2>{name}</h2>
    )
  }
  
  
  const Content = ({parts}) => {
    return (
      <div>
      {parts.map(part => <Part key={part.id} part={part}></Part>)}
      <Total parts={parts}></Total>
      </div>
    )
  }
  
  const Course = ({course}) => {
    return (
      <div>
        <Header name={course.name}></Header>
        <Content key={course.id} parts={course.parts}></Content>
      </div>
    )
  }

  export default Course