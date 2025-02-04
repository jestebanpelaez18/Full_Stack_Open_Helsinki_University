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

const Average = (props) => {
  const average = props.puntuation / props.total
  return (
    <p>average {average}</p>
  )
}

const Positive = (props) => {
  const positive = props.good / props.total * 100
  return (
    <p>positive {positive} %</p>
  )
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total,setTotal] = useState(0)
  const [puntuation,setPuntuation] = useState(0)
  
  const HandleGood = () => {
    setGood(good + 1)
    setTotal(total + 1)
    setPuntuation(puntuation + 1)}
  const HandleNeutral = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)}
  const HandleBad = () => {
    setBad(bad + 1)
    setTotal(total + 1)
    setPuntuation(puntuation - 1)}
  

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
      <Display text="all" counter={total}/>
      <Average puntuation={puntuation} total={total}/>
      <Positive good={good} total={total}/>
    </div>
  )
}

export default App
