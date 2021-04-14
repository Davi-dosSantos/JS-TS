const numero = Number(prompt("Digite um numero: "));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');


numeroTitulo.innerHTML = numero;

texto.innerHTML = '';
texto.innerHTML += `<P>Raiz quadrada: ${numero ** 0.5}.</P>`;
texto.innerHTML += `<P>${numero} é inteiro: ${Number.isInteger(numero)}.</P>`;
texto.innerHTML += `<P>${numero} é NAN: ${Number.isNaN(numero)}.</P>`;
texto.innerHTML += `<P>Arredondando para baixo: ${Math.floor(numero)}.</P>`;
texto.innerHTML += `<P>Arredondando para baixo: ${Math.ceil(numero)}.</P>`;
texto.innerHTML += `<P>Arredondando para baixo: ${numero.toFixed(2)}.</P>`;