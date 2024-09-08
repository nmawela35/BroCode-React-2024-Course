export default function Button() {

    let count = 0;

  const handleClick = (name) => {
    if (count < 2) {
      count = count + 1;
      console.log(`Your name: ${name}`);
    } else {
      console.log(`${name} you clicked me ${count} times stop clicking me`);

    }
  };

  return <button onClick={() => handleClick()}>Click Me 🔘</button>;
}
