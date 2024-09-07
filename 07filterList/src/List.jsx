export default function List() {

  const fruits = [
    {id:1, name: "Apple", calories: 95 },
    {id:2, name: "Mango", calories: 45 },
    {id:3, name: "Banana", calories: 105 },
    {id:4, name: "Orange", calories: 46 },
    {id:5, name: "Coconut", calories: 159 },
  ];

  // fruits.sort((a,b) =>b.name.localeCompare(b.name)) //alphabetical order
  fruits.sort((a,b) =>a.calories -b.calories)

  const filterList =(fruits.filter((fruit) => fruit.calories>45))
  const listItems = filterList.map((fruit) =><li key={fruit.id}>{fruit.name}: &nbsp;<strong>{fruit.calories}</strong></li>)

return(
  <div><ol>{listItems}</ol></div>
)

}
