import React from "react";

import DiretaFilho from "./DiretaFilho";

export default (props) => {
  return (
    <div>
      <DiretaFilho nome="Saulo Costa" idade={49} nerd={false} />
      <DiretaFilho nome="Gabriel Costa" idade={9} nerd={true} />
      <DiretaFilho nome="Daniella Alvares" idade={44} nerd={false} />
    </div>
  );
};
