import React from 'react'
import Card from './Card'

const Cards = ({courses}) => {
  return (
    <div>
      {
        courses.map((data)=>{
          <Card/>
        })
      }
    </div>
  )
}

export default Cards
