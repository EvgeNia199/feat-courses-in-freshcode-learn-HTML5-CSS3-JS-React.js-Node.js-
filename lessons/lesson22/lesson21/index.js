{/* <ul id="slider" class="container">
</ul>
imagesArray = ['http://......jpg', '../img/pic1.png', '', '', ];

const slider = document.getElementById('slider');
const slides = makeSlides(imagesArray);
//const slides = makeSlides(imagesArray, 5, 10);
slider.append(slides);
function makeSlides(arrImages, startIndex=0, endIndex=arrImages.length){
let slides = [], slide;
for(i=startIndex; i<endIndex; i++){
   slides[i] = document.createElement('li'); 
   slides[i].setAttribute('class','slide');
   slide = document.createElement('img');
   slide.setAttribute('src',arrImages[i]);
   slides[i].append(slide);    
}
return slides;
} */}

let reg1 = new RegExp('s$') // создает регулярное выражение 
// \n - новоя строка
// \f - новоя страничка
// \t - табуляция
// \s - пробел
// \S все символы кроме пробелов
// \d цифра
// \D все кроме цифры
// \w латинские буквы ниж и вер регистр, цифры, _
// \W все кроме \w
// .  любой символ
// [^] любой кроме из того что есть в наборе
// [A-Z] любая заглавная
// \d{2} комбинация двух чисел
// \d{2,8} от 2 до 8 кол во чисел
// \d{2,} от 2 до бесконечности 
// + аналог {1,}
// * аналог {0,}
// ? аналог {0,1}
// ^ начало строки
// $ конец строки
// [A-Z]$ последняя буква заглавная в конце строки

// RegExp  
// .  любо символ 
// [] набор пр, [abc]  символ a или b или c 
// [^] любой символ кроме того кто в наборе 
// [A-Z] символ из диапазона (здесь это больш.буква) 
// {3} повтор 3 раза 
// {3,} повтор от 3 до бесконечности 
// {3,5} повтор от 3 до 5 
// + аналог {1,} 
// * аналог {0,} 
// ? аналог {0,1} 
//   
// ^ начало строки 
// $ конец строки 
//  
// \n новая строка 
// \t табуляция 
// \s пробел 
// \S все кроме пробела 
// \d цифра 
// \D все кроме цифры 
// \w латин. загл или мален. буква, цифра, _ 
// \W все кроме \w 
// () ищет слово 
//  \b граница слова
//  | или

// .+?A работает до первой буквы а

// ----------------------- 
// let reg1 = new RegExp("выражение"); 
// let reg2 = /выражение/;

// [A-Z] заглавная буква
// .+[A-Z] любой символ любое кол во раз 
// .{1,3} символ от 1 до 3

// все гласные 
// [aieou]

// все согласные 
// [^aieou]

// p гласная t
// \p[i,a,e]t

// найти чтсла
// \d

// найти 2 числа
// \d \d

// найдет все сайты с googl.com
// \google\.{1}\com

// coment //
// \/\/.*

// найти {obj}
// \{([^{}]*)\}
// \{([^\{\}]*)\}

//найти слова которые разделены , |

// \w+[,|] (\w+) любое слово


// найти 1.2.3.4
// \d\.\d\.\d\

// 100.219.250.054
// (\d+\.)+\d+

//?param1=value1
// ?param1=value1&param2=value2

// ^\?\w+\=\w+(\&\w+\=\w+)*
// ^\?\w+\=\w+(?:\&\w+\=\w+)?

// почта с проверкой
// (?<!@)[A-Za-z0-1]+@[a-z]+(\.[a-z]+){1,2}?

//без проверки
// ^[^@][A-Za-z0-1]+@[a-z]+(\.[a-z]+){1,2}$

// задается в js 
// const regex1 = /\w+/;
// const regex2 = new RegExp('\\w+');

//комбинация пароля
//(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#%\+\*;\.])^.{6,12}$

const r = /[a-z]+/g;
const s = 'Hello Java script regExp 123 !';

console.log(r.test(s));
// test вернет true/false

//поиск
//1 match / matchAll
//2 search

console.log(s.search(r));

console.log(s.match(r));


const regColor = /\#[A-F0-9]{6}/g;
const arr = ['#112233', '#FA34B2', 'BB1122', '#ab1122', '112233'];

for(let i=0; i<arr.length; i++){
    console.log(i,regColor.test(arr[i]));
}


console.log('#112233'.match(regColor));

// методы
// regExp.test(str)
// str.search(regExp) занимается поиском
// str.match(regExp) занимается поиском
// str.matchAll(regExp) вернет массив
