import { useState, useEffect } from "react";

const StateChangesHooks = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter => counter + 1);
  const decrement = () => setCounter(counter => counter - 1);

  useEffect(() => {
    console.log("Current counter", counter);
    localStorage.setItem("counter", counter);
  }, [counter]);

  return (
    <div>
      <h2>Reacting To State Changes - Hooks</h2>
      <div>Count: {counter}</div>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
};

export default StateChangesHooks;
