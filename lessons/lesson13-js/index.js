// Объекты

let Barsik = {
    name: 'Barsik',
    color: 'multicolor',
    age: 3,
}

const userTom = {
    name: "Tom",
    surname: "Fox",
    lang: ['ua', 'en', 'it'],
    car: {model: 'zaz', year: 2022, color: 'blue'},
};

let user1 = {
name: 'Tom',
sayHello: function() {console.log('Hello');}
};
 user1.name

let phone = {
    model: "Samsng A51",
    ageRelease: '2020',
    color: 'bllu'
}

let a = [10, 20, 30, 40, 50, 60, 70, 80, 90]

a.splice(2, 3)
console.log(a)

a.splice(2, 2, 9999)
console.log(a)
a.splice(-1, 2, 'banan')
console.log(a);

a.splice(-2, 2)
console.log(a)
a.push(20, 30, 80, 90, 100)
console.log(a);
a.splice(4, 3)
console.log(a);
a.splice(-6, 3)
console.log(a);

// a.slice(0, a.indexOf(0))
// console.log(a);

// a.splice(-a.indexOf(0), a.length-a.indexOf(0))

let b = [1,2,3,2,4,5,8,9,4,2,4]
b.fill('*', 3)
console.log(a);

function isAdultGroup(arr) {
    for(let i=0; i<arr.lenght; i++){
        if(arr[i]<18) return false;
    }
    return true;
}
isAdultGroup(b);

// больше 18

// every 
function isBigEnough(element, index, array) {
    return element >= 18;
  }

  [12, 5, 8, 130, 44].every(isBigEnough);  
[12, 54, 18, 130, 44].every(isBigEnough); 
// some

function isSomeAdult1(arr) {
    for(let i=0; i<arr.lenght; i++) {
        if(arr[i] >= 18) return true;
    }
    return false;
}
isSomeAdult1(b);

function isSomeAdult2(el, i, arr){
    return el >= 18;
}
console.log(b.some(isSomeAdult2));

// every Метод every() проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции
// some Метод some() проверяет, удовлетворяет ли какой-либо элемент массива условию, заданному в передаваемой функции.

// все положительные числа 

function positiveEl(el,i,arr){
    return el>=0;
}

console.log(a1.every(positiveEl));

// все четные числа

//findIndex

// число превысит 10

function NumBiggerThan10(element, index, array) {
    if(el > 10) return true;
    return false;
}
let a1 = [4,1,0,-5,11,20,5,10]
console.log(a1.findIndex(NumBiggerThen10));

// ncludes
console.log(a1.includes(NumBiggerThen10));

// forEach

// увелиить каждый элемент на 3%


//reduce

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
function f(previousValue, currentValue) {
    return previousValue + currentValue;
}
const total = array1.reduce(f,initialValue);
console.log(totall)

//console.log(sumWithInitial);
// expected output: 10


function addZerosNum(num, countZeros) {
    let i, res = [];
    if(num<0){res[0]='-';}
    else{res[0]='+';}
    for(i=1; i<=countZeros; i++){
        res[i]+='0';
    }
    res += Math.abs(num);
    return res;
}

// массив словю. найти слова больше 4 символов

// const words = ['hello', 'Vasya', 'Oh', 'fox', 'JS', 'array'];

// function task1(element, index, array){
//     return element > "4".length
// }

// ['hello', 'Vasya', 'Oh', 'fox', 'JS', 'array'].some(task1);



let words = ['hello', 'Vasya', 'Oh', 'fox', 'JS', 'array'];
words.trim()