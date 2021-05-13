const nomes = ['Davi', 'Joao', 'Gabriel', 'Gabriela', 'Luiz', 'Ricardo']

//nomes.splice(indice,delete , addelem1,addelem2 ,...)

//pop
const removidos = nomes.splice(-1, 1);
console.log(nomes, removidos);

//Unshift
const removidos2 = nomes.splice(2, 0, 'Luiz', 'Joana');
console.log(nomes, removidos2);

///shift
const removidos3 = nomes.splice(0, 1);
console.log(nomes, removidos3);