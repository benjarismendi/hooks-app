import React, { useCallback, useState } from "react";
import { IncrementButton } from "./IncrementButton";

export const HookCallback = () => {
  const [counter, setCounter] = useState(0);

  const increment = useCallback(
    (value) => {
    setCounter((counter) => counter + value);
  }, []);

  return (
    <>
      <h3>HookCallback</h3>
      <hr />

      <h4> Counter: {counter} </h4>
      <IncrementButton increment={increment} />
    </>
  );
};
