const Part = (props) => {
  return (
    <div>
    <p>{props.courses.part} {props.courses.exercise}</p>
  </div>
  )
}

const Header = (props) => {
  const course = 'Half Stack application development'
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part courses={props.courses[0]}/>
      <Part courses={props.courses[1]}/>
      <Part courses={props.courses[2]}/>
    </div>
  )
}

const Total = (props) => {
  return (
  <div>
    <p>Number of exercises {props.sum[0].exercise + props.sum[1].exercise + props.sum[2].exercise}</p>
  </div>
  )
}

const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
    {part:'Fundamentals of React', exercise: 10},
    {part:'Using props to pass data', exercise: 7},
    {part:'State of a component', exercise: 14}
  ]
}
  return (
    <div>
      <Header name={course.name} />
      <Content courses={course.parts}/>
      <Total sum={course.parts}/>
    </div>
  )
}

export default App
