// калькулятор
class Calc{
    constructor(number1, number2){
        this.number1 = number1;
        this.number2 = number2;
        this.result = 0;
    }
    add(){ this.result  = this.number1 + this.number2; } 
    sub(){ this.result  = this.number1 - this.number2;}
    divi(){ this.result  = this.number1 / this.number2; } 
    mult(){ this.result  = this.number1 * this.number2; }
    answer() { console.log('Answer is ', this.result);}    
 };
 
 let test = new Calc(10,20);
 test.add();
 test.answer();

 //usersArr.forEach(el => map.set(el.login, el)); 

 //for (let i = 0; i<usersArr.length; i++){
    //     map.set(usersArr[i].login, usersArr[i])
    // };

// array.filter((el, ind) => ind === array.indexOf(el)) без повторов элементов

//изменить пароль
class User {
    constructor(login, password){
        this.login = login;
        this.password = password;
    }
    outTest(){
        console.log(this.login, ': ', this.password);
    }
    updatePassword(newPassword){
        this.password = newPassword;
    }
};

const obj1 = new User('vasya', 'qazzaq');
obj1.outTest();
obj1.updatePassword('455jjjgfv');

// обновить поле или прочитать значение свойства 
// get - получить , set - установить или обновить
// # - закрыть доступ
// _ - служебные поля


    class User1 {
        constructor(login, password, fullname = 'uknown'){
            this.fullname = fullname;
            this._login = login;
            this._password = password;
        }
        test(){
            console.log(this.login, ': ', this.password);
        }
        set password(value){
            this._password = value;
        }
        set login(value){
            this._login = value;
        }
        get password(){
            return this._password;
        }
        get login(){
            return this._login;
        }
    };

    let obj2 = new User1('vasya', 'qazzaq');
    obj2.password = ('admin');
    obj2.test();

    // class User {
    //     constructor(login, password, fullname = 'uknown'){
    //         this.fullname = fullname;
    //         this._login = login;
    //         this._password = password;
    //     }
    //     test(){
    //         console.log(this._login, ': ', this._password);
    //     }
    //     set password(password){
    //         this._password = password;
    //     }
    //     set login(login){
    //         this._login = login;
    //     }
    //     get password(){
    //         return this._password;
    //     }
    //     get login(){
    //         return this._login;
    //     }
    // };

    // let obj2 = new User('vasya', 'qazzaq');
    // obj2.password = ('admin');
    // console.log(obj2.password);
    // obj2.test();


    // НАСЛЕДОВАНИЕ КСЛАССОВ

    class Animal {
        constructor(name) {
          this.speed = 0;
          this.name = name;
        }
        run(speed) {
          this.speed = speed;
          console.log(`${this.name} бежит со скоростью ${this.speed}.`);
        }
        stop() {
          this.speed = 0;
          console.log(`${this.name} стоит.`);
        }
      }
      
      let animal = new Animal("Мой питомец");

// ребенок класс узконаправленная
      class Rabbit extends Animal {
        constructor(name) {
            super();
          this.name = name;
        }
        hide() {
          console.log(`${this.name} прячется!`);
        }
      };
      
 let rex = new Animal('rex');
 rex.run(10);
 rex.stop();

 let krolik = new Rabbit('Krolik');
 krolik.hide(); //личный метод
 krolik.run(2); // возможность от родителя
 krolik.stop() // возможнось от родителя

//  User - класс родитель login, password
//   Buyer - класс ребенок (наследник) tel, address
//   Worker - дочерний класс  exp, salary, category

class User2{
    constructor(login, password){
        this.login = login;
        this.password = password;

    }
    updatePassword(value){
        this.password = value;
    }
}

class  Buyer extends User2{
    constructor(tel, address){
        super(login, password);
        this.tel = tel;
        this.address = address;
    }
    diliAddress(){
        return this.address+','+this.tel;
    }

}

class Worker extends User {
    constructor(login,password, exp, salary, category){
        super(login, password);
        this.exp=exp;
        this.salary=salary;
        this.category=category;
    }
    infoWorker(){
        console.log(this.category, ':', this.salary);
    }
}

const worker1 = new Worker('workerlogin', '12321', 5, 1000, 'categor');
worker1.infoWorker();
worker1.updatePassword('admin');
console.log('worker1');

// систему классов ошибок
// systemError - fild:  msgError, codeError
// child classes:
// 404 not found
// 401 unauthorized
// 500 internal server error


class systemError{
    constructor(status, msg){
        this.status = status;
        this.msg = msg;
    }
    getErrorMesage(){
        return `${this.status}: ${this.msg}`
    }
}

class NotFoundError extends SyntaxError{
    constructor(status = 404, msg = 'Not Found'){
        super(status, msg);
    }
}

// обработка ошибок

// try{
//     color;
// }catch(error){
//     console.log(error.name);
//     console.log(error.message);
// }
// console.error('Your error: ',error);

let myError = new Error ("I gen my first error :) ");

function divTwoNumber(a, b){
    
    if(b == 0) {
        throw new Error('b must be not zero');
    }
    return a/b;
}

console.log(divTwoNumber(10,20)); 
console.log(divTwoNumber(10,0)); 

try {
    throw new Error('Уупс!');
  } catch (e) {
    console.log(e.name + ': ' + e.message);
  }

  let myError1 = new Error ("I gen my first error :) ");


  function divTwoNumber(a,b){
    try{
        if(b == 0){
            throw new Error('Second number must be not zero');
        }
    } catch(e){
        return 0;
    }
    return a/b;
}

// class RangeValidator
// fileds : from , to
// methods: 
// 1. range - вернет массив стартовый limit и конечный limit  [5,12]
// 2. validate - проверяет входит ли число в єтот диапазон

//  RangeValidator(5,12);
//  validate(8)


//  RangeValidator(12,5);   --- > RangeValidator(5,12);

//проверка на число
function f(value){
    if(!Number.isNaN(value) && Number.isFinite(value) && value !=0){}
}

class RangeValidator{
    constructor(from, to){
        this.from = from;
        this.to = to;
    }
    range() {
        return [this.from, this.to];
    }
    validate(value){
        if(value >= this.from && value <= this.to) return true;
        return false;
    }
}



class RangeValidator {
    constructor(from, to) {
        if(Number.isNaN(from) || !Number.isFinite(from)){
            throw new Error('Error. Number TO is wrong');
        }
        if(Number.isNaN(to) || !Number.isFinite(to)){
            throw new Error('Error. Number FROM is wrong');
        }
        this.from = from;
        this.to = to;
    }
    range() {
        if(this.from > this.to) {
            let copy_from = from;
            this.from = this.to;
            this.to = copy_from;
        }
        return [this.from. this.to];
    }
    validate(value){
        if(value >= this.from && value <= this.to) return true;
        return false;
    }
}



function f(value){
    if(!Number.isNaN(value) && Number.isFinite(value) && value != 0){
        // some code
    } else {
        throw new Error('Wrong value');
    }
}


/* Задание. Автор и его работы 
класс Автор (внутри) работы name author
метод добавления новой работы (id, name, date)
*метод удаления работы по id
сколько работ у Автора
сколько всего авторов в базе  */


class Author{
    static countAuthors = 0;

    constructor(name){
        this.name = name;
        this.books = [];  // [{}, {}, {}, {}, {} ]
        this._id = 0;
        Author.countAuthors ++;
    }
    addBook(name, year){
        this._id += 1;
        const newBook = {
            id: this._id,
            name: name,
            year: year
        };
        this.books.push(newBook);
    }
    getCountBooks(){
        return this.books.length;
    }
    outBooksForAuthor(){
        console.log(this.books);
    }
    
}

let author1 = new Author('Vasya');
author1.addBook('name1', 2020);
author1.addBook('name2', 2021);
author1.addBook('name3', 2022);
author1.addBook('name4', 2022);

console.group('author 1');
console.log("count author's books = ",author1.getCountBooks());
console.log('count authors in DB = ', Author.countAuthors);
author1.outBooksForAuthor();
console.groupEnd();

let author2 = new Author('Joht Smith');
author2.addBook('funny', 2020);
author2.addBook('fox', 2021);

console.group('author 2')
console.log("count author's books = ",author2.getCountBooks());
console.log('count authors in DB = ', Author.countAuthors);
author2.outBooksForAuthor();
console.groupEnd();

let author3 = new Author('Tom Fox');
author3.addBook('hello js', 2019);
author3.addBook('java script', 2022);

console.group('authors 3')
console.log("count author's books = ",author3.getCountBooks());
console.log('count authors in DB = ', Author.countAuthors);
author3.outBooksForAuthor();
console.groupEnd();