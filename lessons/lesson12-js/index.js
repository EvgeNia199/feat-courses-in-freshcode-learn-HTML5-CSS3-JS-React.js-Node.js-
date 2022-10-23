// Array
// let a = [];
// let b = [1,2,3,4,5];
// a.length - сколько элементов

// массив с [10,20,30,40,50]
// индекс    0  1   2  3  4 
//  с.length - 5

// a[0]
// a[1]
// a[a.length-1] last 50 (index 4)
// a[0]=100 //[100,20,30,40,50]
// a[a.length] = 60 // last 60 (index 5)

// for(let i=0; i<a.length; i++){
//   console.log(`index ${i} element ${a[i]}`);
// } 

// 1. создать массив чисел [4, 0, -1, -5, 3.14, 0, 0, 100, -4, 2.45, 4, 0, 4]
// вывести в консоль
// 2. найти и вывести все отрицательные числа массива <0
// 3. посчитать сколько получилось отрицательных чисел (счетчик)
// 4. сохранить результаты работы (в массив)
// 5*.  заменить все отрицательные элементы в исходном массиве на 0 

let a = [4, 0, -1, -5, 3.14, 0, 0, 100, -4, 2.45, 4, 0, 4];
console.log(a);

let countBelowZeroEls  = 0, arrayElBelowZero = [], arrayIndexesElBelowZero = [] ;
for(let i=0; i<a.length; i++){
    if( a[i] < 0){
        //console.log(a[i]);
        arrayElBelowZero [countBelowZeroEls] = a[i];
        arrayIndexesElBelowZero [countBelowZeroEls] = i;
        countBelowZeroEls++;
        a[i] = 0;
    }
}

console.log(`countBelowZeroEls = ${countBelowZeroEls}`);
console.log(arrayElBelowZero);

// подсчитать сумму 

function sumElsArray(a){
    let sum = 0;
    for(let i=0; i< a.length; i++){
        sum += a[i];
    }
    return sum;
}

let a1 = [1,2,3,4,5], a2 = [10,20,30], a3 = [-4, 2, 0, 3.14, 15];
let result;
result = sumElsArray(a1);
console.log(result);
result = sumElsArray(a2);
console.log(result);
result = sumElsArray(a3);
console.log(result);

// принять массив, вернуть массив у которого отрицательные элементы
// превратить в ноль

function task1(array){
    let countBelowZeroEls  = 0, arrayElBelowZero = [], arrayIndexesElBelowZero = [] ;
    for(let i=0; i<a.length; i++){
        if( a[i] < 0){
            //console.log(a[i]);
            arrayElBelowZero [countBelowZeroEls] = array[i];
            arrayIndexesElBelowZero [countBelowZeroEls] = i;
            countBelowZeroEls++;
            array[i] = 0;
        }
    }
    
    console.log(`countBelowZeroEls = ${countBelowZeroEls}`);
    console.log(arrayElBelowZero);
    console.log(arrayIndexesElBelowZero);
    return array;  
}

result = task1(array);
console.log(result);

// написать функцию которая возвращает все элементы массива не превышает заданный порог

function arrayTask1(array, limit){
    let result = [], i, j=0;
    for(i=0; i<array.length; i++){
        if(array[i] <= limit){
            result[j] = array[i]
            j++;
        }
    }
    return result;
}

function arrayTask2(array){
for(let i=0; i<array.length; i++){
    if(array[i] > 0){
        result += array[i];
    }
}
    return result;
}

function arrayTask3(array){
    for(let i=0; i<array.length; i++){
        array[i] = array[i] ** 2
          
        
    }
        return array;
    }


let  res;
res = arrayTask1(a, 10);
console.log(a);
console.log(res);
res = arrayTask2(a);
console.log(res);
res = arrayTask3(a);
console.log(res);

// развернуть массив наоборот

function arrayTask4(array){
    let res = [];
    for(let i=array.length-1, j=0; i>=0; i--, j++){
        res[j] = array[i];
    }
    return res;
}

function arrayTask4(array){
    let res  = [];
    for(let i=0, j=array.length-1; i < array.length;  i++, j--){
        res[j] = array[i];
    }
    return res;
}

// функция которая считает сумму отрицательных элементов массива 
// она должна использовать (вызвать) 2 функции
// 1 находит и возвращает отрицательные элементы массива
// 2 считает сумму массива


function sumArray(a){
    let sum = 0;
    for(let i=0; i<a.lenght; i++ ){
        sum += a[i];
    }
    return sum;
}

function returnArrayElsBelowZero(a){
    // вернет набор элементов меньше нуля
    let result = [], j, i;
    for(i=0, j=0; i < a.lenght; i++ ){
        if(a[i] < 0 ){
            result[j] = a[i];
            j++;
        }
    }
    return result;
}


function sumElsBelowZero(array){
    let arrayEls = returnArrayElsBelowZero(array);
    let res = sumArray(arrayEls);
    return res;
}
console.log(sumElsBelowZero([1,2,-1,-5,0,3,-4,6]));



    // function sumArray(array){
    //     let countBelowZeroEls  = 0;
    //     for(let i=0; i<a.length; i++){
    //         if( a[i] < 0){
    //             console.log(a[i]);
              
    //         }
    //     }
        
    //     console.log(`countBelowZeroEls = ${countBelowZeroEls}`);
    //     return array;  
    // }

// если число четное то умножить на 2

    function isEvenNumber(number){
        if(number%2 == 0) /*возвращает четное число */ return true;
        return false;
    }
    function task(number){
        // if(isEvenNumber(number) == true)
        if(isEvenNumber(number))
        {
            number = number * 2;
        }
        return number;
    }
    let res1;
    res = task(5);
    console.log(res1);
    res = task(6);
    console.log(res1);

// написать функцию которая вернет min и max элемент массива

function maxEIOArray(array){
    let max = array[0];
    for(let i=0; i<a.lenght; i++ ){
        if(a[i] > max){
            max = a[i];
        }
    }
    return max;
}

function minEIOArray(array){
    let min = array[0];
    for(let i=0; i<a.lenght; i++ ){
        if(a[i] < min){
            min = a[i];
        }
    }
    return min;
}

/*Область видемость
Лексическая область видимости. Лексическое окружение*/

// поднятие переменных и замыкание 


/*
ВИДЫ ФУНКЦИИ (3 вида)
1. function definition
function fnName(param1, param2, param3, ...){
    return result;
}

2. function expression 
const funName = function(param1, param2, param3, ...){
     return result;
}

3. arrow function
const funName = (param1, param2, param3, ...) =>{
     return result;
}
*/
