/*Object*/

const cameraTemplate = ['Автофокус', 'Вспышка', 'Поддержка 4К съемки', 'Стабилизация', 'Ультраширокоугольный объектив', 'Широкоугольный объектив'];
const objMobile = {
    model: 'Apple iPhone 13',
    display: {
        diagonal: 6.1,
        resolutionDisplay: '2532x1170',
        matrixPhone: 'OLED'
    },
    simCards: {
        countCasrs: 2,
        sizeCards: ['nano'],       
    },
    CPU: {
        proccesor: "Apple Ax",
        name: 'Apple A15 Bionic',
        cores: '2+4',
        model: 'Apple A15 Bionic'
    },
    frontCamera: {
        count: 1,
        quality: [12]
    },
    mainCamera: {
        count: 2,
        quality: [12,12],
        features: [],
    },

};

objMobile.mainCamera.features.push(cameraTemplate)

const user1= {
    id: 1001,
    login: 'login1',
    password: 'qazzaq',

}
const user2= {
    id: 1002,
    login: 'login2',
    password: 'qazzaq',
    
}

const user3= {
    id: 1003,
    login: 'login3',
    password: 'qazzaq',
    
}

const user4= {
    id: 1004,
    login: 'login4',
    password: 'qazzaq',
    
}

//карту пользователя МАР

// let userMap = new Map();
// userMap.set(1, user1);
// userMap.set(2, user2);
// userMap.set(3, user3);
// userMap.set(4, user4);
// console.log(userMap);

let userMap = new Map();
userMap.set(user1.id,user1);
userMap.set(user2.id,user2);
userMap.set(user3.id,user3);
userMap.set(user4.id,user4);
console.log(userMap);

// const user = [
//     {},
//     {},
//     {},
//     {}
// ]

const users = [
    {
    id: 1001,
    login: 'login1',
    password: 'qazzaq',

},
 {
    id: 1002,
    login: 'login2',
    password: 'qazzaq',
    
},

{
    id: 1003,
    login: 'login3',
    password: 'qazzaq',
    
},

 {
    id: 1004,
    login: 'login4',
    password: 'qazzaq',
    
}
]
console.log(users);

let userMap2 = new Map();
for(let i=0; i<users.length; i++){
    userMap2.set(users[i].id, users[i]);
}

console.log(userMap2);
console.log(userMap2.get(1004));// получаем объект по ключу
console.log(userMap2.delete(1001));//удалние объекта по ключу 1001
console.log(userMap2.has(1001));//поиск объекта 

// заморозка объекта

//freeze() метод не рарешает изменять объект
// const obj = Object.freeze({});
// основное применение - объект из набора констант

const roles = Object.freeze({
    admin: 'admin',
    moderator: 'moderator',
    user: 'user',
});

const actions = Object.freeze({
    create: "create",
    read: 'read',
    update: 'update',
    delete: 'delete'
});

let accessMap = new Map();

accessMap.set(actions.create, [roles.admin, roles.moderator]);
console.log('*******************');
accessMap.set(actions.read, ...Object.entries(roles));
console.log(...Object.entries(roles));
//accessMap.set(actions.read, [roles.admin, roles.moderator, roles.user]);
accessMap.set(actions.update, [roles.admin, roles.moderator]);
accessMap.set(actions.delete, [roles.admin]);

//деструкторизация 

// выбор элемента и полчение остатка 

const arr1 = [1,2,3,4,5,6,7];
const [a0, ...r] = arr1;
console.log(a0);
console.log(r);
const arr2 = [1,2,3,4,[10,20,30,40,50],5,6,7];
// rest 30,40,50
const [a1,,,,[,,...rest2],...rest3] = arr2;
const arr3 = [100,200,300,400];
//const arr1ConcatArr3 = arr1.concat(arr3);
const arr1ConcatArr3 = [...arr1, ...arr3];
console.log(arr1ConcatArr3);
const obj1 = {name: 'John', surname: 'Fox', age: 20};
const obj2 = {login: 'johnfox', password: 'qwerty'};
const userJohn = {...obj1, ...obj2};
console.log(userJohn);
const obj3 = {name: 'John', surname: 'Fox'};
const obj4 = {name: 'Tom', age: 20, isMale: true};
const objConcat = {...obj3, ...obj4};
console.log(objConcat);

// копирование обьекта

const test1 = {name: 'Tom', surname: 'Fox'};

const test2 = test1;
console.log('--------------------');
console.log('test1 object=',test1);
console.log('test2 object=',test2);

test2.name = 'John';
console.log('--------------------');
console.log('test1 object=',test1);
console.log('test2 object=',test2);

const test3 = Object.assign({}, test1);
console.log('--------------------');
console.log('test1 object=',test1);
console.log('test2 object=',test2);
console.log('test3 object=',test3);

test3.name = 'Vasya';
console.log('--------------------');
console.log('test1 object=',test1);
console.log('test2 object=',test2);
console.log('test3 object=',test3);

/*
test1                               test3
{name: 'John', surname: 'Fox'}     {name: 'Vasya', surname: 'Fox'}
test2
*/

const {name, surname} = test3;
console.log(name, surname);

function fun1(obj){
    console.log(`Hello ${obj.name} ${obj.surname} !!!`);
}

function fun2({name, surname}){
    console.log(`Hello ${name} ${surname} !!!`);
}

const fun3 = ({name, surname}) => console.log(`Hello ${name} ${surname} !!!`);

const test2 = {
    name: 'Tom', 
    surname: 'Fox',
    Greeting1: function() {console.log('Hello, I am Tom');},
    Greeting2: function() {console.log(`Hello, I am ${this.name}`);},
    Greeting3: function(nameFriend) {console.log(`Hello, ${nameFriend}`);},
    Greeting4: function({name}) {console.log(`Hello, ${name}`);},
    //Greeting4: function(objFriend) {console.log(`Hello, ${objFriend.name}`);}
    Greeting5: function({name}) {
        if(name == '' || name ==undefined ) name='guest';
        console.log(`Hello, ${name}`);},
    Greeting6: () => {console.log(`Hello, I am ${this.name}`);},
};

test1.Greeting1();
test1.Greeting2();
test1.Greeting3('Ann');
test1.Greeting5({name: 'Kate', surname: 'Smith', age: 18});
test1.Greeting5({name: ''});
test1.Greeting5({});


//method for-in for-of

const user = {
    name: 'Vasya',
    surname: 'Ivanov',
    age: 20,
    isMale: true
}; 

for(let i in user){
    console.log('key=', i);
    console.log('value=', user[i]);
}

// obj - for-in
//array for-of / for(){} / arr.forEach()
//если для каждого элемента чтото сделать надо

const user5 = {
    name: 'Vasya',
    surname: 'Ivanov',
    age: 20,
    isMale: true
}; 

for(let i in user5){
    console.log('key=', i);
    console.log('value=', user5[i]);
}

// array   for-of    / for(){}     / array.forEach()
// если для каждого элемента чтото сделать надо

const a = [10,20,30,40,50];

for(let value of a){
    console.log(`el=${value}`);
}

//constructor - функция которая описывает создание будущих объектов
// Class
class User{
    constructor(loginVatue, passwordValue){
        this.login = loginVatue;
        this.password = passwordValue;
    }
}

const user11 = new User('login1', 'qwerty');
const user22 = new User('superman', 'qwerty12345');
const user33 = new User('vasya-petrov', 'qwerty');

console.log('user#1: ',user1);
console.log('user#2: ',user2);
console.log('user#3: ',user3);

// класс машин
//модель, цвет, год выпуска, объект двигателя(модель, мощность)

class Engine{
    constructor(name, power){
        this.name = name;
        this.power = power;
    }
};
class Car{
    constructor(model,color,year, engine){
        this.model = model;
        this.color = color;
        this.year = year;
        this.engine = engine;
        
    }
};
const engine = new Engine('44555', '1000');
console.log();
const car1 = new Car('modelX', 'black', 2022, engine);
console.log(car1);
console.log(car1.model);
console.log(car1.engine);