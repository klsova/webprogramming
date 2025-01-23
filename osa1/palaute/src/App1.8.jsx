import { useState } from "react"

const Statistics = ({good, neutral, bad}) => {
  const totalClicks = good + neutral + bad
  const Average = totalClicks > 0 ? (good - bad) / totalClicks : 0
  const Positive = totalClicks > 0 ? (good / totalClicks) * 100 : 0

  return (
    <div>
    <div> Good {good}</div>
    <div> Neutral {neutral}</div>
    <div> Bad {bad}</div>
    <div> All {totalClicks}</div>
    <div> Average {Average.toFixed(2)}</div>
    <div> Positive {Positive.toFixed(2)}</div>
    </div>  
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  return (
    <div>
      <body>
        <h1> Give feedback </h1>
        <button onClick={handleGoodClick}>Good</button>
        <button onClick={handleNeutralClick}>Neutral</button>
        <button onClick={handleBadClick}>Bad</button>
        <h2> Statistics </h2>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </body>
    </div>
  )
}

export default App