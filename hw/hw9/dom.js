//1. Создайте 10 параграфов и первым трем дайте класс Выделенный текст, который выделяет текст например фоном.


const arrayItems = [
    document.createElement('p'),
    document.createElement('p'),
    document.createElement('p'),
    document.createElement('p'),
    document.createElement('p'),
    document.createElement('p'),
    document.createElement('p'),
    document.createElement('p'),
    document.createElement('p'),
    document.createElement('p'),
];
const highlightedTextIndexes = [0,1,2];
const container = document.getElementById('container');
for(let i=0; i<arrayItems.length; i++){
    container.appendChild(arrayItems[i]);

    if(highlightedTextIndexes.includes(i)){
        arrayItems[i].innerText = 'highlightedText';
        arrayItems[i].style.color = 'red'
    }else {
    arrayItems[i].innerText = 'simpleText';
    }
    
}


//2. Создайте список. В каждый элемент списка напишите текст свой, например дни недели или цвета радуги.
//2* выделите каждый элемент списка случайным цветом поменяв ему цвет текста или фон

const list = document.createElement('ul');
container.appendChild(list)
const arrayList  = [
    document.createElement('li'),
    document.createElement('li'),
    document.createElement('li'),
    document.createElement('li'),
    document.createElement('li'),
];

for(let i=0; i<arrayList.length; i++){
    container.appendChild(arrayList[i]);
    arrayList[i].innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, iure.';
    setRandomColor(arrayList[i])
}

function setRandomColor(element){
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    element.style.color = randomColor;
}

document.querySelector('li')