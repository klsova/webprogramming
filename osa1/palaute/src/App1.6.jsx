import { useState } from "react"

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)
  const totalClicks = () =>
  {bad} + {neutral} + {good}

  return (
    <div>
      <body>
        <h1> Give feedback </h1>
        <button onClick={handleGoodClick}>Good</button>
        <button onClick={handleNeutralClick}>Neutral</button>
        <button onClick={handleBadClick}>Bad</button>
        <h2> Statistics </h2>
        <div>Good {good}</div>
        <div>Neutral {neutral}</div>
        <div>Bad {bad}</div>
      </body>
    </div>
  )
}

export default App