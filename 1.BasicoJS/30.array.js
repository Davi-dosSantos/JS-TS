const alunos = []

alunos.unshift("lulu"); // add no começo
alunos.pop(); // remove do final 
const removido = alunos.pop(); // remove
alunos.shift(); //remove do começo

delete alunos[1]; //remove o elemendo sem mover os demais , o slot dele fica vazio 

console.log(alunos.slice(0, -2));// mostra todos menos os dois ultimos
console.log(alunos.slice(0, 3));// mostra os 3 primeiros elementos

console.log(typeof alunos);
console.log(alunos instanceof Array); //verifica se alunos é um array 

