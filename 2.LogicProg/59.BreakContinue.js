//funciona em todos os laços
//continue : pula para a proxima execução do laço, não executao que vem abixo dela
//break : qando chamado , encerra o laçço
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let numero of numeros) {
    if (numero === 2 || numero === 5) {
        console.log('pulei o numero')
        continue;
    }

    if (numero === 7) {
        console.log('7 encontrado sai do laço ')

        break;
    }

    console.log(numero);
}