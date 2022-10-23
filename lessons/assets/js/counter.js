// -
for (let i=1; i<=10; i++){
    setTimeout(() => {
        console.log(i);
    } ,  100)
}


// +

let start = 100, end = 110;
const timerId = setInterval(() => {
    start <= end ? console.log(start++) : clearInterval(timerId);
})

// const btn = document.getElementById('loadUsers');
// const store = {
//     users: null,
//     isFetching: false,
//     error: null,
// }

// const request = new XMLHttpRequest();

// btn.onclick = function() {
//     console.log(22);
//     request.open('GET', '../../../lesson1/assets/data/users.json', true);
//     // request.open('GET', '../data/users.json', true);
//     request.send();
//     console.log('store.users');
//     console.log(store.users);
// }
// request.onloadstart = function(){
  
// }
// request.onloadend = function(){
//     console.log(this);
//     if(this.status >= 200 && this.status < 300){
//         store.users = JSON.parse(this.responseText);
//     }else{
//         store.error = new Error(this.statusText)
//     }
// }

const btn = document.getElementById('loadUsers');
btn.onclick = function () {
    fetch('../../assets/data/users.json').then(loadResolve).then(logData).catch(loadReject);
}
// data to console
function logData(data){
    console.log(data);
}

// good!
function loadResolve(response){
    console.log(response.json());
    store.isFetching = true;
    return response.json();
}

// error , bad ((
function loadReject(response){
    console.log(response);
    // store.error = new Error(`${response.status} ${response.statusText}`)
}

// Промис
// promise - fulfilled, reject

const promise1 = new Promise(test);

function test(resolve, reject){
    console.log('Hello, Vasya!');
    if(reject){
        new Error('Reject hello vasya')
    }
}

//делаем обещание что получим число больше 50 в интервале от 0 до 100

let promiseGetNumBiggerThan50 = new Promise(getNumFrom0To100);

function getNumFrom0To100(resolve, reject){
    const num = Math.round(Math.random() * 100);
    console.log(num);
    if(num >= 50){
        resolve(num);
    } else{
        reject(new Error(`Reject. Number ${num} is less than 50`))
    }
}


// получить пользователя

fetch("https://randomuser.me/api/?results=20")
  .then(loadResolve)
  .then(logData)
  .catch(loadReject);

function loadResolve(response){
    return response.json();
}

function logData(data){
    console.log(data);
}

function loadReject(reject){
    console.log(reject);
}




