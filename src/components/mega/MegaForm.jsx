import React, { useState } from "react";

export default (props) => {
  return (
    <div>
      <label>Quantidade de Numeros: </label>
      <input
        min={props.numMin}
        max={props.numMax}
        type="number"
        value={props.setQtde}
        onChange={(e) => {
          props.setValores(+e.target.value, +e.target.value);
        }}
      />
    </div>
  );
};
