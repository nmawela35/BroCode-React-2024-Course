import { useState } from "react"

export default function MyComponent() {
    const [count,setCount] =useState(0);

    function increment(){
        setCount(prevCount => prevCount+1)
        setCount(prevCount => prevCount+1)
        setCount(prevCount => prevCount+1)
        //UPDATE
    }

    function decrement(){
        setCount(prevCount => prevCount-1)
        setCount(prevCount => prevCount-1)
        setCount(prevCount => prevCount-1)
    }

    function reset(){
        setCount(prevCount =>prevCount=0)
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
