import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function App() {
  const [number, setNumber] = useState(0)
  const ref =useRef(0)
  console.log(ref)

  const click =()=>{
    setNumber(number+1)
  }

  function refClick(){
    ref.current = ref.current +1;
    console.log(ref.current)
  }

  useEffect(()=>{
    console.log("component rendered")
  })

 return(
  <div>
    <h1>UseState</h1>
    <p>Number: {number}</p>
    <button onClick={click}>Click Here</button>
    <button onClick={refClick}>Click Ref</button>
  </div>
 )
}

export default App
