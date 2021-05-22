function rand(min = 0, max = 3) {
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
async function executa() {
    try {
        const fase1 = await esperaAi('fase1', rand());
        console.log(fase1);
        setTimeout(() => {
            console.log('Essa promise estava pendente', fase1)
        }, 1100);
        const fase2 = await esperaAi('fase2', rand());
        console.log(fase2);
        const fase3 = await esperaAi('fase3', rand());
        console.log(fase3);

        console.log('terminamos a fase: ', fase3);
    } catch (e) {
        console.log(e)
    }
}

executa();