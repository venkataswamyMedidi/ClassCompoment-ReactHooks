import "./App.css";
import ManagingStateClass from "./components/managing-state/ManagingStateClass.jsx";
import ManagingStateHooks from "./components/managing-state/ManagingStateHooks.jsx";
import StateChangesClass from "./components/state-changes/StateChangesClass.jsx";
import StateChangesHooks from "./components/state-changes/StateChangesHooks.jsx";
import FetchingDataClass from "./components/fetching-data/FetchingDataClass.jsx";
import FetchingDataHooks from "./components/fetching-data/FetchingDataHooks.jsx";
import CleanupClass from "./components/cleanup/CleanupClass.jsx";
import CleanupHooks from "./components/cleanup/CleanupHooks.jsx";

import PreventRerenderClassExample from "./components/prevent-rerender/PreventRerenderClassExample.jsx";
import PreventRerenderHooksExample from "./components/prevent-rerender/PreventRerenderHooksExample.jsx";

import ContextApiClassProvider from "./components/context-api/ContextApiClassProvider.jsx";
import ContextApiHooksProvider from "./components/context-api/ContextApiHooksProvider.jsx";

import PreservingValuesClass from "./components/preserving-values/PreservingValuesClass.jsx";
import PreservingValuesHooks from "./components/preserving-values/PreservingValuesHooks.jsx";

import ExposePropertiesClassParent from "./components/expose-properties/ExposePropertiesClassParent.jsx";
import ExposePropertiesHooksParent from "./components/expose-properties/ExposePropertiesHooksParent.jsx";

function App() {
  return (
    <div className="App">
      <div className="section">
        <ManagingStateClass />
        <ManagingStateHooks />
      </div>
      <div className="section">
        <StateChangesClass />
        <StateChangesHooks />
      </div>
      <div className="section">
        <FetchingDataClass />
        <FetchingDataHooks />
      </div>
      <div className="section">
        <CleanupClass />
        <CleanupHooks />
      </div>
      <div className="section">
        <PreventRerenderClassExample />
        <PreventRerenderHooksExample />
      </div>
      <div className="section">
        <ContextApiClassProvider />
        <ContextApiHooksProvider />
      </div>
      <div className="section">
        <PreservingValuesClass />
        <PreservingValuesHooks />
      </div>
      <div className="section">
        <ExposePropertiesClassParent />
        <ExposePropertiesHooksParent />
      </div>
    </div>
  );
}

export default App;
