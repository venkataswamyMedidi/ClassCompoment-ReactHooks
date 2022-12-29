import { Component } from "react";
import { UserContext, UserActionsContext } from "./userContext.js";

class ContextApiClassConsumer extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {user => (
          <UserActionsContext.Consumer>
            {setUser => (
              <div>
                <h2>ContextApiClass Consumer</h2>
                <input
                  type="text"
                  value={user.name}
                  onChange={e =>
                    setUser({
                      name: e.target.value,
                    })
                  }
                />
              </div>
            )}
          </UserActionsContext.Consumer>
        )}
      </UserContext.Consumer>
    );
  }
}

export default ContextApiClassConsumer;
