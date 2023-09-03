import React from "react";

export default (props) => {
  const isPar = props.valor % 2 === 0;
  return <>
            {isPar ? 
                <span>Par</span> : 
                <span>Impar</span>
            }
        </>;
};
