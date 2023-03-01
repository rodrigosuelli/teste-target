function verificarPertenceFibonacci(numeroDesejado) {
  let n1 = 0;
  let n2 = 1;
  let proximoItem;

  while (n1 <= numeroDesejado) {
    if (n1 === numeroDesejado) {
      console.log(`${numeroDesejado} pertence a sequencia`);
      return;
    }

    proximoItem = n1 + n2;
    n1 = n2;
    n2 = proximoItem;
  }

  console.log(`${numeroDesejado} nao pertence a sequencia`);
}

// Insira o numero desejado aqui
verificarPertenceFibonacci(13);
verificarPertenceFibonacci(1);
