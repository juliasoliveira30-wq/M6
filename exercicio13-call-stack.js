// Exercício 13 – Call Stack
function externo(n) {
  return interno(n) + 1;
}
function interno(m) {
  return m * 3; // <- execução pausada aqui
}
externo(4);

console.log(`
Call stack no momento em que interno está sendo executado
(topo da pilha em cima):

▶ interno      (m = 4)
  ▶ externo    (n = 4)
    ▶ (anonymous) / script principal
`);
