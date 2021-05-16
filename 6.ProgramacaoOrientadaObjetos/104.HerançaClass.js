class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligador = false;
    }

    ligar() {
        if (this.ligado) {
            console.log(`${this.nome} já ligado`);
            return;
        }
        this.ligado = true;
    }
    desligar() {
        if (!this.ligado) {
            console.log(`${this.nome} já desligado`)
            return
        }
        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, wifi) {
        super(nome);
        this.wifi = wifi;
    }
    ligar() {
        console.log(`Voce alterou o metodo ligar`)
    }
}

const s1 = new Smartphone('iPhone', 'Preto', '10S');
console.log(s1);

const t1 = new Tablet('iPad', true);
t1.ligar();
console.log(t1);