import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const changeHandler = (value) => {
    if(value?.length > 10){
      alert("The maximum number of characters is 10");
    }
  }

  return (
  <div>
    <input type="text" placeholder='text' onChange={(e) => changeHandler(e.target.value)}/>
  </div>
  )
}

export default App
