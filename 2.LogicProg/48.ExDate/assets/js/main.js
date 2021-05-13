// const dataTexto = document.getElementById('Data');

// function getDiaSemanaTexto(diaSemana) {
//     const diasSemana = ['Domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sabado']
//     return diasSemana[diaSemana]
// }

// function zeroAesquerda(num) {
//     return num >= 10 ? num : `0${num}`
// }

// function getMes(NumMes) {
//     const mesTexto = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
//     return mesTexto[NumMes]
// }
// const data = new Date();
// const diaSemana = data.getDay();
// const mes = data.getMonth();
// let diaSemanaTexto = getDiaSemanaTexto(diaSemana);
// let mesTexto = getMes(mes);
// let Texto = `${diaSemanaTexto}, ${data.getDate()} de ${mesTexto} de ${data.getFullYear()}` + ` ${zeroAesquerda(data.getHours())}:${zeroAesquerda(data.getMinutes())}`

// console.log();

// dataTexto.innerHTML = Texto;

/////////////////////////////////////////////////////////////

const h1 = document.getElementById('Data');
const data = new Date();
h1.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full', timeStyle: 'short' });