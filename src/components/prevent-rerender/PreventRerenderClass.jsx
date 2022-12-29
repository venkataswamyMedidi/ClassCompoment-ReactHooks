import { Component } from "react";

class PreventRerenderClass extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.fruit !== nextProps.fruit;
  }

  render() {
    console.log("PreventRerenderClass rendered");
    return (
      <div>
        <p>Fruit: {this.props.fruit}</p>
      </div>
    );
  }
}

export default PreventRerenderClass;
