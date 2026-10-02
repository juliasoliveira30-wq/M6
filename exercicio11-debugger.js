// Exercício 11 – Uso do `debugger`
// Para testar: abra o arquivo exercicio11-debugger.html no navegador,
// abra o DevTools (F12) e recarregue a página (F5).

function testeDebug(x) {
  const y = x * 2;
  debugger; // com o DevTools aberto, a execução pausa aqui
  return y;
}

console.log("Resultado:", testeDebug(5));

console.log("Relato:");
console.log("Ao recarregar a página com as DevTools abertas, a execução parou na linha do debugger.");
console.log("Pude observar os valores de x e y no painel de depuração e confirmei que o código continuou normalmente após prosseguir.");
