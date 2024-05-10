import React from "react";
import "./App.css";

const App = () => {
  const [visible, setVisible] = React.useState("hidden");
  const navVisiblity = () => {
    if (visible === "hidden") {
      setVisible("visible");
    } else {
      setVisible("hidden");
    }
  };
  return (
    <div>
      <nav className={visible} >
      <div className="mainNav">
      <button onClick={navVisiblity}>x</button>
        <ul className="navbar">
          <li>Home</li>
          <li>Services</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      </nav>
      <button onClick={navVisiblity}>Nav</button>
    </div>
  );
};

export default App;
