import React from "react";

export default function ComParametro(props) {
  const status = props.nota >= 9 ? "Aprovado" : "Recuperação";

  console.log(props);

  return (
    <div>
      <h2>{props.titulo}</h2>

      <p>
        <strong>{props.subtitulo} </strong>
        tem nota
        <strong> {props.nota}</strong>
        . Situação do aluno
        <strong> { status }</strong>!
      </p>
    </div>
  );
}
