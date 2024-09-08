import { useState } from "react";

export default function MyComponent() {

  const [foods,setFoods] =useState(["Apple", "Orange","Banana"])

  function addFood(){

    const newFood =document.getElementById('foodInput').value;
    document.getElementById('foodInput').value =""
    setFoods( f =>([...f,newFood]))
  }

  function removeFood(index){
    setFoods(foods.filter((_,i) => i !== index))

  }

    return (
      <div>
        <h2>List of food</h2>
        <ul>
          {foods.map((food,index)=><li key={index} onClick={() =>removeFood(index)}>{food}</li>
          )}
        </ul>
        <input type="text" id="foodInput" placeholder="Add Food name" />
        <button onClick={addFood}>Add Food</button>
      </div>
    )
  }
