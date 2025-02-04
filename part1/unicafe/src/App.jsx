import { useState } from 'react'

const Display = (props) => {
  return (
      <p>{props.text} {props.counter}</p>
  )
}

const Button = (props) => {
  return(
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}
 
const Header = (props) => {
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  )
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const HandleGood = () => {
    console.log("pressed Good")
    console.log(good)
    setGood(good + 1)}
  const HandleNeutral = () => setNeutral(neutral + 1)
  const HandleBad = () => setBad(bad + 1)
  return (
    <div>
      <Header text="give feedback"></Header>
      <Button onClick={HandleGood} text='good'/>
      <Button onClick={HandleNeutral} text='neutral'/>
      <Button onClick={HandleBad} text='bad'/>
      <Header text="statistics"></Header>
      <Display text="good" counter={good}/>
      <Display text="neutral" counter={neutral}/>
      <Display text="bad" counter={bad}/>
    </div>
  )
}

export default App
