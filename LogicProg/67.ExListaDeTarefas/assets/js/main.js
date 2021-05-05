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

function inputClear() {
    inputNewTask.value = '';
    inputNewTask.focus();
}

function createButtonDelete(li) {
    li.innerHTML += ' ';
    const buttonDelete = document.createElement('button');
    buttonDelete.innerText = ' Delete';
    buttonDelete.setAttribute('class', 'delete');
    buttonDelete.setAttribute('title', 'delete this task');
    li.appendChild(buttonDelete);
}


function createTask(textInput) {
    const li = createLi();
    li.innerText = textInput;
    tasks.appendChild(li);
    inputClear();
    createButtonDelete(li);
    taskSave();
}


buttonAddTask.addEventListener('click', function () {
    if (!inputNewTask.value) return;
    createTask(inputNewTask.value)
});

document.addEventListener('click', function (event) {
    const elements = event.target;

    if (elements.classList.contains('delete')) {
        elements.parentElement.remove();
        taskSave();
    }
});

function taskSave() {
    const liTask = tasks.querySelectorAll('li')
    const taskList = [];

    for (let task of liTask) {
        let taskText = task.innerText;
        taskText = taskText.replace('Delete', '').trim();
        taskList.push(taskText);
    }

    const tasksJASON = JSON.stringify(taskList);
    localStorage.setItem('tasks', tasksJASON);

}

function addTasksSaved() {
    const tasks = localStorage.getItem('tasks');
    const taskList = JSON.parse(tasks)

    for (let task of taskList) {
        createTask(task);
    }
}
addTasksSaved()