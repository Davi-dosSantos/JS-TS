function codigoCPFdigitos(array) {

    let magicNumberGov = array.length + 1
    const somaArray = []
    for (let number of array) {
        somaArray.push(number * magicNumberGov)
        magicNumberGov--
    }
    return somaArray;
}

function calcDigito(somaArray) {
    let ResultSomaArray = somaArray.reduce(function (acumulador, valor) {
        acumulador += valor;
        return acumulador;
    }, 0);

    const digito = (11 - (ResultSomaArray % 11))
    console.log(digito);
    if (digito < 10) return digito
    return 0;
}

const validateCPF = (cpf) => {
    let cpfClean = cpf.replace(/\D+/g, '');
    const cpfArray = Array.from(cpfClean);
    const cpfArrayVerify = [...cpfArray]
    cpfArrayVerify.pop()
    cpfArrayVerify.pop()

    console.log(cpfArrayVerify)

    const codigoDigito1 = codigoCPFdigitos(cpfArrayVerify)
    const primeiroDigito = calcDigito(codigoDigito1)
    cpfArrayVerify.push(primeiroDigito)

    const codigoDigito2 = codigoCPFdigitos(cpfArrayVerify)
    const segundoDigito = calcDigito(codigoDigito2)
    cpfArrayVerify.push(segundoDigito)
    console.log(segundoDigito)
    const cpfValidado = cpfArrayVerify.join('')
    console.log(cpfValidado)
    console.log(cpfClean)

    if (cpfClean !== cpfValidado) return console.log(false);
    return console.log(true);
}
validateCPF('705.484.450-52')