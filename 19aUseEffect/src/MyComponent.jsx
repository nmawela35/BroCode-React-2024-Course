import { useEffect, useState } from "react"



export default function MyComponent() {
  const [count,setCount] =useState(0)

  function addCount(){
    setCount(count+1)
  }


  useEffect(()=>{
    document.title = `Count is ${count}`
  },[count])

  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={addCount}>ADD</button>
    </div>
  )
}
