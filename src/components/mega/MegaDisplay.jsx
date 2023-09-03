import React from "react";

export default (props) => {
  return (
    <div>
      <h2>Mega-Sena</h2>
      <h3>{props.setNumeros.join(" ")}</h3>
    </div>
  );
};
