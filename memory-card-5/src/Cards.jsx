import { useState, useEffect } from 'react'
import Card from './Card.jsx'
import { cardList } from './data.js'

export default function Cards({ incrementScore, resetScore, updateBestScore }) {
  const [cards, setCards] = useState(cardList)

  useEffect(() => {
    const newCards = cards.sort((a, b) => 0.5 - Math.random())
    setCards(newCards)
  }, [cards])

  function resetCards() {
    const newCards = cards.map((card) => {
      return {...card, clicked: false}
    })
    setCards(newCards)
  }

  function handleGameOver() {
    updateBestScore()
    resetCards()
    resetScore()
  }
  
  return (
    <div className='container'>
      {cards.map((card) => {
        return <Card
        key={card.id}
        name={card.name}
        clicked={card.clicked}
        url={card.url}
        cards={cards}
        setCards={setCards}
        incrementScore={incrementScore}
        handleGameOver={handleGameOver}
        />
      })}
    </div>
  )
}
