function gerarNumerosNaoContidos(min, max, array) {
  const aleatorio = parseInt(Math.floor(Math.random() * (max + 1 - min))) + min;
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

console.log(gerarNumeros(7));
