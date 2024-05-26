import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Card from './Components/Card.jsx'
import ColorChanger from './Components/ColorChanger.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App  age= "__31" name="Abhishek"/>
    <Card property="chavan"/>
    
  </React.StrictMode>,
)
