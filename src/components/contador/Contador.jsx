import React, { Component } from "react";

import "./Contador.css";

import DisplayContador from "./DisplayContador";
import FormContador from "./FormContador";
import BotoesContador from "./BotoesContador";

class Contador extends Component {
  state = {
    numero: this.props.numeroInicial || 0,
    passo: this.props.passoInicial || 5,
  };

  inc = () => {
    this.setState({
      numero: this.state.numero + this.state.passo,
    });
  };

  dec = () => {
    this.setState({
      numero: this.state.numero - this.state.passo,
    });
  };

  setPasso = (novoPasso) => {
    this.setState({
      passo: novoPasso,
    });
  };
  render() {
    return (
      <div className="Contador">
        {/*Comunicação Direta*/}
        <DisplayContador setNumero={this.state.numero} />
        {/*Comunicação Direta passandpo o passo e Indireta enviando o evento*/}
        <FormContador passo={this.state.passo} setPasso={this.setPasso} />
        {/*(Comunicação Direta) -> Passando o evento (onInc/onDec) para o filho, 
            q ao ser acionado executa o Inc ou Dec*/}
        <BotoesContador onInc={this.inc} onDec={this.dec} />
      </div>
    );
  }
}

export default Contador;
