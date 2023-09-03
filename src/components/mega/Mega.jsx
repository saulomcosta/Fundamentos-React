import React, { useState } from "react";

import "./Mega.css";
import MegaDisplay from "./MegaDisplay";
import MegaForm from "./MegaForm";
import MegaBotoes from "./MegaBotoes";

export default (props) => {
  const [qtde, setQtde] = useState(props.qtde || 6);
  const numerosIniciais = gerarNumeros(qtde);
  const [numeros, setNumero] = useState(numerosIniciais);

  function gerarNumerosNaoContidos(min, max, array) {
    const aleatorio =
      parseInt(Math.floor(Math.random() * (max + 1 - min))) + min;
    return array.includes(aleatorio)
      ? gerarNumerosNaoContidos(min, max, array)
      : aleatorio;
  }

  function gerarNumeros(qtde) {
    const numeros = Array(qtde)
      .fill(0)
      .reduce((nuns) => {
        const novoNumero = gerarNumerosNaoContidos(1, 60, nuns);
        return [...nuns, novoNumero];
      }, [])
      .sort((n1, n2) => n1 - n2);

    return numeros;
  }

  function obterNovosValores(novaQtde, novoNum) {
    setQtde(novaQtde);

    setNumero(gerarNumeros(novoNum));
  }

  function obterNovoNumero(novoNum) {
    setNumero(gerarNumeros(novoNum));
  }

  return (
    <div className="Mega">
      <MegaDisplay setNumeros={numeros} />

      <MegaForm
        numMin={6}
        numMax={15}
        setQtde={qtde}
        setValores={obterNovosValores}
      />

      <MegaBotoes setQtde={qtde} setNumeros={obterNovoNumero} />
    </div>
  );
};
