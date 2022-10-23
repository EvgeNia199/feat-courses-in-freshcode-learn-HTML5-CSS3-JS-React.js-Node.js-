// 1. Определите переменные со значениями 11, true, "java script", "100" и выведите их в консоль


const val1 = 11;
const val2 = true;
const val3 = 'java script';
const val4 = '100';

console.log(val1, val2, val3, val4);


// 2. Создайте переменные greeting со значением'Hello, ' и userName. Спросите имя пользователя и занесите данное значение в переменную userName. С помощью диалога выведите сообщение с приветствием. Например, 'Hello, Vasya!'.

function showMessage (){
    const greeting = 'Hello, ';
    const userName = prompt('Введите имя');
    const message = greeting + userName;
    alert(message);
}
showMessage();

// 3. Определите в какую четверть часа попадает ввыденное количество минут пользователем (например, 40 минут - 3-я четверть часа)

function user(min) {
    const firstHalf = 15;
    const secondHalf = 30;
    const thirdHalf = 45;
    const forthHalf = 60;
    switch (true) {
      case 0 <= min && min <= firstHalf:
        console.log("1-я часть");
        break;
      case firstHalf <= min && min <= secondHalf:
        console.log("2-я часть");
        break;
      case secondHalf <= min && min <= thirdHalf:
        console.log("3-я часть");
        break;
      case thirdHalf <= min && min <= forthHalf:
        console.log("4-я часть");
        break;
      default:
        console.log("Error");
    }
  }
  user(10);
  user(20);
  user(35);
  user(60);
  user(100);
  
  
//4. Вывод чисел от 10 до 50, которые кратны 5


function task1(){
    const value1 = 10;
    const value2 = 50;
    for(num = value1; num <= value2; num++){
        if(num %5 == 0){
            console.log(num);
        }
    }
}

task1();

// 5. Найти произведение чисел в пределах от lim1 до lim2 (например, если lim1=5 и lim2=12 то это произведение чисел от 5 до 12).
//6.  Задание 5 оформите функцией


function task3(lim1, lim2){
    const res = 1;
    for(num = lim1; num <= lim2; num++){
       res *= num; 
       console.log(res);
    }
}
a = task3(5, 10);
console.log(a)


