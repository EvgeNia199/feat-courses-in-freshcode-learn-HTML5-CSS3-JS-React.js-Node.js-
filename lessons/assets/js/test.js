// 'use strict'
// const ask  = (question, yes, no) => {
//     if(console.log(question)) yes()
//     else no()
// }

// ask(
//     "Вы согласны?",
//     () => console.log("Вы согласились."),
//     () => console.log("Вы отменили выполнение.")

// )

// const user = {
//     name: 'John',
//     surname: 'Smith',
// }

// user.name = 'Pate'

// delete user.name

//   function isEmpty(obj) {
//     for (var key in obj) {
//       return console.log(false);
//     }
//     return console.log(true);
//   }
  
//   let schedule = {

//   };
  
//   isEmpty(schedule);

// function test(obj) {

// let total = 0;
//     for (let property in obj) {
//     total += obj[property];
// }
// return total
// }
// let salaries = {
     
//   }
// console.log(test(salaries)); 


// function multiplyNumeric(obj) {
// for (let i in obj) {
//     if (typeof obj[i] == 'number') {
      
//        obj[i] *= 2;
//     }
// }
// return obj
// }

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// console.log(multiplyNumeric(menu)); 

// let calculator = {
//   a: 1,
//   b: 1,
 
//   sum(){
//     console.log(this.a + this.b);
//   },
//   mul(){
//     console.log(this.a * this.b);
//   }
// }

// console.log(calculator.mul());

// let ladder = {
//     step: 0,
//     up() {
//       this.step++;
//       return this;
//     },
//     down() {
//       this.step--;
//       return this;
//     },
//     showStep() {
//      console.log( this.step ); 
//       return this;
//     }
//   }
  
//   ladder.up().up().down().up().down().showStep(); // 1

// function Calculator(){
//     this.a = 1;
//     this.b = 1;

//     this.sum = function(){
//         console.log(this.a + this.b);
//     }
//     this.mul = function(){
//         console.log(this.a * this.b);
//     }
// }
// let calculator = new Calculator();
// console.log(calculator.mul() );


// замыкание

// result = []
// for (var i = 0; i < 5; i++){
//     (function(){
//         var j = i
//         result.push(function() {console.log(j)})
//     })()
// }

// result[2]()
// result[4]()

// const person = {
//     surname: 'Stark',
//     knows: function(what, name){
//         console.log('ты' + what + 'знаешь' + name + this.surname );
//     }
// }

// const john = {surname: 'Сноу'}

// person.knows('все', 'Бран')
// person.knows.call(john, 'ничего не', 'Джон')
// person.knows.apply(john, ['ничего не', 'Джон'])
// person.knows.call(john, ...['ничего не', 'Джон'])
// const bound = person.knows.bind(john, 'ничего не', 'Джон')
// bound()

// function Cat(color, name){
//     this.color = color
//     this.name = name
// }

// function myNew(constructor, ...args){
//     const obj = {}
//     Object.setPrototypeOf(obj, constructor.prototype)
//     return constructor.apply(obj, args) || obj
// }

// const cat = myNew(Cat, 'black', 'KOT')
// console.log(cat);


// function Cat(name, color){
//     this.name = name
//     this.color = color
// }

// Cat.prototype.voice = function() {
//     console.log(`Cat ${this.name} says `);
// }

// const cat = new Cat('Kot', 'white')

// console.log(Cat.prototype);
// console.log(cat.__proto__ === Cat.prototype);
// console.log(cat.constructor);


// function Person() {}
// Person.prototype.legs = 2
// Person.prototype.skin = 'white'

// const person = new Person()
// person.name = 'Vladilen'

// console.log('skin' in person);
// console.log(person.legs);

// console.log(person.hasOwnProperty('name'));


// const proto = {year: 2022}
// const myYear = Object.create(proto)

// console.log(myYear.year);
 
// function ucFirst(str) {
//     if (!str) return str;
  
//     return str[0].toUpperCase() + str.slice(1);
//   }

// console.log(ucFirst('sfsfsfsf'));


// function checkSpam(str) {
//   let strToLower = str.toLowerCase();
//   if (strToLower.includes('viagra') || 
//       strToLower.includes('xxx'))
//       {
//           return true;
//       }
//   return false;
// }

// console.log(checkSpam("innocent rabbit"));

// function truncate(str, maxlength) {
//   if (str.length > maxlength) {
//       return str.slice(0, maxlength - 1) + '...';
//   }else{
//   return str
//   }
// }

// console.log(truncate("Всем привет!", 20));

function extractCurrencyValue(str) {
  return +str.slice(1);
}

