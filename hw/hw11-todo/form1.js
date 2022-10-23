
// // при нажатии кнопки добавить li и получить текст что юзер ввел
// const list = document.getElementById('tasks');
// const btnAdd = document.getElementById('btnAdd');
// const task = document.getElementById('task');
// const btnDel = document.getElementById('btnDel');

// let i = 0;

// btnAdd.addEventListener('click', (event) => {
//     const item = document.createElement('li');
//     item.innerText = task.value;
//     item.append(addCheckbox());
//     list.append(item);
//     task.value = '';
// });

// // добовляем чекбокс
// function addCheckbox(){
//     const checkElem = document.createElement('input');
//     checkElem.type = 'checkbox';
//     checkElem.classList.add('check');
//     return checkElem;
// }

// function deleteTasks(event){

// }
// // удаляет список
// function deleteCheckTasks(event){
//     const deletedTasks = document.querySelectorAll('input[type="checkbox"]:checked');
//     deletedTasks.forEach(el => el.parentNode.remove());
// }


const list = document.getElementById('tasks');
const btnAdd = document.getElementById('btnAdd');
const btnDel = document.getElementById('btnDel');
const task = document.getElementById('task');
const deadline = document.getElementById('deadline')
const deadlineList = document.getElementById('deadlineList')

btnAdd.addEventListener('click', addNewTask);
btnDel.addEventListener('click', deleteCheckTasks);
btnAdd.addEventListener('click', taskDeadline);



function taskDeadline(event){
    const date = document.createElement('li');
    date.innerText = deadline.value;
  
    deadlineList.append(date);
    
    deadlzine.value = '';

}

function addNewTask(event) {
    const item = document.createElement('li');
    item.innerText = task.value;
    item.append(addCheckbox());
    list.append(item);
    task.value = "";
};

function addCheckbox(){
    const checkElem = document.createElement('input');
    checkElem.type = 'checkbox';
    checkElem.classList.add('check');
    return checkElem;
    
}

function deleteCheckTasks(event){
    const deletedTasks = document.querySelectorAll('input[type="checkbox"]:checked');
    deletedTasks.forEach(el => el.parentNode.remove());
}

