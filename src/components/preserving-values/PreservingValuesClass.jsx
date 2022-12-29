import { Component } from "react";

class PreservingValuesClass extends Component {
  state = {
    counter: 0,
  };

  componentDidMount() {
    this.valueToPreserve = Math.random();
  }

  showValue = () => {
    alert(this.valueToPreserve);
  };

  increment = () => this.setState(({ counter }) => ({ counter: counter + 1 }));

  render() {
    console.log("PreventRerenderClass rendered");
    return (
      <div>
        <h2>Preserving Values - Class</h2>
        <p>Counter: {this.state.counter}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.showValue}>Show value</button>
      </div>
    );
  }
}

export default PreservingValuesClass;
