import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GetApi from './components/GetApi/GetApi'
import Header from './components/Header/Header'
import Button from './components/Button/Button'

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Button>Sort By Date</Button>
       <GetApi></GetApi>
       

      
    </div>
  )
}

export default App
