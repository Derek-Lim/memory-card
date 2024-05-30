import { useState } from 'react'
import Card from './Card.jsx'
import { cardList } from './data.js'

export default function Cards({ incrementScore, resetScore }) {
  const [cards, setCards] = useState(cardList)

  function resetCards() {
    const newCards = cards.map((card) => {
      return {...card, clicked: false}
    })
    setCards(newCards)
  }

  function handleGameOver() {
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
