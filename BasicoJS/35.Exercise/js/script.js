
function scope() {
    const form = document.querySelector('.form')
    const results = document.querySelector('.results')


    const person = []

    function receiveEvent(event) {
        event.preventDefault();

        const name = form.querySelector('.name');
        const lastName = form.querySelector('.lastName');
        const weight = form.querySelector('.weight');
        const height = form.querySelector('.height');

        person.push({
            name: name.value,
            lastName: lastName.value,
            weight: weight.value,
            height: height.value
        })
        console.log(person)
        results.innerHTML += `<P>${name.value} ${lastName.value} ${weight.value} ${height.value}.</P>`;
    }
    // function createPerson(name, lastName, height, width) {
    //     person = {
    //         name: name,
    //         lastName: lastName,
    //         height: height,
    //         width: width
    //     }
    //     return person
    // }
    // people = createPerson(person)

    form.addEventListener('submit', receiveEvent)
}

scope();