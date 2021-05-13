//IIFE -> immediately invoked function expression

(function (idade, peso, altura) {
    const sobrenome = 'Miranda';
    function criaNome(nome) {
        return nome + " " + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Davi'))
    }

    falaNome();
    console.log(idade, peso, altura)
})(30, 100, 194);