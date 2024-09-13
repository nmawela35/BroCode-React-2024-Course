import { useRef } from 'react'
import { useEffect } from 'react'

function App() {

 const inputRef =useRef(null)

  function refClick(){
    inputRef.current.focus();
    inputRef.current.style.background ="yellow"
  }

  useEffect(()=>{
  })

 return(
  <div>
    <h2>useRef with HTML elements</h2>
    <button onClick={refClick}>Click Ref</button>
    <input type="text" ref={inputRef}/>
  </div>
 )
}

export default App
