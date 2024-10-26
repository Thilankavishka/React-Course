import "./App.css";
import Btn from "./component/btn";
import Prop from "./component/prop";
import ModeTogler from "./component/ModeTogler";

const data = [
  { name: "thilan", age: 23 },
  { name: "kasun", age: 24 },
];

function App() {
  return (
    <>
      <ModeTogler></ModeTogler>
      <Prop name1={data}></Prop>
      <Btn></Btn>
    </>
  );
}

export default App;
