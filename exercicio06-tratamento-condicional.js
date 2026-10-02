// Exercício 6 – Tratamento Condicional de Exceções
function safeParse(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (erro) {
    if (erro instanceof SyntaxError) {
      return null;
    }
    throw erro; // relança erros inesperados para não "engolir" problemas
  }
}

console.log(safeParse('{"nome": "Leandromeda"}')); // objeto
console.log(safeParse('texto inválido'));          // null (SyntaxError)

try {
  safeParse(Symbol("x")); // JSON.parse não consegue converter Symbol -> TypeError
} catch (e) {
  console.log("Erro inesperado relançado:", e.name);
}
