// na função construtora muda se a construção , ela sempre inicia com letra maiuscula usasse new e não precisa do create
// factoryFunctions -> Objetos
//Constructors function -> Pessoa (new)

function Pessoa(nome, sobrenome) {

    const ID = 123456;
    const metodoInterno = function () {

    };

    //Atributos ou métodos publi
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function () {
        console.log(this.nome + ' : sou um metodo')
    }

}

const p1 = new Pessoa('Davi', 'Costa');
p1.metodo();