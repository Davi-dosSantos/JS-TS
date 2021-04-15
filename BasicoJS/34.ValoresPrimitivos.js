/*Primitivos (imutáveis) - string, number, boolean, undefined, null(bigint, symbol) -> Valores copiados

Referência (mutável) - array, obeject, function - passados por referencia
*/

let a = [11, 2, 3];
let b = [...a] /// dessa forma b copia a, ao em vez de passar a apontar pro mesmo lugar na memoria
let c = b; // c passa a apontar para o mesmo lugar que b

console.log(a, b, c);

a.push(4);
console.log(a, b, c);

b.pop();
console.log(a, b, c);

a.push('luiz');
console.log(a, b, c);

//Objetos funcionam da mesma forma 
const a = {
    nome: 'dada'
}

const b = a; // dessa forma b passa a referenciar a 
const b = { ...a } /// spread : b copia a e se torna um objeto independente