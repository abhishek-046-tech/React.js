import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [counter, setCounter] = useState(0)

const addValue = () => {
  if (counter < 50){
  console.log("clicked", counter);
  // counter = counter + 1
  setCounter(counter + 1)
  }
  else{
    console.log("U can access until 0");
  }
}
<div className="bg-red-500 text-center"></div>
const removeValue = () => {
  if (counter > 0){
  console.log("clicked", counter);
  // counter = counter + 1
  setCounter(counter - 1)
  }
  else{
    console.log("U can access until 0");
  }
}

  return (
    <>
     <h1>Hooks in React</h1>
     <h2>Counter: {counter}</h2>

     <button onClick={addValue}>Add</button>
     <br />
     <br />
     <button onClick={removeValue}>Remove</button>
    </>
  )
}

export default App
