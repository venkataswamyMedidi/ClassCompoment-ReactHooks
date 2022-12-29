import { useState, useEffect } from "react";

const CleanupHooks = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const updateWindowSize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", updateWindowSize, {
      passive: true,
    });

    return () => {
      window.removeEventListener("resize", this.updateWindowSize, {
        passive: true,
      });
    };
  }, []);

  return (
    <div>
      <h2>Cleanup - Hooks</h2>
      <div>
        Window Size: {width} x {height}
      </div>
    </div>
  );
};

export default CleanupHooks;
