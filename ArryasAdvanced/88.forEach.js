const numeros = [5, 50, 80, 1, 2, 3, 4, 8, 7, 11, 15, 22, 27];
let total = 0
//reduce é melhor
numeros.forEach((valor, indice, array) => {
    total += valor;
})
console.log(total)