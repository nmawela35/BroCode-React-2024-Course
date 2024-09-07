function List(props) {

  const category =props.category;
  const listItems = props.items;

  listItems.sort((a, b) => a.calories - b.calories);

  const items = listItems.map((item) => <li key={item.id}>{item.name} {item.calories? item.calories:item.weight}</li>);

  return (
    <div>
      <h3>{category}</h3>
      <ol>{items}</ol>
    </div>
  );
}

List.defaultProps ={
  category: "Category",
  items: []
}

export default List;
