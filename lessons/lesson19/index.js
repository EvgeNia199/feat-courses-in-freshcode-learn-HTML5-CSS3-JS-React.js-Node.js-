
let containerElem = document.getElementById('container');
console.log(containerElem);
containerElem.style.background = 'red';

containerElem.innerHTML('<p>hello</p>')


// Получение элементов

// 1 document.getElementById('idElem')
// 2document.querySelector(css)  '.myClass'   '#idElem'   'ul > li:last-child' '.cont > .myClass'
// 3 document.querySelectorAll(css)   return []
// 4 *document.getElementsByTagName()  getElementsByClassName() getElementsByName()
// 5 elem.closest(css)
// 6 elem.matches(css)


// Атрибуты Элемента
// elem.getAttribute(nameAttr)
// elem.setAttribute(nameAttr, valueAttr)
// elem.hasAttribute(nameAttr)
// elem.attributes 

// Создание document.createElement(tag)

// Удаление elem.remove()

// Копирование / клонирование elem.cloneNode()

// Вставка/ добавление
// node.append(elem)
// prepend(elem)
// before() / after()
// replaceWith()
// * appendChild(), insertChild(), replaceChild(), removeChild()

let contElem = document.getElementById('container');
const userTest = {
    login: 'Tom',
    password: 'qazaq'
}

for (var value in userTest) {
    el = contElem.appendChi(document.createElement('p'));
    el.innerText = value;
    contElem.append(el);
  }

  let el;
  let arrText = ['js', 'hello', 'hi'];
  let arrClasses = ['c1', 'c2', 'c3']
//   for(let i=0; i<arrText.length; i++){
//     el = document.createElement('p');
//     el.innerText = arrText[i];
//     el.setAttribute('class', arrClasses[i])
//     contElem.append(el);
//   }

  // создавать новый элемент добовлять текст

 
  arrText.forEach( (el, i, a) => contElem.append( makeElement('p', a[i], arrClasses[i])) );

//   for(let i=0; i<arrText.length; i++){
//     contElem.append( makeElement('p', a[i], arrClasses[i])) ;
//   }

  function makeElement(tag, tagText, tagClass){
    const el = document.createElement(tag);
    el.innerText = tagText;
    el.setAttribute('class', tagClass);
    return el;
  }

// берем содержимое с объекта
// for (var prop in obj) {
//   console.log("obj." + prop + " = " + obj[prop]);
// }



