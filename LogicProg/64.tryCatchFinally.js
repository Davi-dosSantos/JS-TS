// try {
//     console.log('abri um arquivo');
//     console.log('Manipulei o arquivo e gerou erro');
//     console.log('fechei o arquivo')
// } catch (e) {
//     console.log('tratando o erro')
// } finally {
//     console.log('Finally')
// }

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instancia de Date. ');
    }
    if (!data) {
        data = new Date();
    }
    return data.toLocaleDateString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}
try {
    const data = new Date('01-01-1970 12:26:78')
    const hora = retornaHora(11);
    console.log(hora);
} catch (e) {
    console.log(Error(e));
    //tratar error
} finally {
    console.log('Tenha um bom dia.')
}