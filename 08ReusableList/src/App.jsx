import List from "./List"


function App() {
  
  const fruits = [
    {id:1, name: "Apple", calories: 95 },
    {id:2, name: "Mango", calories: 45 },
    {id:3, name: "Banana", calories: 105 },
    {id:4, name: "Orange", calories: 46 },
    {id:5, name: "Coconut", calories: 159 },
  ];

  const vegetables = [
    {id:6, name: "Spinach", calories: 95 },
    {id:7, name: "Cabbage", calories: 45 },
    {id:8, name: "lettuce", calories: 105 },
    {id:9, name: "pumpkin", calories: 46 },
    {id:10, name: "onion", calories: 159 },
  ];

  const people = [
    {id:6, name: "chris", weight: 95 },
    {id:7, name: "Tsire", weight: 45 },
    {id:8, name: "TD", weight: 105 },
    {id:9, name: "MV", weight: 46 },
    {id:10, name: "MD", weight: 66 },
  ];
  
  return(
    <>
    {fruits.length > 0 && <List  items={fruits} category="fruits"/>}
    {vegetables.length > 0 && <List  items={vegetables} category="vegetable"/>}
    {people.length > 0 && <List  items={people} category="people"/>}
    
    </>
  )
}




export default App
