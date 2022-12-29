import { Component } from "react";

class StateChangesClass extends Component {
  state = {
    counter: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("New counter", this.state.counter);
    localStorage.setItem("counter", this.state.counter);
  }

  increment = () => {
    this.setState(prevState => {
      return {
        counter: prevState.counter + 1,
      };
    });
  };

  decrement = () => {
    this.setState(prevState => {
      return {
        counter: prevState.counter - 1,
      };
    });
  };

  render() {
    return (
      <div>
        <h2>Reacting To State Changes - Class</h2>
        <div>Count: {this.state.counter}</div>
        <div>
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
        </div>
      </div>
    );
  }
}

export default StateChangesClass;
