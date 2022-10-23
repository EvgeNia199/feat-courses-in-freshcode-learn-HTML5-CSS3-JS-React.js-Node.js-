
// 1 подсчитать сумму нечетных элементов массива 
//1
a = [10,5,6,7,5,1,2,9,10,8,5,20,0,0,0]
function task1(a){
    let sum = 0;
    for (let i=0; i<arr.length; i++) {
        if(a[i]%2 != 0)
        sum = sum + a[i];
       
    }
    return sum;
}
//2
let a = [4,0,8,10,1,0,5,7,5,0,4,6];
function isOdd(value) {
    return value%2 == 1;
  }
  
  let resOdd = a.filter(isOdd); // оставляю только нечетные 
  console.log(resOdd);

  function sumNum(a, b) {
    return a + b;}
    let resSum = resOdd.reduce(sumNum);
    console.log(resSum);

//3

let sum = (a) => a.filter((el, i) => (el%2)).reduce((sumNum, val) => sumNum + val);

//4

// let resOdd = a.filter(isOdd = (value) => value%2 == 1);
// let resSum = resOdd.reduce(sumNum = (a, b) => a + b)
// console.log(resSum);

//5

let sum1 = (a) => {
    let res = 0;
    a.forEach((el) => {
        if(el%2 != 0) res += el;
    }
    )
    return res;
};

//6
// 
let sum3 = (a) => a.forEach((el) => (el%2 !=0) ? el : 0).reduce((accum, val) => accum + val);


// вывести индексы нулевых элементов мвссива 

function task2(a){
    let res=[], i;
    for(i=0; i<a.length; i++){
        if(a[i] == 0){
            res[i] = a[i];
            j++;
        }
    }
return res;
}

// вывести индекс нулевых элементов массива

let nullIndexes = (arr) => {
    let res = [];
    arr.forEach((el, index) => {
        if(el == 0) res.push(index);
    })
    return res;
}

let nullIndexes2 = (arr) => {
    let res = [];
    arr.filter((el, index) => {
        if(el == 0) res.push(i);
    });
}


//  forEach(el, index) if a [i] == 0 ??? push index in res array


// 2 массива соединить и преобразовать в строку

function task3(a1, a2){
    let res = [];
    res = a1.slice();
    for(i=0, j=a1.length; i<a2.length; i++, j++){
        res[i] = a2[i];
    }
    return res.toString();
}

function task3(a1, a2){
    let s1,s2,res;
    s1 = a1.toString();
    s2 = s2.toString();
    res = s1 + s2;
    return res;
}

let task = (arr1, arr2) => arr1.toString()+arr2.toString();

// вывести индекс нулевых элементов массива

let task4 = (arr) => arr.filter(el => el!=0); 
// копирование массива

function f(a){
    let a_copy = a;
    a_copy.push(999);
    return a_copy;
}   
let result = f(x1)

// метод slice делает независимую копию массива незаписимая копия let x1_copy_slice = x1.slice();


// отфильтровать массив без нулей (собрать масив только тех кто не ноль);

function task4(a){
    let res = [];
    for(i=0, j=0; i<a.length; i++){
        if(a[i] !=0 ){
            res[j] = a[i];
            j++;
        }
    }
return res;
}

// напишите функцию которая преобразует первую букву каждого слова в верхний регистр

let str = "каждый охотник желает знать"; 
let words = str.split();
console.log(words);

words[i][0] = words[i][0].toUpperCase();