import { useState } from 'react'

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


const Statistics = (props) => {
  const average = props.puntuation / props.total
  const positive = props.good / props.total * 100
  
  if(props.total === 0)
    return(
      <p>No feedback given</p>
    )
  return (
    <div>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {props.total}</p>
      <p>average {average}</p>
      <p>positive {positive} %</p>
    </div>
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
      <Statistics total={total} puntuation={puntuation} good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

export default App
