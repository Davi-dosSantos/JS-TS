function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg != 'string') reject(new Error('Erro'))

        setTimeout(() => {
            resolve(msg);

        }, tempo);
    });
}

esperaAi('Conexao com o BD', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Buscando dados da Base', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi('TRATANDO dados da Base', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi(1231239, rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);

    })
    .then(() => {
        console.log('exibe dados tela');
    })
    .catch(e => {
        console.log('Error:', e);
    });

console.log('isso vai ser exibido primeiro')
