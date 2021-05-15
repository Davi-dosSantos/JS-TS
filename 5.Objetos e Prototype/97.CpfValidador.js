

const validateCPF = (cpf) => {
    let cpfClean = cpf.replace(/\D+/g, '');
    const cpfArray = Array.from(cpfClean);
    const cpfArrayVerify = [...cpfArray]
    cpfArrayVerify.splice()
    cpfArrayVerify.pop()

    console.log(cpfArrayVerify)

    let i = 10
    const primeiroDigitoArray = []
    for (let number of cpfArrayVerify) {
        primeiroDigitoArray.push(number * i)
        i--
    }


    let somaArrayPrimeiroDigito = primeiroDigitoArray.reduce(function (acumulador, valor) {
        acumulador += valor;
        return acumulador;
    }, 0);

    let primeiroDigito = (11 - (somaArrayPrimeiroDigito % 11))
    if (primeiroDigito > 9) primeiroDigito = 0;
    cpfArrayVerify.push(primeiroDigito)

    let u = 11
    const segundoDigitoArray = []
    for (let number of cpfArrayVerify) {
        segundoDigitoArray.push(number * i)
        u--
    }


    let somaArraySegundoDigito = segundoDigitoArray.reduce(function (acumulador, valor) {
        acumulador += valor;
        return acumulador;
    }, 0);
    let segundoDigito = (11 - (somaArraySegundoDigito % 11))
    if (segundoDigito > 9) segundoDigito = 0;
    cpfArrayVerify.push(segundoDigito)

    let cpfValidado = cpfArrayVerify.join('')
    console.log(cpfValidado)
    console.log(cpfClean)

    if (cpfClean !== cpfValidado) return console.log(false);
    return console.log(true);
}
validateCPF('705.484.450-52')