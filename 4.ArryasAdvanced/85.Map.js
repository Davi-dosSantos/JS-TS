//dobre os numeros

const numeros = [5, 50, 80, 1, 2, 3, 4, 8, 7, 11, 15, 22, 27];
const numerosDobro = numeros.map(valor => valor * 2)
console.log(numerosDobro)

const pessoas = [
    { nome: 'Luiz', idade: 82 },
    { nome: 'Maria', idade: 33 },
    { nome: 'Fernando', idade: 65 },
    { nome: 'Andre', idade: 47 },
    { nome: 'Elis', idade: 22 },
    { nome: 'Luiza', idade: 27 },
    { nome: 'Jonas', idade: 8 },
];

const nomes = pessoas.map(obj => obj.name);
console.log(nomes)

const idade = pessoas.map(obj => ({ idade: obj.idade }));
console.log(idade)

const comIds = pessoas.map((obj, indice) => {
    const newObj = { ...obj };
    newObj.id = indice;
    return newObj
});
console.log(comIds)
