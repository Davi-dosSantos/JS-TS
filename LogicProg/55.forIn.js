
//for in le os indices ou chaves do objeto

const frutas = ['pera', 'mação', 'uva']


for (let index in frutas) {
    console.log(frutas[index]);
}

const pessoa = {
    nome: 'luu',
    sobrenome: 'jonas',
    idade: 31
};

for (let chaves in pessoa) {
    console.log(chaves);
}
for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}