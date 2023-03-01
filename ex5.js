function inverterString(texto) {
  let textoInvertidoArray = texto.split('');

  let i = 0;
  for (let j = textoInvertidoArray.length - 1; j >= 0; j--) {
    textoInvertidoArray[i] = texto[j];
    i++;
  }

  const textoInvertidoString = textoInvertidoArray.join('');

  console.log(textoInvertidoString);
}

// Insira o texto desejado aqui
inverterString('teste');
