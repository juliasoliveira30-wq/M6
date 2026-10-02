// Exercício 3 – Confiabilidade Limitada
function confiabilidadeLimitada() {
  console.log("Não se deve confiar plenamente nos dados de entrada quando:");
  console.log("- vêm de formulários, prompts ou campos digitados pelo usuário;");
  console.log("- vêm de APIs, arquivos, URLs, cookies/localStorage ou qualquer fonte externa;");
  console.log("- podem estar vazios, com tipo errado, fora do intervalo ou até maliciosos.");
}
confiabilidadeLimitada();

// Como eu trataria validações simples (ex.: "número esperado, string recebida"):
function lerNumero(valor) {
  const numero = Number(valor);
  if (valor === "" || valor === null || Number.isNaN(numero)) {
    throw new TypeError(`Esperava um número, mas recebi: "${valor}"`);
  }
  return numero;
}

try {
  console.log(lerNumero("42"));   // 42
  console.log(lerNumero("abc"));  // lança TypeError
} catch (e) {
  console.log("Entrada inválida ->", e.message);
}
