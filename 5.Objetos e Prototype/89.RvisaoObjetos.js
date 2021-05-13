const pessoa = {
    nome: 'Davi',
    sobrenome: 'Costa'
};

const chave = 'nome';
console.log(pessoa[chave]);
console.log(pessoa.nome);

delete pessoa.nome;
console.log(pessoa)

const pessoa1 = new Object();
pessoa1.nome = 'Davi'
pessoa1.sobrenome = 'costa'
pessoa1.idade = 21;
pessoa1.falarNome = function () {
    return (`${this.nome} esta falando seu nome`)
}
pessoa1.getDataNascimento = function () {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};
console.log(pessoa1.getDataNascimento())
for (let chave in pessoa1) {
    console.log(pessoa1[chave]);
}