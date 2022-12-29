import { useState } from "react";
import ContextApiHooksConsumer from "./ContextApiHooksConsumer.jsx";
import { UserContext, UserActionsContext } from "./userContext.js";

const ContextApiHooksProvider = () => {
  const [user, setUser] = useState({
    name: "Thomas Hooks",
  });
  return (
    <UserContext.Provider value={user}>
      <UserActionsContext.Provider value={setUser}>
        <ContextApiHooksConsumer />
      </UserActionsContext.Provider>
    </UserContext.Provider>
  );
};

export default ContextApiHooksProvider;
