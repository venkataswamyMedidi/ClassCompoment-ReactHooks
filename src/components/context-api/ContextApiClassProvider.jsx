import { Component, createContext } from "react";
import ContextApiClassConsumer from "./ContextApiClassConsumer.jsx";
import { UserContext, UserActionsContext } from "./userContext.js";

class ContextApiHooksProvider extends Component {
  state = {
    user: {
      name: "Thomas Class",
    },
  };

  setUser = user => this.setState({ user });

  render() {
    return (
      <UserContext.Provider value={this.state.user}>
        <UserActionsContext.Provider value={this.setUser}>
          <ContextApiClassConsumer />
        </UserActionsContext.Provider>
      </UserContext.Provider>
    );
  }
}

export default ContextApiHooksProvider;
