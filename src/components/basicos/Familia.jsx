import React, { cloneElement } from "react";

import FamiliaMembro from "./FamiliaMembro";

export default (props) => {
  console.log(typeof props.children);
  return (
    <div>
      {props.children.map((child, idx) => {
        return cloneElement(child, { ...props, key: idx });
      })}
    </div>
  );
};
