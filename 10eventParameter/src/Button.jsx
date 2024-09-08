export default function Button() {

    let count = 0;

  const handleClick = (e) => {
      e.target.style.background = 'red'
  };

  return <button onClick={(e) => handleClick(e)}>Click Me 🔘</button>;
}
