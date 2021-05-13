// Filter, map, reduce 

//retorne os numeros maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 4, 8, 7, 11, 15, 22, 27];

const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numeros, numerosFiltrados)



// retorne as pessoas que tem o nome com 5 letras ou mais
// retorne as pessoas com mais de 50 anos
// retorne as pessoas cujo o nome termina em a

const pessoas = [
    { nome: 'Luiz', idade: 82 },
    { nome: 'Maria', idade: 33 },
    { nome: 'Fernando', idade: 65 },
    { nome: 'Andre', idade: 47 },
    { nome: 'Elis', idade: 22 },
    { nome: 'Luiza', idade: 27 },
    { nome: 'Jonas', idade: 8 },
];

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length > 5);
console.log(pessoasComNomeGrande)
const pessoasComMaisDeCinquentaAnos = pessoas.filter(obj => obj.idade > 50);
console.log(pessoasComMaisDeCinquentaAnos)
const pessoasNomeTerminaA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log(pessoasNomeTerminaA)

