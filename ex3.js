const dados = require('./dados.json');

function encontrarMenorFaturamentoDiarioDoMes() {
  let menorValor = 0;
  let i = 0;

  for (const dia of dados) {
    // Pular dia sem faturamento
    if (dia.valor === 0) {
      continue;
    }

    if (i === 0 || dia.valor < menorValor) {
      menorValor = dia.valor;
    }

    i++;
  }

  console.log(`Menor valor de faturamento diario do mes: ${menorValor}`);
}

function encontrarMaiorFaturamentoDiarioDoMes() {
  let maiorValor = 0;
  let i = 0;

  for (const dia of dados) {
    // Pular dia sem faturamento
    if (dia.valor === 0) {
      continue;
    }

    if (i === 0 || dia.valor > maiorValor) {
      maiorValor = dia.valor;
    }

    i++;
  }

  console.log(`Maior valor de faturamento diario do mes: ${maiorValor}`);
}

function encontrarQtdDiasFatSuperiorMediaMensal() {
  let totalDiasMes = dados.length;
  let soma = 0;

  for (const dia of dados) {
    if (dia.valor === 0) {
      totalDiasMes = totalDiasMes - 1;
      continue;
    }

    soma = soma + dia.valor;
  }

  const mediaMensal = soma / totalDiasMes;

  let qtdDiasFatSupMediaMensal = 0;
  for (const dia of dados) {
    if (dia.valor === 0) {
      continue;
    }

    if (dia.valor > mediaMensal) {
      qtdDiasFatSupMediaMensal++;
    }
  }

  console.log(
    `Número de dias no mês em que o valor de faturamento diário foi superior à média mensal: ${qtdDiasFatSupMediaMensal}`
  );
}

encontrarMenorFaturamentoDiarioDoMes();
encontrarMaiorFaturamentoDiarioDoMes();
encontrarQtdDiasFatSuperiorMediaMensal();
