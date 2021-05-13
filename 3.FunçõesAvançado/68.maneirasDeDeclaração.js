// declarando com function lalala(){}  a funçaõ sofre hoisting
FalaOi();
function FalaOi() {
    console.log("Oiii")
}

// frist-class objects (objetos de primeira classes)
// Function expression
const souUmDado = function () {
    console.log("sou um dado")
}
function executaFuncao(funcao) {
    console.log("vou executar sua função")
    funcao()
};
executaFuncao(souUmDado)

//arrowfunctions

const arrowFunctions = () => {
    console.log("Sou uma arrow function")
}
arrowFunctions()

// dentro de um objeto 

const obj = {
    falar() {
        console.log("Estou falando ...")
    }
}

obj.falar();