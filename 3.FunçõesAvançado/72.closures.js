function retornaFuncao(nome) {
    return function () {
        return nome;
    }
}

const funcao = retornaFuncao('Joao')
const funcao2 = retornaFuncao('Davi')
console.dir(funcao)
console.dir(funcao2)
console.log(funcao(), funcao2())