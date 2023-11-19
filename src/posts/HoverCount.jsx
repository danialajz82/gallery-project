import React, { useState } from "react";
import counter from "./Counter";

const HoverCount = (props) => {
  const {count, handelAddCount} = props;
  return (
    <div className="text-center w-100">
      <button className="btn btn-info" onMouseEnter={handelAddCount}>
        count:{count}
      </button>
    </div>
  );
};

export default counter(HoverCount);
