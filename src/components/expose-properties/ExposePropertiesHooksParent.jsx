import { useRef } from "react";
import ExposePropertiesHooksChild from "./ExposePropertiesHooksChild";

const ExposePropertiesHooksParent = props => {
  const childRef = useRef(null);

  const showValues = () => {
    const counter = childRef.current.counter;
    const multipliedCounter = childRef.current.getMultipliedCounter();
    alert(`
      counter: ${counter}
      multipliedCounter: ${multipliedCounter}
    `);
  };

  return (
    <div>
      <h2>Expose Properties - Hooks</h2>
      <button onClick={showValues}>Show child values</button>
      <ExposePropertiesHooksChild ref={childRef} />
    </div>
  );
};

export default ExposePropertiesHooksParent;
