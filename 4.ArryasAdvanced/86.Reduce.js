

const numeros = [5, 50, 80, 1, 2, 3, 4, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function (acumulador, valor, indice, array) {
    if (valor % 2 !== 0) {
        acumulador += valor;
    }
    return acumulador;
}, 0);
console.log(total);




const pessoas = [
    { nome: 'Luiz', idade: 82 },
    { nome: 'Maria', idade: 33 },
    { nome: 'Fernando', idade: 65 },
    { nome: 'Andre', idade: 47 },
    { nome: 'Elis', idade: 22 },
    { nome: 'Luiza', idade: 27 },
    { nome: 'Jonas', idade: 8 },
];
//RETORNE A PESSOA MAIS VELHA

const pessoaMaisVelha = pessoas.reduce((acumulador, valor) => {
    if (acumulador.idade > valor.idade) return acumulador
    return valor;
})
console.log(pessoaMaisVelha)
