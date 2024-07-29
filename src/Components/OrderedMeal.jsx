import React, { useState } from 'react'


export default function OrderedMeal({mealName,sides,drink,price }) {


  
  return (
    <div className='bg-sky-300 min-h-[100px] flex flex-1 items-center justify-evenly gap-10 p-10 overflow-auto'>
        <p>{mealName}</p>
        <p>Sides: {sides}</p>
        <p>Drink: {drink}</p>
        <p>Additional Notes</p>
    <p>${price}</p>
    </div>
  )
}
