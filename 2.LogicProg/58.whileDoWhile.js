
function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}
const min = 1;
const max = 50;
let rand = random(1, 50);

while (rand !== 10) {
    rand = random(min, max);
    console.log(rand)
}
// do while primeiro executa e depois checa a condição , enquanto o while só executa se passar pela condião
do {
    rand = random(min, max);
    console.log(rand)
} while (rand != 10)