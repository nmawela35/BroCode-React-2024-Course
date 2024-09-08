import { useState } from "react"

export default function MyComponent() {
  const [name,setName] =useState("Guest")
  const [age,setAge] =useState(25)
  const [isEmployed,setIsEmployed] =useState()
  
  function updateName(){
    const  name ="Chris"
    setName(name)
  }

  function updateAge(){
    setAge(age+1)
  }
  function updateEmployment(){
    setIsEmployed(!isEmployed)
  }

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>

      <p>Age: {age}</p>
      <button onClick={updateAge}>Set Age</button>

      <p>Is Employed: {isEmployed? "Yes": "No"}</p>
      <button onClick={updateEmployment}>Set Employed</button>
    </div>
  )
}
