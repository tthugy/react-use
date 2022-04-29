import React from "react";
import { useEffect, useState } from "react";

const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (event) => {
      const {
        target: { value },
      } = event;
      setValue(value);
    };
  
    return {value, onChange};
};

function UseInput() {

  const onChange = (event) => {
      
  }
  const name = useInput("Mr.");
  return (
    <div>
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
}

export default UseInput;
