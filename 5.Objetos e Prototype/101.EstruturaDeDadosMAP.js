const pessoas = [
    { id: 3, nome: 'Luiz' },
    { id: 2, nome: 'Davi' },
    { id: 1, nome: 'Jerson' },
]

const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, { ...pessoa });
}

novasPessoas.delete(2);
console.log(novasPessoas);