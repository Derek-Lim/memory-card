import { useState } from 'react'
import Card from './Card.jsx'
import { cardList } from './data.js'


export default function Cards() {
  return (
    <div className='container'>
      {cardList.map((card) => {
        return <Card key={card.id} name={card.name} url={card.url} />
      })}
    </div>
  )
}