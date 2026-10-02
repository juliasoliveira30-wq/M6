// Exercício 8 – Lançando Erros Customizados
class InvalidAgeError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidAgeError";
  }
}

function checkAge(age) {
  if (age < 0 || age > 120) {
    throw new InvalidAgeError("Idade fora do intervalo");
  }
  return "Idade válida";
}

for (const idade of [-5, 30, 200]) {
  try {
    console.log(`checkAge(${idade}) ->`, checkAge(idade));
  } catch (e) {
    console.log(`checkAge(${idade}) -> ${e.name}: ${e.message}`);
  }
}
