import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' 
import WordGame from './components/WordGame'

function App() {
  return (
    <div>
      <WordGame startWord='학교'/>
    </div>
  )
}

export default App