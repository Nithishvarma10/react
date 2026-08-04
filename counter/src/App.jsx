import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
const add=()=>{
  if(count<20)
  setCount(count+1);
}
const dec=()=>{
  if(count>0)
  setCount(count-1);
}

  return (
    <div className='conatiner'>
    <h1>This is counter project</h1>
      <h2>The counter value is {count}</h2>
      <div className='buttons'>
      <button
      onClick={add}
      >increase</button>
      <button
      onClick={dec}
      >decrease</button>
      </div>
      {
        count==20 && (<p className='warning'>⚠️the limit is 20</p>)}
       { count==0 && (<p className='warning'>⚠️the limit is 0</p>)}
      
      <p>the counter is updating {count}</p>
    </div>
  )
}

export default App
