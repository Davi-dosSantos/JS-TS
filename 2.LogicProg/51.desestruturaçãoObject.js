const pessoa = {
    sobrenome: 'John',
    idade: 31,
    endereco: {
        rua: 'Consta asdaf',
        numero: 382
    }
}

const { nome = 'padrão', sobrenome: teste, idade } = pessoa;
console.log(nome, teste, idade);
