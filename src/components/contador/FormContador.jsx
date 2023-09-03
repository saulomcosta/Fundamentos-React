import React from "react";

export default (props) => {
  return (
    <div>
      <div>
        <label htmlFor="passoInput">Passo:</label>
        {/*Comunicação Direta para receber o (value={props.setPasso}))
    Comunicação Indireta é recebido um evento e o filho envia 
    os dados requeridos pelo pai (onChange={(e) => props.setPasso(+e.target.value))*/}
        <input
          id="passoInput"
          type="number"
          value={props.passo}
          onChange={(e) => props.setPasso(+e.target.value)}
        />
      </div>
    </div>
  );
};
