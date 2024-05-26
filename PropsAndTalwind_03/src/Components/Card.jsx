import React from 'react'
import {useState} from 'react'

function Card(props) {
    
    let myObj = {
        name: "Abhishek",
        property: "A Lot",
        age: 21
    }
  return (
    <div>
      <h2 className ='bg-slate-900 p-10px m-10px w-10px'>{props.property}</h2>
    </div>
  )
}

export default Card
