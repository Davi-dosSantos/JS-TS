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

function createButtonDelete(li) {
    li.innerHTML += ' ';
    const buttonDelete = document.createElement('button');
    buttonDelete.innerText = 'Delete';
    buttonDelete.setAttribute('class', 'delete');
    buttonDelete.setAttribute('title', 'delete this task');
    li.appendChild(buttonDelete);
}

function inputClear() {
    inputNewTask.value = '';
    inputNewTask.focus();
}

function createTask(textInput) {
    const li = createLi();
    li.innerText = textInput;
    tasks.appendChild(li);
    inputClear();
    createButtonDelete(li)
    taskSave()
}


buttonAddTask.addEventListener('click', function () {
    if (!inputNewTask.value) return;
    createTask(inputNewTask.value)
})
buttonAddTask.addEventListener('click', function (event) {
    const element = event.target;

    if (element.classList.contains('delete')) {
        element.parentElement.remove();
        taskSave();
    }
})

function taskSave() {
    const liTask = tasks.querySelectorAll('li')
    const taskList = [];

    for (let task of liTask) {
        let taskText = task.innerText;
        taskText = taskText.replace('Delete', '').trim();
        console.log(taskText);
        taskList.push(taskText);

    }

    const tasksJASON = JSON.stringify(taskList);
    localStorage.setItem('tasks', tasksJASON);

}
