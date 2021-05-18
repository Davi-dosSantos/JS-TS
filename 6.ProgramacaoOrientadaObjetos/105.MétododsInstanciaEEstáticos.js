function teste() {
    console.log('Este é o meu teste.')
}

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
        teste();
    }
    //Metodo de instancia
    aumentarVolume() {
        this.volume += 2;
    }
    //Metodo de instancia
    diminuirVolume() {
        this.volume -= 2;
    }
    //metodo estatico
    static soma(x, y) {
        console.log(this);
    }

}

const controle1 = new ControleRemoto
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1)

ControleRemoto.soma()


