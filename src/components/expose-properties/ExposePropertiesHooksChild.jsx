import { useState, useImperativeHandle, forwardRef } from "react";

const ExposePropertiesHooksChild = (props, ref) => {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter => counter + 1);

  useImperativeHandle(ref, () => {
    return {
      counter,
      getMultipliedCounter: () => counter * 2,
    };
  });

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default forwardRef(ExposePropertiesHooksChild);
