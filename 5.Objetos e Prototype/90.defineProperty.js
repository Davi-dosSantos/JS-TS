function Produto(nome, preco, estoque) {
    Object.defineProperty(this, "estoque", {
        enumerable: true, //mostra a chave
        value: estoque, //valor
        writable: false, // pode alterar o valor
        configurable: true //configuravel?
    });
    Object.defineProperties(this, {
        nome: {
            enumerable: true, //mostra a chave
            value: nome, //valor
            writable: true, // pode alterar o valor
            configurable: true
        },
        preco: {
            enumerable: false, //mostra a chave
            value: preco, //valor
            writable: true, // pode alterar o valor
            configurable: true
        }
    })
}
const p1 = new Produto('camisa', 20, 3);
p1.stoque = 50000;
delete p1.stoque;
console.log(p1)
console.log(Object.keys(p1));

