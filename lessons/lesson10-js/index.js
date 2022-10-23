// let, const 


// if(условие){
//     действие если условие выполняется
// }else if (условие2){
//     действие если условие выполняется
// }else{
//     все другие варианты
// }

//если четное то умножить на 2, нечетное - поделить на 2
// && и   || или

let value = 100;
if(value%2 == 0){
    value * 2;
}else{
    value /= 2;
}

// если четное и больше 100 то умножать на 2, нечетное поделить на 2

if(value%2 ==0 && value >= 100){
value * 2;
}else{
    value /=2;
}

//если число меньше 10 вычесть 1 из него если от 10 до 100 вычесть 5, если больше 100 поделить 2

if(value < 10){
    value --;

}else if (value >= 10 && value < 100){
    value - 5;
}else if(value >= 100){
value / 2;
}else{
    console.log("Error")
}


//-M ...9.9 value = value -1
//10....99.9 value = value -5
//100 ....M  value = value / 2

// for (начальное, условие; конечное условие; шаг){
//     действие
// }

// for num = 1, result =0;
// for(num; num<=100; num = num +1){
//     result = result + num;
// }

// найти произведение чисел от 2 до 8

// result = 1;
// for(num=2; num<=8; num++;){
//     result * num;
// }
// console.log(result);

//найти сумму нечетных чисел от 10 до 50
//1
// result = 0;
// for(num=10; num <= 50; num++){
//     if(num%2 == 1){
//         result + num;
//     }
// }

//2

// for(n=10; n<=50; n++){
//     if(num%2 == 1){
//         result + num;
//     }
// }


//сумма чисел от 1 до 10
let n, res=0;
for(n=1; n<=10; n++){
    res + n;
}
console.log("FOR:", res);


n=1, res=0;
while(n<=10){
    res + n;
    n++;
}

// вывестит числа от 5 до 0

a = 5;
while(a>=0){
    console.log(a);
    n-1;
}

for(n=5; n>=0; n--){
    console.log
}

z=5;
do{
    console.log(n);
    n = n-1;
}while(z>=0);

//выводить их квадраты

// b = 5;
// while(a>=){
//     b = b^2;
//     console.log(b)
//     b * 2;
// }

//Задача. Циклом . Выйти когда сумма чисел превысит 100. дополнительно посмотреть на каком числе остановились

let m = 1;
let sum = 0;
while(true) {
    sum +=m
    if (sum > 100) break;
    m++;
}
console.log(n);

sum = 0;
for(n=1; ; m++){
sum += m;
if(sum > 100) break;

}
console.log(n);
console.log(m);

//бесконечный цикл
// while(true){}
//for(;;){}

n = 10000;
do{
    console.log(`aaaaa ${n}`);
}while(false);


let userValue = +prompt("Введите номер месяца", );
let result;
if(userValue == 1){
    result = 'Январь';
}else if(userValue == 2){
    result = 'Февраль'
}else{
    result='нет такого месяца'
}

switch(userValue){
    case 1: result = 'Январь'; break;
    case 2: result = 'Февраль'; break;
    default: result = 'нет такого месяца'; break;
}

//

let value1 = +prompt('Сколько будет 2+2' );
if (value1 === 4){
    console.log('Вы правы')
}else{
    console.log('Не правы')
}


//попросить ответить сколко будет 2+2
//1
let value2;
do{
    value2 = +prompt('Сколько будет 2+2' );
}while (value2 == 4);

//спрашивать пока он не решит правильно 

result = 0;
for(num=10; num <= 50; num++){
    if(num%2 == 1){
        result + num;
    }
}

while(true){
    answer = prompt('2+2=?');
    if(answer == result){
        alert('bingo');
        break;
    }
    alert('Sorry ')
}

// let number = 1, limit = 20, res =0;

// for(number=1; number <= limit; number = number + 2){
//     res = res + number;
// }

// number = 1, res =0;
// while(number <= limit) {
//     res = res + number;
//     number = number + 2;
// }

//

let a, b;
a = 1;
b = 1;
result = a+b;

function add(a, b){
    let result = a+b;
    return result;
}

let r;
r = add(2, 3);
console.log(r);


function print(value){
    console.log(value);
}

function add(a, b){
    let result = a-b;
    return result;
}


let val1, val2;
val1 = +prompt('Введите число 1')
val2 = +prompt('Введите число 2')
console.log('+', add(val1+val2));

//вывести сообщение столько раз сколько задает пользователь

function repeatMsg(msg, n){
    while(n>0){
        console.log(msg)
        n--;
    }

}
repeatMsg('Hello, Vasya!', 5 );


function printStarts(symbolStr, countMax){
    let i, str='';
    for(i=1; i<=countMax; i++){
        str + symbolStr;
    }
    // console.log(str);
    return str;
}
let result1;
result1 = printSymbols('*', 5);
console.log(result1)


//по умолчанию
function printStarts(symbolStr, countMax = 1){
    let i, str='';
    for(i=1; i<=countMax; i++){
        str + symbolStr;
    }
    // console.log(str);
    return str;
}

result1 = printSymbols('*');
console.log(result1)


//по умолчанию c ошибкой, значение по умолчанию должно быть в конце
function printStarts2(countMax = 1, symbolStr){
    let i, str='';
    for(i=1; i<=countMax; i++){
        str + symbolStr;
    }
    // console.log(str);
    return str;
}

result1 = printSymbols('*');
console.log(result1)

//ввывести все числа кратные 5 в указаном диапазоне пользователем

function task1(minLimit, maxLimit){
    let num;
    for(num = minLimit; num <= maxLimit; num++){
        if(num %5 == 0){
            console.log(num);
        }
    }
}

//функция проверяет сумму двух указанных чисел 

function task2(number1, number2, answer){
    if(number1 + number2 == answer){
        return true;
    }
    return false;
}

let answer = +prompt('2+2=?');
let res1;
task2(2,2, answer);
if(res == true){
    console.log('yes');
}else{
    console.log('no')
}


