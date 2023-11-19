import React, { useState } from "react";

const HoverCount = () => {
  const [count, setCount] = useState(0);

  const handelAddCount = () => {
    setCount(count + 1);
  };
  return (
    <div className="text-center w-100">
      <button className="btn btn-info" onMouseEnter={handelAddCount}>
        count: {count}
      </button>
    </div>
  );
};

export default HoverCount;
