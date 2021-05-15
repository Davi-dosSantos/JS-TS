/*
Pbject.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
...(spread)

//já vimos
Object.freeze(congela o objeto)
Object.defineProperties(define várias propriedades)
Object.defineProperty(define uma propriedade)
*/
const produto = { nome: 'Produto', preco: 1.8 };
Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,
    value: 'qualquer outra coisa'
})
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))
//const caneca = Object.assign([], produto, { material: ' porcelana' });
//const caneca = {...produto, material: 'porcelana'};
// Object.freeze(caneca);
// outraCoisa = 'Luiz Otávio';
// caneca.preco = 2.5;
//produto.nome = 'Luiz Otavio';
produto.nome = 'Outra coisa'
console.log(produto)
// console.log(caneca)
console.log(Object.keys(produto))
console.log(Object.values(produto))
console.log(Object.entries(produto))

for (let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor)//ta desestruturando ja no for
}