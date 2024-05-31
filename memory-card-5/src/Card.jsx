export default function Card({
  name,
  url,
  clicked,
  cards,
  setCards,
  incrementScore,
  handleGameOver,
}) {
  const myCard = cards.filter((card) => {
    return card.name === name
  })[0]

  function updateCards() {
    const newCards = cards.map((card) => {
        if (card === myCard) {
          return {...card, clicked: true}
        }
        return card
      })
    setCards(newCards)
  }

  function updateScore() {
    if (myCard.clicked === true) {
      handleGameOver()
    } else {
      incrementScore()
      updateCards()
    }
  }

  return (
    <button
      className="card"
      onClick={updateScore}
    >
      <img src={url} />
      <div>{name}</div>
      <div>{`clicked: ${clicked}`}</div>
    </button>
  )
}
