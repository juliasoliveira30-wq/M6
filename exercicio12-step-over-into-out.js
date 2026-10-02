// Exercício 12 – Step Over, Step Into e Step Out
function externo(n) {
  return interno(n) + 1;
}
function interno(m) {
  return m * 3;
}
console.log(externo(4)); // 13

// Pausado na linha `return interno(n) + 1;` dentro de externo:
// - Step Over (F10): executa a linha inteira, incluindo a chamada a interno(), sem entrar nela.
//   O depurador vai para a próxima linha de externo.
// - Step Into (F11): entra na função interno() e pausa em `return m * 3;`,
//   permitindo inspecionar seu código linha a linha.
// - Step Out (Shift+F11): estando dentro de interno(), executa o restante dela de uma vez,
//   retorna a externo() e pausa logo após a chamada.
