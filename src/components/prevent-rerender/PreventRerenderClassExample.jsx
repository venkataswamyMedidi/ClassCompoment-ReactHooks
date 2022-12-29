import { Component } from "react";
import PreventRerenderClass from "./PreventRerenderClass.jsx";

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const fruits = ["banana", "orange", "apple", "kiwi", "mango"];

class PreventRerenderExample extends Component {
  state = {
    fruit: null,
    counter: 0,
  };

  pickFruit = () => {
    const fruitIdx = randomInteger(0, fruits.length - 1);
    const nextFruit = fruits[fruitIdx];

    this.setState({
      fruit: nextFruit,
    });
  };

  componentDidMount() {
    this.pickFruit();
  }

  render() {
    return (
      <div>
        <h2>Prevent Rerender Class Example</h2>
        <h3>
          Current fruit: {this.state.fruit} | counter: {this.state.counter}
        </h3>

        <button onClick={this.pickFruit}>Pick a fruit</button>
        <button
          onClick={() =>
            this.setState(({ counter }) => ({
              counter: counter + 1,
            }))
          }
        >
          Increment
        </button>
        <button
          onClick={() =>
            this.setState(({ counter }) => ({ counter: counter - 1 }))
          }
        >
          Decrement
        </button>
        <div className="section">
          <PreventRerenderClass fruit={this.state.fruit} />
        </div>
      </div>
    );
  }
}

export default PreventRerenderExample;
