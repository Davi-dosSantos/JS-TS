const inputNewTask = document.querySelector('.inputNewTask')
const buttonAddTask = document.querySelector('.buttonAddTask')
const tasks = document.querySelector('.tasks')


function createLi() {
    const li = document.createElement('li')
    return li;
}

inputNewTask.addEventListener('keypress', function (event) {
    if (event.keyCode === 13) {
        if (!inputNewTask.value) return;
        createTask(inputNewTask.value)
    }
})

function createTask(textInput) {
    const li = createLi();
    li.innerText = textInput;
    tasks.appendChild(li);
}



buttonAddTask.addEventListener('click', function (event) {
    if (!inputNewTask.value) return;
    createTask(inputNewTask.value)
})


