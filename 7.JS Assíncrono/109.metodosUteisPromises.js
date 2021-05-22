function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg != 'string') {
                reject('cai no erro')
                return;
            }
            resolve(msg.toUpperCase() + ' - Passei na promise');
        }, tempo);
    });
}

function baixaPagina() {
    const emCache = true;

    if (emCache) {
        return Promise.resolve('Página em cache');
    } else {
        return esperaAi('Baixei a página', 3000)
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(err => console.log('erro', err))

const promises = [

    esperaAi('Promise 1', rand(1, 5)),
    esperaAi('Promise 2', rand(1, 5)),
    esperaAi('Promise 3', rand(1, 5)),
    esperaAi(10000, rand(1, 5)),

];

//Promise.all(promises)  //resolve todas
Promise.race(promises)  //nostra a primeira que terminar
    .then(function (valor) {
        console.log(valor);
    })
    .catch(function (erro) {
        console.error(erro);
    })