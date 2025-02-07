function checkCashRegister(price, cash, cid) {
  const valoresMoeda = new Map([
    ['PENNY', 0.01],
    ['NICKEL', 0.05],
    ['DIME', 0.1],
    ['QUARTER', 0.25],
    ['ONE', 1],
    ['FIVE', 5],
    ['TEN', 10],
    ['TWENTY', 20],
    ['ONE HUNDRED', 100],
  ]);

  let trocoTotal = cash - price;
  let totalCaixa = cid.reduce((total, [, totalDisponivel]) => total + totalDisponivel, 0);

  // Se não há dinheiro suficiente no caixa
  if (totalCaixa < trocoTotal) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  // Se o caixa tem exatamente o valor do troco, fecha o caixa
  if (totalCaixa === trocoTotal) {
    return { status: "CLOSED", change: cid };
  }

  const troco = [];

  // Percorre as moedas do maior para o menor valor
  for (let i = cid.length - 1; i >= 0; i--) {
    const [tipoMoeda, totalDisponivel] = cid[i];
    const valorUnitario = valoresMoeda.get(tipoMoeda);

    let saldoDisponivel = totalDisponivel;
    let valorDevolvido = 0;

    // Retira o máximo possível da unidade sem ultrapassar o troco necessário
    while (trocoTotal >= valorUnitario && saldoDisponivel > 0) {
      trocoTotal = Number((trocoTotal - valorUnitario).toFixed(2)); // Arredonda para 2 casas decimais
      saldoDisponivel = Number((saldoDisponivel - valorUnitario).toFixed(2)); // Arredonda para 2 casas decimais
      valorDevolvido += valorUnitario;
    }

    // Se alguma quantia foi retirada dessa unidade, adiciona ao troco
    if (valorDevolvido > 0) {
      troco.push([tipoMoeda, valorDevolvido]);
    }
  }

  // Se ainda falta devolver troco, significa que não há troco suficiente
  if (trocoTotal > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return { status: "OPEN", change: troco };
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);