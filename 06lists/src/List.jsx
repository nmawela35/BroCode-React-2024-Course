function List() {
  const fruits = [
    {id:1, name: "Apple", calories: 95 },
    {id:2, name: "Mango", calories: 45 },
    {id:3, name: "Banana", calories: 105 },
    {id:4, name: "Orange", calories: 46 },
    {id:5, name: "Coconut", calories: 159 },
  ];

  fruits.sort((a,b) =>a.name.localeCompare(b.name)) //alphabetic order
  console.log(fruits)

  const listItems = fruits.map((fruit) => (
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
