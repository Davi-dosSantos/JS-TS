/// Valor por referencia

const nomes = ['Edu', 'DUDU', 'Du', 'fuji', 'hoku'];
const novo2 = nomes.slice(1, -2)
const novo = [...nomes];//cópia em vez de referenciar
delete nomes[2];
const removido = nomes.pop();//shift remove do começo e move todo o resto
nomes.push('luiz')// add final
nomes.unshift('Joes')//add começo
console.log(nomes, removido);
console.log(novo2);

// convertendo string em array
const nome2 = 'Davi dos Santos Costa';
const nomes2 = nome2.split(' ');
console.log(nomes2)

///covertendo array em string
const nome3 = ['Davi', 'dos', 'Santos', 'Costa'];
const nomes3 = nome3.join(' ');
console.log(nomes3)
