
// вывести числа от 5 до 1
// 1
for (let i = 5; i > 1; i--) { 
    alert(i);
  }

  // 2

  let i = 5;
  while (i > 1) { 
    alert( i );
    i--;
  }

  while(true){
    console.log(num1);
    num1--;
    if (num1>=num2) continue;
    break;
}

  function task2(limit1, limit2){
    let num,result =1;
    //1
    for(num=limit1; num<=limit2; num++){
    result *= num;
    }
    //1
    for(limit1; limit1<=limit2; limit1++){
    result *= limit1;
    }
    //2
    while(limit2 >= limit1){
    result *= limit1;
    limit1++;
    }
    return result;
    }

    // сделать бесконечный вызов пока пользователь не захочет выйти 

    function dropMenu(menu=prompt('1=з№1 2=з№2 3=з№3 4=з№4')){
        switch(menu){
            case '0':console.log('Exit'); break;
            case '1':console.log('Hello'); dropMenu(); break;
            case '2':console.log('Hello'); dropMenu();break;
            case '3':console.log('Hello'); dropMenu();break;
            case '4':console.log('Hello'); dropMenu();break;
            default:alert('Нет такого значения:-/');dropMenu();
        }
    }
    dropMenu();

    // Массивы

    let array0 = [];
    let array1 = [100, 120, 6, 320, 15];
    array1[0];

    let array2 = ['q', 'a', 'z'];
    array2[0];
    array2[1];
    array2[2];
let size = array2.length;

// вывести массив
//1

console.log(array2)

//2
// i - index 0...2
for(let i = 0; i < array2.length; i++){
    console.log(array2[i]);
}

//  обьявить массив из 5 чисел и каждое увеличить в 2 раза

let array3 = [1, 2, 3, 4, 5];

for(let i = 0; i < array3.length; i++){
   // console.log(array3[i]*2);
   array3[i] *= 2; 
}
console.log(array3)

// замена элемента массива

array1[0] = 95;

// обнулить элемент
array1[1] = 0;


let array4 = [1, 2, 3, 4, 5];

for(let i = 0; i < array4.length; i++){
   array4[i] = +100; 
}
console.log(array4)

// вывести массив наоборот 
//1
let myArray = ['один', 'два', 'три'];

myArray.reverse();
console.log(myArray)

//2

for(i = array4.length-1; i>=0; i--){
    console.log(array4[i]);

}
// вывести элементы с нечетными индексами  

for(i = 1; i<array4.length; i = i + 2){
    console.log(array3[i]);

}

// выведите элементы с четными индексами

for(i = 0; i<array4.length; i = i + 2){
    console.log(array4[i]);

}

// четные элементы массива

for(i=1; i<array4.length; i++){
    if(array4[i] %2 == 1){
        console.log(array3[i]);
    }
}

// вывести индексы нулевых элементов 

let array5 = [100, 0, 0, 300, 0, 500, 600, 0, 0]
for(i=0; i<array5.length; i++){
    if(array5[i] == 0){
        console.log(i);
    }
}

let countZeros = 0;
for(i=0; i<array5.length; i++){
    if(array5[i] == 0){
        countZeros++;
    }
}

// вывести все первые элементы массива до первого нуля и подсчитать количество 

let a = 0;
for(i=0; i<array5.length; i++){
    if(array5[i] == 0) break;
    console.log(array5[i]);
    a++;
}
console.log(a);

// сумма соседних элементов

let sum = [];
for (i; i < array5-1; i++){
    sum[i] = a[i] + a[i+1];
    console.log(sum);
}
console.log(sum);

// задача 1+2 3+4 5+6....
// сохранить результат
let j, sum1 = [];
for (i=0, j=0;  i < array5-1; i=i+2){
    sum1[i] = a[i] + a[i+1];
    j++;
}
console.log(sum);


// сохранить результат индексов нулевых элементов 
let array6 = [100, 0, 0, 300, 0, 500, 600, 0, 0]
let countZeros1 = [], indexZero;
for(i=0, indexZero=0; i<array6.length; i++){
    if(array6[i] == 0){
        countZeros1[indexZero] = i;
        indexZero++;
    }
}



// а[0] первый элемент массива
// a[1] второй элемент массива
// a[a.length -1] - последний элемент массива
// a[i] - текущий
// a[i+1] - следующий
// a[i+2] - следующий через 1
// a[i-1] - предыдущий