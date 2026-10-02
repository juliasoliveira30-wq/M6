// Exercício 7 – Bloco Finally
function safeParse(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (erro) {
    if (erro instanceof SyntaxError) {
      return null;
    }
    throw erro;
  } finally {
    console.log("Parse attempt finished");
  }
}

console.log("Cenário sem erro:");
console.log(safeParse('{"nome": "Leandromeda"}'));

console.log("Cenário com erro:");
console.log(safeParse('texto inválido'));
