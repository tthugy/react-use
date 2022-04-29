import React from "react";
import { useEffect, useState } from "react";

function UseState() {
  
  const [item, setItem] = useState(1);
  const increase = () => setItem((prev) => prev + 1);
  const decrease = () => setItem((prev) => prev - 1);

  return (
    <div>
      <h1>Hello State {item}</h1>
      <button onClick={increase}>INCREASE</button>
      <button onClick={decrease}>DECREASE</button>
    </div>
  );
}

export default UseState;
