import { useState, useRef, useEffect } from "react";

const PreserveValuesHooks = props => {
  const valueToPreserve = useRef(null);
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter => counter + 1);

  const showValue = () => {
    alert(valueToPreserve.current);
  };

  useEffect(() => {
    valueToPreserve.current = Math.random();
  }, []);

  return (
    <div>
      <h2>Preserving Values - Hooks</h2>
      <p>Counter: {counter}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={showValue}>Show value</button>
    </div>
  );
};

export default PreserveValuesHooks;
