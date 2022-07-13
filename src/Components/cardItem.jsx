import React from 'react'

function CardItem ({ image, tittle, name }) {
  return (
    <div className='cardItem'>
        <div style={{ backgroundImage: `url(${image})` }}> </div>
        {/* <h1> {tittle}</h1> */}
        <span> {name} </span>
    </div>
  )
}

export default CardItem


