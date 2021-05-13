
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'alan',
    idade: 11,
    fala() {
        console.log(`${this.nome} ${this.sobrenome} está com ${this.idade}`);
    },
    incrementaIdade() {
        this.idade++;
    }
}

pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();