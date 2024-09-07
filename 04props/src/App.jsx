import Student from "./Student";

const name = "Chris";

function App() {
  return (
    <>
        <Student name={name} surname="Mawela" age={30} occupation="Engineer"/>
        <Student name="Daisy" surname="Mahandana" age={30} />
        <Student name="Leiri"/>
    </>
  );
}

export default App;
