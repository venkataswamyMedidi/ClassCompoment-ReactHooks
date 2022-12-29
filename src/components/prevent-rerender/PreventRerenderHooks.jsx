import { memo } from "react";

const PreventRerenderHooks = props => {
  console.log("PreventRerenderHooks rendered");
  return (
    <div>
      <p>Fruit: {props.fruit}</p>
    </div>
  );
};

export default memo(PreventRerenderHooks, (prevProps, nextProps) => {
  return prevProps.fruit !== nextProps.fruit;
});
