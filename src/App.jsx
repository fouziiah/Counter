import { useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  function handleIncrement(){
    setCount(count + 1);
  }

  function handleDecrement(){
    setCount(count - 1);
  }
  return (
    <div>
        <h1>Counter</h1>
        <h1>{count}</h1>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
    </div>
  )
}

export default App
