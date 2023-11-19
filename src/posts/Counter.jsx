import React, { useState } from "react";

const counter = (MainComponent) => {
  const NewComponent = () => {
    const [count, setCount] = useState(0);

    const handelAddCount = () => {
      setCount(count + 1);
    };
    return <MainComponent count={count} handelAddCount={handelAddCount} />;
  };
  return NewComponent;
};

export default counter;
