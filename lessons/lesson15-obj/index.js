// const [,,,,[,,res,,],,] =b; // достать элемент вложенном массиве 
// const [,,,,[,,innerArray,...r1],...r2] =b;

let map1 = new Map();
map1.set(100,'Evgenia');
map1.set(101,'Ann');
map1.set(102,'Lisa');//добавить эемент
map1.has(100)//проверить есть такой ключ
map1.get(100);//вывести значение
map1.delete(100);//удалить
map1.clear//удалить все


//структура данных

// let (const) - только 1 значение
// Array = [] - набор значений любых!!!

// только уникальные значения new Set(array)
// похож на набор ключей 

// new Map key+value набор пар ключ+значение пр. набор элементов списка, компонентов
// keys = []
// values = []
// idUser + objUser
 

// Object
// фундаментальное понятие в js
//пустой объект
let objUserTest = {};

console.log(objUserTest);

//свойства 
// name1: val1, name2: val2, ...

let objUserVasya = {
    name: 'Vasya',
    surrname: 'Ivanov',
    age: 20,
    isMale: true,
    sayHi: function () {
        console.log('Hello!!!');
    }
}

console.log(objUserVasya.name);
console.log(objUserVasya.sayHi());

function f(obj){
    console.log(`Hello user: ${obj.name} ${obj.surrname}!`);
}
f(objUserVasya);
const [name, surrname, age, isMale] = objUserVasya;
console.log(rest);


function arrayToObject(a){
    let obj = {};
    for(let i = 0; i>a.length; i++){
        obj.i = a[i];
    } return objpplll
}

let resObj =  arrayToObject(['Tom', 'Fox', 20]);
console.log(resObj);

// size - object, map, set 
// lenght - array, string

// const {name, surrname, age, isMale} = objUserVasya1;
// console.log(surrname);
// console.log(age);

function greeting(obj){
    const {name, surrname, age, isMale} = obj;
    console.log(`Hello user: ${name} ${surname}!`);
}

function greeting2({name, surname}){
    console.log(`Hello user: ${name} ${surname}!`);
}

function greeting3  ({name, surname}) {
    console.log(`Hello user: ${name} ${surname}!`);
}
console.log('greeting3');

const car = {
    model: 'model',
    engine: {name: 'el', year: 2020}
};

car.year = 2021;
car.engine.power = 1000;

let objUserTom = {
    nameTom: 'Tom',
    surnameTom: 'Fox',
    ageTom: 20,
    isMaleTom: true,
    sayHi: function() {console.log('Hello!!!');},
    getFullName: function(){return `${this.nameTom} ${this.surnameTom}`;},
    getThis: function(){return this;},
    setNewSurname: function(value){this.surnameTom = value;}
};

let res = objUserTom.getFullName();
console.log(res);
res = objUserTom.getThis();
console.log(res);

// this - указатель на текущий объект

console.log(this);

//у стрелочных функциях нет this

objUserTom.setNewSurname('Smith');
console.log(objUserTom);

/*
создайте объект рабочего у которого есть свойство  год поступления и зарплата
1 сделать метод который вернет стаж (столько лет он работает)
2 если он работает больше 3 лет увеличит зарплату на 15%
*/

let  objEmloyee = {
    name: 'Dima',
    age: 26,
    yearStart: 2015,
    salary: 10000,
    workExpert: 0,
    outStartYear: function(){console.log(this.yearStart);},

    calcWorkExperince: function(){
        const currentYear = new Date().getFullYear();
        this.workExpert = currentYear - this.yearStart;
        return this.workExpert;
    },

    salaryIncrease: function(pr = 15) {
      
        if (this.experience >= 3){
            this.salary *= (100 + pr)/100;
        } 
        return this.salary;
    }
}


// создайте обьект коллекция . свойство start, end. свойство arr . создайте метод который по свойствам начала,конца сгенерирует массив 
// а его количесвво /размер передать как параметр к функции и передавать шаг

const collection1 = {
    start: 0,
    end: 0,
    arr: [],
    generateArray: function (start, n, step) {
        this.start = start;
        let res = [];
        res[0] = start;
        for(let i=1; i<n; i++){
            res[i] =  res[i-1] + step;
        }  
        this.end = res[n-1];
        return res;      
    },
    setArray: function (start, n, step) {
        this.start = start;
        this.arr[0] = start;
        for(let i=1; i<n; i++){
            this.arr[i] = this.arr[i-1] + step;
        }
        this.end = this.arr[n-1];        
    },
getArray: function() {return this.arr; }
};

collection1.generateArray(1, 10, 20);
collection1.setArray(100, 10, 30);
console.log(collection.getArray());

//покупка (объект) начислить 3% скадки если сумма больше 500грн, 5% если сумма больше

objBuy = {
    totalSum: 0,
    sale: 0,
    setSum: function(value) {return this.totalSum=value;},
    addSale: function() { 
        if(this.totalSum >= 1000){
            this.totalSum *= 0.95;
            this.sale = 5;
        } else if(this.totalSum >= 500){
            this.totalSum *= 0.97;
            this.sale = 3;
        } else { this.sale = 0;}
        return this.totalSum;
    }
}

objBuy.setSum(1000);
objBuy.addSale();
console.log(objBuy);


objBuy.setSum(2000);
objBuy.addSale();
console.log(objBuy);

objBuy.setSum(700);
objBuy.addSale();
console.log(objBuy);

objBuy.setSum(100);
objBuy.addSale();
console.log(objBuy);

