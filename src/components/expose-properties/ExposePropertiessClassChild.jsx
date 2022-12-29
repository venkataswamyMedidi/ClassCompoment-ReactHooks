import { Component } from "react";

class ExposePropertiesClassChild extends Component {
  state = {
    counter: 0,
  };

  getMultipliedCounter = () => {
    return this.state.counter * 2;
  };

  increment = () => this.setState(({ counter }) => ({ counter: counter + 1 }));

  render() {
    return (
      <div>
        <p>Counter: {this.state.counter}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default ExposePropertiesClassChild;
