import React, { useState } from "react";

const Counter1 = () => {
  const [count, setCount] = useState(0);

  const handelIncreastCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="text-center my-3">
      <button className="btn btn-success" onClick={handelIncreastCount}> count:{count}</button>
    </div>
  );
};

export default Counter1;