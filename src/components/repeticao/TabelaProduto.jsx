import React from "react";

import "./TabelaProduto.css";
import produtos from "../../data/produtos";

export default (props) => {
  function getLinhas() {
    return produtos.map((prd, i) => {
      return (
        <tr key={prd.id} className={i % 2 === 0 ? "Par" : "Impar"}>
          <td className="AlingCenter">{prd.id}</td>
          <td className="AlingLeft">{prd.nmProduto}</td>
          <td className="AlingRight">
            R$ {prd.vlProduto.toFixed(2).replace(".", ",")}
          </td>
        </tr>
      );
    });
  }
  return (
    <div className="TabelaProduto">
      <div>Tabela de Produtos</div>
      <div>
        <table>
          <thead>
            <tr>
              <th className="AlingCenter">
                <strong>Código</strong>
              </th>
              <th className="AlingCenter">
                <strong>Nome Produto</strong>
              </th>
              <th className="AlingCenter">
                <strong>Preço</strong>
              </th>
            </tr>
          </thead>
          <tbody>{getLinhas()}</tbody>
        </table>
      </div>
    </div>
  );
};
