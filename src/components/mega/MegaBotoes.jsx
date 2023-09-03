import React from "react";
export default (props) => {
  return (
    <div>
      <button onClick={(_) => props.setNumeros(props.setQtde)}>
        Gerar Numeros
      </button>
    </div>
  );
};
