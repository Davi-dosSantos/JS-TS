function* geradora1() {
    //Codigo Qualquer
    yield 'Valor 1'
    //Codigo Qualquer
    yield 'Valor 1'
    //Codigo Qualquer
    yield 'Valor 1'
}

function* geradora2() {
    let i = 0;

    while (true) {
        yield i;
        i++;
    }
}

function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield geradora3();
    yield 3;
    yield 4;
    yield 5;
}

function* geradora5() {
    yield function () {
        console.log('Vim do y1')
    };
    return function () {
        console.log('Vim do y2')
    }

    //................................................................

    yield function () {
        console.log('Vim do y2')
    }
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;