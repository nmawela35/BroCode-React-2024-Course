import { useState } from "react";

export default function MyComponent() {
  const [car, setCar] = useState({
    year: 2024,
    make: "Ford",
    model: "Mustang",
  });

  function yearChange(e){
    setCar(c=>({...c,year:e.target.value}))
  }

  function makeChange(e){
    setCar(c=>({...c,make:e.target.value}))
  }

  function modelChange(e){
    setCar(c=>({...c,model:e.target.value}))
  }
    
    return <div>
    <p>Your favourite car is: {car.year} {car.make} {car.model}</p>
    <input type="number" value={car.year} onChange={yearChange}/> <br /><br />
    <input type="text" value={car.make} onChange={makeChange}/><br /><br />
    <input type="text" value={car.model} onChange={modelChange}/>
  </div>;
  }
