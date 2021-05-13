function encriptarPalavra(palavra, chave) {
    // escreva seu código aqui :)
    const alfabeto = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z]
    let codigos = [];
    let novaPalavra;
    for (let i in palavra) {
        codigos.push(alfabeto.indexOf(alfabeto[i]) + chave);
    }
    for (let i in codigos) {
        novaPalavra += alfabeto[codigos[i]]
    }
    return novaPalavra
}

encriptarPalavra("abc", 1)