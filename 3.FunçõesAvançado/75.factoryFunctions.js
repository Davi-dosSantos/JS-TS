function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        //getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        //Seter 
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala(assunto = 'falando sobre nada') {
            return `${this.nome} está ${assunto}.`;
        },

        altura: altura,
        peso: peso,
        //Getter 
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Davi', 'costa', 1.80, 80);
p1.nomeCompleto = 'Davi dos Santos Costa';
console.log(p1.nomeCompleto);
console.log(p1.fala())
console.log(p1.imc)