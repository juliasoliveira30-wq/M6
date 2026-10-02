// Exercício 4 – Tipos de Erros em JS
function tiposDeErros() {
  console.log("ReferenceError: ocorre ao usar uma variável/função que não foi declarada (ou fora do escopo). Ex.: console.log(naoExiste);");
  console.log("TypeError: ocorre ao usar um valor de tipo inadequado para a operação. Ex.: null.propriedade ou chamar como função algo que não é função.");
  console.log("SyntaxError: ocorre quando o código (ou um JSON) está escrito de forma inválida, ex.: chave não fechada. Em código normal é detectado antes da execução.");
}
tiposDeErros();

// Demonstrações:
try { console.log(naoExiste); } catch (e) { console.log(e.name + ":", e.message); }
try { null.propriedade; } catch (e) { console.log(e.name + ":", e.message); }
try { JSON.parse("{invalido"); } catch (e) { console.log(e.name + ":", e.message); }
try { eval("let = ;"); } catch (e) { console.log(e.name + ":", e.message); }
