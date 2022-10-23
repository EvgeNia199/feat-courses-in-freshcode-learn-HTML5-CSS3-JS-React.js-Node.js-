// Задание. Форма регистрации. Зарегить , обьект пользователя сохранить в storage  и вернуть пользователя на тут страницу где он был

const data = document.forms[0];
const userKeys = ['email', 'password'];

data.oninvalid = () => {
    alert('invalid element');
}

// data.onsubmit = () => {
//     const user = {};
//     for(let i of userKeys){
//         user[i] = data[i].value;
//     }
//     localStorage.setItem('user', JSON.stringify(user));
//     //history.back();
//     location.replace(location.origin);
//     return false;
// };

// function funHello(){
//     alert('hi')
// }
// setTimeout(funHello, 3000)

// менять время 
const counter = document.getElementById('counter');
let c = 10;

function updateCounter(){
    if(c>=0){
    counter.innerText = c;
    c--;
    }
}

setInterval(updateCounter, 1000);