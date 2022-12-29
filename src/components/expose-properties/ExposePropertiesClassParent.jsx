import { Component, createRef } from "react";
import ExposePropertiesClassChild from "./ExposePropertiessClassChild";

class ExposePropertiesClassParent extends Component {
  constructor(props) {
    super(props);
    this.childRef = createRef();
  }

  showValues = () => {
    const counter = this.childRef.current.state.counter;
    const multipliedCounter = this.childRef.current.getMultipliedCounter();
    alert(`
      counter: ${counter}
      multipliedCounter: ${multipliedCounter}
    `);
  };

  render() {
    return (
      <div>
        <h2>Expose Properties - Class</h2>
        <button onClick={this.showValues}>Show child values</button>
        <ExposePropertiesClassChild ref={this.childRef} />
      </div>
    );
  }
}

export default ExposePropertiesClassParent;
