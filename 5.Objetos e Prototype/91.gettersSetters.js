function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, "estoque", {
        enumerable: true, //mostra a chave
        configurable: true, //configuravel?
        get: function () {
            return estoque;
        },
        set: function (valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('mensagem');
            }

            estoquePrivado = valor;
        }
    });
}
const p1 = new Produto('camisa', 20, 3);
console.log(p1)