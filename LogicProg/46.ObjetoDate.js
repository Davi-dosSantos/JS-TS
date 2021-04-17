
// const tresHoras = 60 * 60 * 3 * 100
// const umDia = 60 * 60 * 24 * 100
// const data = new Date(0 + tresHoras - umDia); //01/01/1970 timestamp unix
// const data = new Date(2019, 3); //a,m,d,h,M,s,ms
// const data = new Date('2019-03-20 20:15.100');
// console.log('Dia', data.getDate());
// console.log('mês', data.getMonth() + 1);// Mês começa no 0
// console.log('ano', data.getFullYear());
// console.log('hora', data.getHours());
// console.log('min', data.getMinutes());
// console.log('seg', data.Seconds());
// console.log('ms', data.getMilliseconds());
// console.log('Dia semana', data.getDay()); // 0-Domingo, 6-Sábado
// console.log(data.toString());

function zeroAesquerda(num) {
    return num >= 10 ? num : `0${num}`
}
function formatDate(data) {
    const dia = zeroAesquerda(data.getDate());
    const mes = zeroAesquerda(data.getMonth());
    const ano = zeroAesquerda(data.getFullYear());
    const hora = zeroAesquerda(data.getHours());
    const min = zeroAesquerda(data.getMinutes());
    const seg = zeroAesquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data = new Date();
const dataBrasil = formatDate(data);
console.log(dataBrasil);