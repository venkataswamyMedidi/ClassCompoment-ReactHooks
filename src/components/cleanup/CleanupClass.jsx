import { Component } from "react";

class CleanupClass extends Component {
  state = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateWindowSize, {
      passive: true,
    });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowSize, {
      passive: true,
    });
  }

  updateWindowSize = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  render() {
    return (
      <div>
        <h2>Cleanup - Class</h2>
        <div>
          Window Size: {this.state.width} x {this.state.height}
        </div>
      </div>
    );
  }
}

export default CleanupClass;
