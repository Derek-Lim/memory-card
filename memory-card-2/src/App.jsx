import { useState } from 'react'
import Heading from './Heading.jsx'
import Cards from './Cards.jsx'
import './App.css'

function App() {
  const [score, setScore] = useState(0)

  function incrementScore() {
    setScore(score + 1)
  }

  function resetScore() {
    setScore(0)
  }

  return (
    <>
      <Heading score={score} />
      <Cards incrementScore={incrementScore} resetScore={resetScore} />
    </>
  )
}

export default App
