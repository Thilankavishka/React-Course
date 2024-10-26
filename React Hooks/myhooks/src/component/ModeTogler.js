import React from "react";

export default function ModeTogler() {
  let darkModeOn = true;
  const darkMode = <h1>Dark modeis on</h1>;
  const lightMode = <h1>Light Mode is on</h1>;

  function handleClick() {
    darkModeOn = !darkModeOn;
    if (darkModeOn === true) {
      console.log("Darkmode is on");
    } else {
      console.log("lightmode is on");
    }
  }
  return (
    <div>
      {darkModeOn ? darkMode : lightMode}
      <button onClick={handleClick}>Click here</button>
    </div>
  );
}
