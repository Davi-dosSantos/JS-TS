function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - (this.preco * percentual / 100)
}

Produto.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * percentual / 100)
}

const p1 = new Produto('camisa', 50);

const p2 = {
    nome: 'Caneca',
    preco: 16
}
Object.setPrototypeOf(p2, Produto.prototype)



const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 113
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 43
    },
})

p3.aumento(10)
console.log(p3)