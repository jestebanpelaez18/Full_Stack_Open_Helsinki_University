import { useState } from 'react'

const getTotalReview = (review) => review.good + review.neutral + review.bad;

const getAveragelReview = (review) => (review.good - review.bad) / getTotalReview(review);

const getPositiveReview = (review) => review.good / getTotalReview(review) * 100;

const StatisticsLine = (props) => {
 
  if(props.text==="positive")
    return (
    <tr>
      <td>{props.text} </td>
      <td>{props.statistic} %</td>
    </tr>
    )
  return (
    <tr>
      <td>{props.text} </td>
      <td>{props.statistic}</td>
    </tr>
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


const Statistics = ({review}) => {
  
  if(getTotalReview(review) === 0)
    return(
      <p>No feedback given</p>
    )
  return (
    <table>
      <tbody>
      <StatisticsLine text="good" statistic={review.good}/>
      <StatisticsLine text="neutral" statistic={review.neutral}/>
      <StatisticsLine text="bad" statistic={review.bad}/>
      <StatisticsLine text="all" statistic={getTotalReview(review)}/>
      <StatisticsLine text="average" statistic={getAveragelReview(review)}/>
      <StatisticsLine text="positive" statistic={getPositiveReview(review)}/>
      </tbody>
    </table>
  )

}
const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const review = {good: good,
  neutral: neutral,
  bad: bad};
  
  const HandleGood = () => {
    setGood(good + 1)}
  const HandleNeutral = () => {
    setNeutral(neutral + 1)}
  const HandleBad = () => {
    setBad(bad + 1)}
 
  return (
    <div>
      <Header text="give feedback"></Header>
      <Button onClick={HandleGood} text='good'/>
      <Button onClick={HandleNeutral} text='neutral'/>
      <Button onClick={HandleBad} text='bad'/>
      <Header text="statistics"></Header>
      <Statistics review={review}/>
    </div>
  )
}

export default App
