import React, { useState } from "react";
import counter from "./Counter";

const ClickCount = (props) => {
  const {count, handelAddCount} = props;

  return (
    <div className="text-center w-100">
      <button className="btn btn-success" onClick={handelAddCount}>
        count: {count}
      </button>
    </div>
  );
};

export default counter(ClickCount);
