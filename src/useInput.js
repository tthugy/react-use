import React from "react";
import { useEffect, useState } from "react";

const Input = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (event) => {
      const {
        target: { value },
      } = event;
  
      let updateFlag = true;

      if (typeof validator === "function") {
        updateFlag = validator(value);
      }
      updateFlag ? setValue(value) : alert("Can't enter !");
    };
  
    return { value, onChange };
  };

function UseInput() {
  const chkWord = (value) => value.length < 10 && !value.includes("@");
  const name = Input("", chkWord);
  return (
    <div>
      <h1>Hello Input</h1>
      <input placeholder={"Write Something"}
      value={name.value}
      onChange={name.onChange} />
    </div>
  );
}

export default UseInput;
