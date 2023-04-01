import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const add = () => {count < 10 ? setCount(count => count+1) :count;}
  const subtract = () => {count > -10 ? setCount(count => count-1) :count;}
  return (
    <div>
    
    <button onClick={add}>add</button>
    <label  className={count>0 ? 'color1' : count<0 ? 'color2' : 'color0'}>{count} </label>
    <button onClick={subtract}>subtract</button>
  </div>
  )
}

export default App
