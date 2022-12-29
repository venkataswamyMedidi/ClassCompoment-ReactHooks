import { useState } from "react";

const ManagingStateHooks = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter => counter + 1);
  const decrement = () => setCounter(counter => counter - 1);

  return (
    <div>
      <h2>Managing State - Hooks</h2>
      <div>Count: {counter}</div>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
};

export default ManagingStateHooks;
