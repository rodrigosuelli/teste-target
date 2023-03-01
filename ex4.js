const dados = [
  {
    nome: 'SP',
    valor: 67836.43,
  },
  {
    nome: 'RJ',
    valor: 36678.66,
  },
  {
    nome: 'MG',
    valor: 29229.88,
  },
  {
    nome: 'ES',
    valor: 27165.48,
  },
  {
    nome: 'Outros',
    valor: 19849.53,
  },
];

let valorFaturamentoMensal = 0;
for (const estado of dados) {
  valorFaturamentoMensal = valorFaturamentoMensal + estado.valor;
}

for (const estado of dados) {
  const percentualRepresentacao = (estado.valor / valorFaturamentoMensal) * 100;
  console.log(
    `${
      estado.nome
    } -> Percentual de Representacao Aproximado: ${percentualRepresentacao.toFixed(
      2
    )}%`
  );
}
