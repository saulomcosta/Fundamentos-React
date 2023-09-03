import React from "react";

export default (props) => {
  const { numMin, numMax } = props;

  const escolhido = parseInt(Math.random() * (numMax - numMin)) + numMin;

  console.log(props);

  return (
    <>
      <h1>Valore Aleatórios</h1>
      <p>
        <strong>Valor Mínimo: </strong> {numMin}
      </p>
      <p>
        <strong>Valor Máximo: </strong> {numMax}
      </p>
      <p>
        <strong>Valor Escolhido: </strong> {escolhido}
      </p>
    </>
  );
};
