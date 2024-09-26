import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Add from './components/Add'

function App() {
  

  return (
    <>
     <h2>Welcome to React Learning</h2> 
     <button type="button">Click Me!</button>
     {/*  */}
     {/* put< and write the component name..click sugestion and import Home appears */}
     <Home/>  
     <br />
     <Add/>   
    </>
  )
}

export default App
