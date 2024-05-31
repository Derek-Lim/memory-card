import { useState } from 'react'
import Heading from './Heading.jsx'
import Cards from './Cards.jsx'
import './App.css'

function App() {
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  function incrementScore() {
    setScore(score + 1)
  }
  
  function resetScore() {
    setScore(0)
  }
  
  function updateBestScore() {
    if (score > bestScore) {
      setBestScore(score)
    }
  }

  return (
    <>
      <Heading score={score} bestScore={bestScore} />
      <Cards 
        incrementScore={incrementScore}
        resetScore={resetScore}
        updateBestScore={updateBestScore}
      />
    </>
  )
}

export default App
