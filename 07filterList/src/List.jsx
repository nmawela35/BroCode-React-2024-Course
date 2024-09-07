function List() {
  const fruits = [
    {id:1, name: "Apple", calories: 95 },
    {id:2, name: "Mango", calories: 45 },
    {id:3, name: "Banana", calories: 105 },
    {id:4, name: "Orange", calories: 46 },
    {id:5, name: "Coconut", calories: 159 },
  ];

  // fruits.sort((a,b) =>a.name.localeCompare(b.name))
  // console.log(fruits)

  const listItems = fruits.filter((fruit) => fruit.name ="Coconut" r (
    <li key={fruit.id}>
      {fruit.name}: <b>{fruit.calories}</b>
    </li>
    
  ));

  return (
    <div>
      <ol>{listItems}</ol>
    </div>
  );
}

export default List;
