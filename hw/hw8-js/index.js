// Task 1 Создайте объект ноутбука 

const notebook = {
    serialNumber: '     3V5E7EA     ',
    model: 'HP 255 G8',
    display: {
    typeDisplay: 'IPS ',
    resolutionDisplay: '1920x1080 '
    },
    proccesor: 'Восьмиядерный AMD Ryzen 7 5700U (1.8 - 4.3 ГГц)',
    RAM: '8 ГБ',
    storageData: {
    volyme: ' HDD 256 ГБ SSD',
    graphicsСard: 'AMD Radeon Graphics'
    },
    frame: {
    color: 'silvery',
    weight: 1.7,
    dimensions: '  (Ш х Г х В) 358 x 242 x 19   '
    }
}
Object.entries(notebook).forEach(([key,value]) => {
    if(typeof value === 'string'){
        notebook[key] = value.trim()
    } else if( (!!value) && (value.constructor === Object)){
        Object.entries(value).forEach(([nestedKey,nestedValue])=> {
            if(typeof nestedValue === 'string'){
                console.log('nestedValue');
                console.log(nestedValue);
                value[nestedKey] = nestedValue.trim()
            }
        })
    }
})
console.log('TASK 1');
console.log(notebook);


// Task 2 Создайте класс который описывает создание нового пользователя с помощью логина и пароля. Сделайте несколько обьектов. 
// Создайте массив из нескольких обьектов (не вводите id)

class User{
    constructor(login, password){
        this.login = login;
        this.password = password;
    }
}

const userTom = new User('tomsmith@gmail.com', 'enigma123');
const userAleksandr = new User('aleksandrmadina@gmail.com', 'qazzaq222');
const userAlla = new User('alla@gmail.com', 'qwerty');

//  Массив из нескольких обьектов 

let arr = ['name', 'surname', 'age'];
let arrName = [
  ['Tom'],
  ['Smith'],
  [20],
 
];

const task2 = () => {
    const containerArr = [];
    for (let i = 0, j=0; i < arrName.length, j < arr.length; i++, j++) {
        let Obj = {
            [arr[j][0]]: arrName[i][0]
        }

        containerArr.push(Obj);
    }

    return containerArr;
  
}
console.log('TASK 2');
console.log(task2());


// Task 3 Из полученого массива в задании 2 сделайте карту (map). в качестве ключа используйте логин

const userMap = new Map();
userMap.set(userTom.login, task2());
console.log('TASK 3');
console.log(userMap);

// Task 4* разными способами решите вопрос соединения двух массивов без повторов

// 4.1 

const fruit = ["Яблоко","Персик"];
const vegetable = ["Огурец","Капуста"];
const  wayFirst = [...fruit, ...vegetable]
console.log('TASK 4.1');
console.log(wayFirst);

//4.2

function waySecond(array1, array2){
for(let i = 0; i < array2.length; i++ ){
  array1.push(array2[i]);
}
return array1;
}

console.log('TASK 4.2');
console.log(waySecond(fruit, vegetable));

// 4.3

const wayThird = fruit.concat(vegetable);
console.log('TASK 4.3');
console.log(wayThird);
