const frutas = ['pera', 'mação', 'uva']


for (let fruta of frutas) {
    console.log(fruta);
}


frutas.forEach(function (fruta, indices, array) {
    console.log(fruta, indices, array);
})


// for c]ásico - geralmente com iteraveis (array ou strings)
//for in - Retorna o indice ou chave (string,array ou objetos)
//for of - Retorna o valor em si (iteraveis, arrays ou strings)
