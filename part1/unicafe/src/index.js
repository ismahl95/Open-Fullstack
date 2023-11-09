import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => <button onClick={ handleClick }>{ text }</button>

const StatisticLine = ({ text, value }) => <tr><td>{text}</td><td>{value}</td></tr>

const Statistics = ({ good, neutral, bad }) => {

  const average = (good, neutral, bad) => (good - bad) / (good + neutral + bad)
  const positive = (good, neutral, bad) => good / (good + neutral + bad) * 100 + " %"
  

  if(good + neutral + bad === 0) return <div>No feedback given</div>
  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={good + neutral + bad} />
        <StatisticLine text="average" value={average(good, neutral, bad)} />
        <StatisticLine text="positive" value={positive(good, neutral, bad)} />
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseByOne = (status, setStatus) => setStatus(status + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => increaseByOne(good, setGood)} text="good" />
      <Button handleClick={() => increaseByOne(neutral, setNeutral)} text="neutral" />
      <Button handleClick={() => increaseByOne(bad, setBad)} text="bad" />
      <h1>statistics</h1> 
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
