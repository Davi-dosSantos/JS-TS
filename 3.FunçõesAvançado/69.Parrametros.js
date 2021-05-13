function funcao(a) {
    let total = 0
    //arrow Functions não possuem arguments
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total, a);
}

funcao('js taca o fodese para os parametros', 'e executa');


function func(a = 0, b = 0, c = 0, d = 0, e = 00) {
    console.log(a + b + c + d + e)
}

func(1, undefined, 3)

function vaiLá({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade)
}

vaiLá({ nome: 'davi', sobrenome: 'dos Santos', idade: 23 })


const conta = (operador, acumulador, ...numeros) => {
    for (let numero of numeros) {

        if (operador === '+') acumulador += numero
        if (operador === '-') acumulador -= numero
        if (operador === '/') acumulador /= numero
        if (operador === '*') acumulador *= numero
    }
    console.log(acumulador)
}
conta('+', 0, 20, 32, 41, 52)