
//получить элемент по id
let conteinerElement = document.getElementById('container');
//remove - удалить элемент
divContElem.remove();
console.log(conteinerElement);

// стили 
conteinerElement.style.backgroundColor = 'red'


document.querySelector("div#container") // id
document.querySelector('#container') // id
document.querySelector('.ligthP');


//получить все <p> у кого класс orangeP

// let arrayOrangedPa = document.querySelectorAll('p.orangeP');
// for(let i=0; i<arrayOrangedPa.length; i++){
//     arrayOrangedPa[i].style.backgroundColor = 'orange';
//     arrayOrangedPa[i].style.fontSize = '30px';

// }

arrayOrangedPa.forEach(el => {el.style.backgroundColor = 'orange';})

arrayOrangedPa.forEach()

// id #nameid class .nameclass

// arrayOrangedPa.forEach(el => {
//     el.style.backgroundColor = 'orange';
//     el.style.color = 'white';
//     el.style.fontSize = '25px';
// })

// id #nameid  class .nameclass
// document.querySelector('div#container')  //id
// document.querySelector('#container')  //id
// document.querySelector('.ligthP');  // class
// document.querySelector('p.ligthP');  // class
// document.querySelector('div > .ligthP');  // class
// document.querySelector('div#container > .ligthP'); 


//***********2************ */


// создание нового элемента

//1 тег? 2. наполняем  его (содержимое) 3. прикрепить к родителю или body

let  testDiv = document.createElement('div');
testDiv.className = 'test';
testDiv.style.width = '300px';
testDiv.style.height = '100px';
testDiv.style.backgroundColor = 'orange'
let testP = document.createElement('p');
// testDiv.innerHTML = '<p class='innerP'> ssss)</p>';



//добавление node.append(newNode) - в конец
// prepend(newNode) в начало
//before(node), after(node), replaceWith(node) 

document.body.append(testDiv);
document.body.append(testDiv);

// получить див контейнер и туда добавить заголовок и параграф с помощью DOM

let divContElem = document.querySelector('.container');
let h1Elem = document.createElement('h1');
let pElem = document.createElement('p');
divContElem.append(h1Elem);
divContElem.append(pElem);

testDiv.className = 'test';
testP.className = 'test-para';
testP.innerText = '****************'





// arrayItems.forEach((element,i) => {
//     console.log(element);
//     console.log(i);
//     container.appendChild(element);

//     if(highlightedTextIndexes.includes(i)){
//         element.innerText = 'highlightedText';
//         element.style.color = 'red'
//     }else {
//         element.innerText = 'simpleText';
//     }
// })