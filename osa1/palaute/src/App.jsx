import { useState } from "react"

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>
}

const StatisticsLine = ({ text, value }) => {
  return (
    <div>
      {text} {value}
    </div>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const totalClicks = good + neutral + bad
  const Average = totalClicks > 0 ? (good - bad) / totalClicks : 0
  const Positive = totalClicks > 0 ? (good / totalClicks) * 100 : 0

  if (totalClicks === 0) {
    return <div>No feedback given</div>
  }
  
  return (
    <div>
    <StatisticsLine text="Good" value={good} />
    <StatisticsLine text="Neutral" value={neutral} />
    <StatisticsLine text="Bad" value={bad} />
    <StatisticsLine text="All" value={totalClicks} />
    <StatisticsLine text="Average" value={Average.toFixed(2)} />
    <StatisticsLine text="Positive" value={Positive.toFixed(2)} />
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
        <Button onClick={handleGoodClick} text="Good" />
        <Button onClick={handleNeutralClick} text="Neutral" />
        <Button onClick={handleBadClick} text="Bad" />
        <h2> Statistics </h2>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </body>
    </div>
  )
}

export default App