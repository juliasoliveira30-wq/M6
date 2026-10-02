// Exercício 9 – Depuração com console.log
function soma(a, b) {
  console.log("Antes da soma -> a:", a, "| typeof a:", typeof a);
  console.log("Antes da soma -> b:", b, "| typeof b:", typeof b);
  const resultado = a + b;
  console.log("Depois da soma -> resultado:", resultado);
  return resultado;
}
console.log(soma(2, undefined));

// CAUSA: o segundo argumento é undefined. Em JavaScript, 2 + undefined converte
// undefined para NaN (Not a Number) e qualquer operação com NaN resulta em NaN.
// Solução: validar os parâmetros ou usar valor padrão, ex.: function soma(a, b = 0).
