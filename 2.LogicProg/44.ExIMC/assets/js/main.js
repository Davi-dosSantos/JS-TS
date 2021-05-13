
const form = document.querySelector('#form');

form.addEventListener('submit', function (event) {
    event.preventDefault()
    const inputWeight = event.target.querySelector('#weight')
    const inputHeight = event.target.querySelector('#height')

    const weight = Number(inputWeight.value)
    const height = Number(inputHeight.value)

    if (!weight) {
        setResult("Invalid weight", false);
        return;
    }
    if (!height) {
        setResult("Invalid height", false);
        return;
    }

    const bmi = getBMI(weight, height);
    const bmiLevel = getBMILevel(bmi)
    console.log(bmi)

    const message = `You BMI is ${bmi} (${bmiLevel})`

    setResult(message, true);
})

function getBMILevel(bmi) {
    const level = ["under weight", "normal weight", "overweight", "class 1 obesity", "class 2 obesity", "class 3 obesity"]
    if (bmi >= 39.9) return level[5];
    if (bmi >= 34.9) return level[4];
    if (bmi >= 29.9) return level[3];
    if (bmi >= 24.9) return level[2];
    if (bmi >= 18.5) return level[1];
    if (bmi < 18.5) return level[0];
}


function getBMI(weight, height) {
    const bmi = weight / height ** 2;
    return bmi.toFixed(2);
}

function createParagraph() {
    const paragraph = document.createElement('p');
    return paragraph;
}

function setResult(message, isValid) {
    const results = document.querySelector('#results');
    results.innerHTML = '';

    const paragraph = createParagraph();

    if (isValid) {
        paragraph.classList.add('paragraph-results');
    } else {
        paragraph.classList.add('bad')
    }

    paragraph.innerHTML = message;
    results.appendChild(paragraph);
}
