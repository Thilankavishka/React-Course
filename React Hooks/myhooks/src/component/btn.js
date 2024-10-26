// import React from "react";

// function Clickhandle() {
//   console.log("Hello");
// }

// function btn() {
//   return <button onClick={Clickhandle}>Click me</button>;
// }

// export default btn;
//..............................................................................................................................
import React from "react";

function Clickhandle() {
  console.log("Hello");
}

function btn() {
  return <button onMouseOver={Clickhandle}>Click me</button>;
}

export default btn;
