import { useState } from 'react'

import './App.css'
import Card from './components/card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl'>tailwind</h1>
     <Card name="Nithish"/>
     <Card name="varma"/>
    </>
  )
}

export default App
