import "./App.css";
import Btn from "./component/btn";
import Prop from "./component/prop";
import ModeTogler from "./component/ModeTogler";
import Currentdate from "./component/currentdate";
import Heading from "./component/heading";
import MealsProvider from "./component/usecontext/MealsProvide";
import MealsList from "./component/usecontext/MealsList";
import Counter from "./component/usecontext/Counter";
import { useState } from "react";

const data = [
  { name: "thilan", age: 23 },
  { name: "kasun", age: 24 },
];

function App() {
  const [data1, setdata] = useState("Hello");
  const date = new Date();

  function setdatafunc() {
    setdata("hiii");
  }
  return (
    <>
      <MealsProvider>
        <MealsList></MealsList>
        <Counter></Counter>
      </MealsProvider>

      <Heading message={data1 + "thilan"}></Heading>
      <button onClick={setdatafunc}>Click for change</button>
      <Currentdate message={date.toLocaleTimeString()}></Currentdate>
      <ModeTogler></ModeTogler>
      <Prop name1={data}></Prop>
      <Btn></Btn>
    </>
  );
}

export default App;
