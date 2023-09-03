import React from "react";

export default (props) => {
  return (
    <div>
      <h2>Contador</h2>
      <h3>
        <strong>{props.setNumero}</strong>
      </h3>
    </div>
  );
};
