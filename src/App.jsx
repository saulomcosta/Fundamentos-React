import React from "react";
import { createRoot } from "react-dom/client";
import "./App.css";

import Card from "./components/layout/Card";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragment";
import NumeroAleatorio from "./components/basicos/NumeroAleatorio";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProduto from "./components/repeticao/TabelaProduto";
import ParOrImpar from "./components/condicional/ParOrImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import UsuarioInfoIfElse from "./components/condicional/UsuarioInfoIfElse";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Input from "./components/formulario/Input";
import Contador from "./components/contador/Contador";
import Mega from "./components/mega/Mega";

export default (_) => (
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">
      <Card titulo="#15 - Desafio Mega" color="#A2D9CE">
        <Mega qtde={6}/>
      </Card>

      <Card titulo="#14 - Contador" color="#191970">
        <Contador numeroInicial={104} />
      </Card>

      <Card
        titulo="#13 - Componentes Controlados e Não Controlados (Input)"
        color="#6495ED"
      >
        <Input />
      </Card>

      <Card titulo="#12 - Comunicação Indireta" color="#FFBF00">
        <IndiretaPai />
      </Card>

      <Card titulo="#11 - Comunicação Direta" color="#DAF7A6">
        <DiretaPai />
      </Card>

      <Card titulo="#10 - Renderização Condicional - IF/ELSE" color="#C70039">
        <UsuarioInfoIfElse usuario={{ nome: "Saulo Costa" }} />
      </Card>

      <Card titulo="#9 - Renderização Condicional - IF" color="#FFC300">
        <UsuarioInfo usuario={{ nome: "Saulo Costa" }} />
        <UsuarioInfo usuario={{ email: "Saulo.Costa@" }} />
      </Card>

      <Card titulo="#8 - Renderização Condicional - Ternário" color="#FFA07A">
        <ParOrImpar valor={9} />
      </Card>

      <Card titulo="#7 - Desafio Repetição" color="#34495E">
        <TabelaProduto />
      </Card>

      <Card titulo="#6 - Repetição" color="#FF5733">
        <ListaAlunos />
      </Card>

      <Card titulo="#5 - Componente com Filhos" color="#ffd966">
        <Familia sobrenome="Silva">
          <FamiliaMembro nome="Pedro" />
          <FamiliaMembro nome="Saulo" />
          <FamiliaMembro nome="Gabriel" />
        </Familia>
      </Card>

      <Card titulo="#4 - Desafo Aleatório" color="#d69cbc">
        <NumeroAleatorio numMin={1} numMax={60} />
      </Card>

      <Card titulo="#3 - Eliminar <DIV> e Usar Fragmento" color="#191970">
        <Fragmento />
      </Card>

      <Card titulo="#2 - Passagem de Parametros" color="#ffb6c1">
        <ComParametro titulo="Situação do Aluno" subtitulo="Pedro" nota={9.3} />
        <ComParametro titulo="Situação do Aluno" subtitulo="Maria" nota={8.8} />
      </Card>

      <Card titulo="#1 - Primeiro Exercício" color="#8f83d8">
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>
);
