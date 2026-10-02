// Exercício 2 – Erros sem Exceções?
function erroSemExcecao() {
  // Erro de lógica: o código roda sem throw, mas o resultado está errado.
  function calcularMedia(a, b) {
    return a + b / 2; // BUG: faltou parênteses, deveria ser (a + b) / 2
  }
  console.log("Média de 10 e 20 (esperado 15):", calcularMedia(10, 20)); // 20
  console.log("Outro exemplo: '5' + 3 =", "5" + 3, "(concatenação em vez de soma, sem nenhuma exceção)");
  console.log("Explicação: nenhuma exceção foi lançada, mas o resultado está errado (erro de lógica / coerção de tipos).");
}
erroSemExcecao();
