import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App(props) {
  return (
    <>
      <h1 className =' hover:bg-slate-600 bg-red-600  text-xl p-20 rounded-lg text font-bold
      '>{props.name}{props.age}</h1>
      
    </>
    
  )
  
}

export default App
