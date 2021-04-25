// let a = 'a'
// let b = 'b'
// let c = 'c'

// [a, b, c] = [c, b, a]
// console.log(a, b, c)

////////... rest , ... spread

const numbers = [1, 2, 3, 5, 6, 34, 12354, 34243, 23, 21, 122]
const [um, dois, , , cinco, ...rest] = numbers
console.log(cinco)


//////////desestruturando

const lista = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]]
const [lista1, lista2, lista3, lista4] = lista
console.log(lista3[2])