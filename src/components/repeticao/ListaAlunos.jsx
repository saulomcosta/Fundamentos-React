import React from "react";

import alunos from "../../data/alunos";

export default (props) => {
  console.log(alunos);

  {
    /*}
  const li1 = (
    <li>
      {alunos[0].id}) {alunos[0].nome} -> {alunos[0].nota}
    </li>
  );
  */
  }

  const listaAlunos = alunos.map((aluno) => {
    return (
      <li key={aluno.id}>
        {aluno.id}) {aluno.nome} -> {aluno.nota}
      </li>
    );
  });

  return (
    <div>
      <ul style={{ listStyle: "none" }}>{listaAlunos}</ul>
    </div>
  );
};
