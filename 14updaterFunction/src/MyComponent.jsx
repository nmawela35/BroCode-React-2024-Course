import { useState } from "react"

export default function MyComponent() {
    const [count,setCount] =useState(0);

    function increment(){
        setCount(prev => prev+1)
        setCount(prev => prev+1)
        setCount(prev => prev+1)
    }

    function decrement(){
        setCount(prev => prev-1)
        setCount(prev => prev-1)
        setCount(prev => prev-1)
    }

    function reset(){
        setCount(prev =>prev=0)
    }

  return (
    <div>
        <p>{count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}
