import { useContext } from "react";
import { UserContext, UserActionsContext } from "./userContext.js";

const ContextApiHooksConsumer = () => {
  const user = useContext(UserContext);
  const setUser = useContext(UserActionsContext);
  return (
    <div>
      <h2>ContextApiHooks Consumer</h2>
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
  );
};

export default ContextApiHooksConsumer;
