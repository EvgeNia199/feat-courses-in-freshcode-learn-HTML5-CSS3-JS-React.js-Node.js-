//1
const promise1 = new Promise(fun1);

function fun(resolve, reject){
    console.log('hello');
}

//2
 const promise2 = new Promise(
    function(resolve, reject){
        console.log('hello');
    }
 )

 //обещание об авторизации пользователя isAuthUser

 const isAuth = true;
 const error = null;
 const currentUser = {name: 'Test', surname: 'Testovich'}
 const getAuthUserPromise = new Promise(getAuthUser)

 function getAuthUser(resolve, reject){
    if(isAuth){
        resolve(currentUser);
    }else{
        reject(error)
    }
 }

 // цепь из 2 обещаний

 const isIHaveEnoughMoney = true;

 const buyNewphone = new Promise(getPhone);

 function getPhone(resolve, reject){
    if(isIHaveEnoughMoney){
        const phone = {
            model: 'modelX'
        };
        resolve(phone);
    }const reason = new Error('Try again...');
    reject(reason);
 }

 //2

 async function showMyNewCoolPhone(phone){
 const showNewPhone = new Promise(showForFriends);
 function showForFriends (resolve, reject){
    if(phone){
    const msg = `Hello, I have a new phone ${phone.model} ${phone.yqar}`;
    resolve(msg);
    }else{
        const promiseMsg = 'I will make this again';
        reject(promiseMsg);
    }
 }
}

//connect
async function buy(){
    try{
        const phone = await buyNewphonePromise;
        const msg = await showMyNewCoolPhone(phone)
    }catch(error){
        console.log(error);
    }
}

//вызов синхронный
buy();

//асинхронный вызов

(async () => {await buy();})();

// в ES6

const buy = function(){
    buyNewPhonePromise
    .then(showMyNewCoolPhone)
    .catch(error => console.log(error))
};

buy();


function getNumber(resolve, reject){
    const num = Math.random();
    if(num >= 0.5) {
        resolve('ok');
    } else{
        reject(new Error(`${num}:error get number > 0.5`));
    }
}

const setPromises = [];
for(let i=0; i<10; i++){
    setPromises[i]=new Promise(getNumber);
}
console.log(setPromises);

makePromises();

/*
async function makePromises(){
    try{
        const result = await Promise.all(setPromises);
        console.log(result);
    } catch(error){
        console.log(error);
    }
}
*/

/*
param - set promises
Promise.all() ждет когда все выполнятся успешно. если нет - преращает выполнение
Promise.race() ждет когда первый (ближайший) промис выполнится
Promise.allSettled()  вернет весь набор промисов со статусами 
и ему не важно успешно или нет
*/