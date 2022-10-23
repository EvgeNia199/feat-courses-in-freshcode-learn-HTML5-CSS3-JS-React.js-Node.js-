// 1 Вывести знак * столько раз сколько задаст пользователь

function repeatMsg(num) {
  const msg = "*";
  while (num > 0) {
    console.log(msg);
    num--;
  }
}
repeatMsg(5);


// 2 Вывод чисел от limit1 до limit2, которые кратны num

function task2(limit1, limit2, multipleNum) {
  for (let num = limit1; num <= limit2; num++) {
    if (num % multipleNum === 0) {
      console.log(num);
    }
  }
}

task2(10, 99, 10);

// 3 Сумма четных элементов массива

function sumEvenElsArray(array){
  let sum = 0;
  for(let i=0; i< array.length; i++){
    if(array[i]%2 == 0){
      sum += array[i];
    }
  }
  return sum;
}

let  array1 = [1,,12 , 4,1 ], array2 = [10,20,30], array3 = [-4, 2, 0, 3.14, 15];
let result;
result = sumEvenElsArray(array1);
console.log(result);
result = sumEvenElsArray(array2);
console.log(result);
result = sumEvenElsArray(array3);
console.log(result);

// 4 Обнулите все элементы массива меньше 10

function task4(array, num = 10){
  let countBelowTenEls  = 0, arrayElBelowTen = []; 
  for(let i=0; i<a.length; i++){
      if( a[i] < num){
          arrayElBelowTen [countBelowTenEls] = array[i];      
          countBelowTenEls++;
          array[i] = 0;
      }
  }
  
  return array;  
}
// itogo 19 100 - 8
let a = [4, 0, -1, -5, 3.14, 0, 0, 100, -4, 2.45, 4, 0, 4, 11, null, undefined, '', 'a', 10, 15.9999999999999999999999999999999];
//let result;
result = task4(a);
console.log(result);
console.log('a',a);

// 5 Напишите функцию, которая дополняет нулями целое число до оказанной длины. Поработайте вариант с отрицательными числами. Например, fun(-4,6) вернет строку -000004

function task5(num, len) {
  let lenZero = len - (num).toString().length,  numZero = '';
    for ( ; lenZero > 0; lenZero--) {
      numZero += 0;
    }
      
    return  numZero + num ;
  }
  let res;
res = task5(145, 5);
console.log(res);


// 6 соедините два массива в один большой

let fruit = ["Яблоко","Персик"];
let vegetable = ["Огурец","Капуста"];

const task6 = (array1,array2) => [...array1, ...array2]; // дисктуризация
// function task6(array1, array2){
//   return [...array1,...array2]
// for(let i = 0; i < array2.length; i++ ){
//   array1.push(array2[i]);
// }
// return array1;
// }

//let res;
//const [r0, r1, r3,,,...rest] = res;
// undefined
// r0
// 1
// r1
// 2
// r3
// 3
// rest
// (2) [20, 30]
// res
// (7) [1, 2, 3, 4, 10, 20, 30]
// res = task6(fruit, vegetable);
// console.log(res);
