import "./App.css";
//import { useState } from "react";

function Header() {
  return <h1>Hello I am Header</h1>;
}

function App() {
  //const [reactiveValue, setter] = useState(0);
  return (
    //<button onClick={() => setter(reactiveValue + 1)}>{reactiveValue}</button>
    <>
      <Header></Header>
    </>
  );
}

export default App;
