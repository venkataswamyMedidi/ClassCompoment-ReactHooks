import { Component } from "react";

class ManagingStateClass extends Component {
  state = {
    counter: 0,
  };

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
        <h2>Managing State - Class</h2>
        <div>Count: {this.state.counter}</div>
        <div>
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
        </div>
      </div>
    );
  }
}

export default ManagingStateClass;
