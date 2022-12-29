import { useState, useEffect } from "react";
import PreventRerenderHooks from "./PreventRerenderHooks.jsx";

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const fruits = ["banana", "orange", "apple", "kiwi", "mango"];

const PreventRerenderExample = () => {
  const [fruit, setFruit] = useState(null);
  const [counter, setCounter] = useState(0);

  const pickFruit = () => {
    const fruitIdx = randomInteger(0, fruits.length - 1);
    const nextFruit = fruits[fruitIdx];
    setFruit(nextFruit);
  };

  useEffect(() => {
    pickFruit();
  }, []);

  return (
    <div>
      <h2>Prevent Rerender Hooks Example</h2>
      <h3>
        Current fruit: {fruit} | counter: {counter}
      </h3>

      <button onClick={pickFruit}>Pick a fruit</button>
      <button onClick={() => setCounter(counter => counter + 1)}>
        Increment
      </button>
      <button onClick={() => setCounter(counter => counter - 1)}>
        Decrement
      </button>
      <div className="section">
        <PreventRerenderHooks fruit={fruit} />
      </div>
    </div>
  );
};

export default PreventRerenderExample;
