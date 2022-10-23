let elem = document.getElementById('userList');

console.log(elem);
console.log(elem.attributes);
console.log(elem.attributes[0]);//id
console.log(elem.attributes[0].value);//узнать id
console.log(elem.nodeType);
console.log(elem.id);
console.log(elem.childNodes);
console.log(elem.children);
console.log(elem.firstChild);
console.log(elem.lastChild);
//clientX , clientY - узнать на каком элементе находится мышка юзера
// target посмотреть где было нажато



//Задание. По нажатию на кнопку вывести дату
//const btn = document.document.getElementsByClassName('container')
const btn = document.querySelector('.container');
const p = document.getElementById('info');

btn.addEventListener('click', handleFun);

let counter = 0;

/*
// вывести текущую дату
function handleFun (e) {
    console.log(e);
    const date = new Date();
    console.log(date);
    p.innerText = date;
}
*/

// счетчик

function handleFun (e) {
    p.innerText = counter;
    counter++;
}

let rem = document.getElementById('remBtn');
rem.addEventListener('click', (e) => {
    console.log(e);
    counter = 0;
});


const lightBtn = document.getElementById('ligth');
const nigthBtn = document.getElementById('nigth');

lightBtn.addEventListener('click', () => {
    document.body.style.background = 'silver';
});
nigthBtn.addEventListener('click', () => {
    document.body.style.backgroundImage = 'url(https://i.pinimg.com/736x/b1/3b/81/b13b81d79fe91e35008feeaf4c5b04d7.jpg)';
});

// меня цвет блоков при клике (2 цвета)

//const divArray = document.getElementsByClassName('box')
const divArray = document.querySelectorAll('.box') //получить колекцию

// const handleChangeColor = (e) => {
// this.style.background = 'black';
// }

function handleChangeColor1 (e) {
    //console.log(this);
    //console.log(e);
    this.style.background = 'black';
    this.removeEventListener('click', handleChangeColor1);
    this.addEventListener('click', handleChangeColor2);
}

function handleChangeColor2 (e) {
    this.style.background = 'white';
    this.removeEventListener('click', handleChangeColor2);
    this.addEventListener('click', handleChangeColor1);

}
divArray.forEach(el => el.addEventListener('click', handleChangeColor1))//короткая запись

// длинная запись
// for(let i=0; i<divArray.length; i++){
//     divArray[i].addEventListener();
// }


// менять цвет блоков при клике (2 цвета) сss

const divArray1 = document.querySelectorAll('.box') //получить колекцию


function handleChangeColor1 (e) {
    this.classList.add('color1');
    this.classList.remove('color2');
    this.removeEventListener('click', handleChangeColor1);
    this.addEventListener('click', handleChangeColor2);
   // document.querySelector('.box > button').remove();
}

function handleChangeColor2 (e) {
   
    this.removeEventListener('click', handleChangeColor2);
    this.addEventListener('click', handleChangeColor1);

}
divArray.forEach( el => {
    el.addEventListener('click', handleChangeColor1);
    console.log(el.firstChild);
    el.firstChild.addEventListener('click', () => { console.log(e); el.remove(); }
    )
});


//перемещатся по диву в консоле показывают кордианты

const box = document.getElementById('test');

const outXY = (event) => {
    console.log('Client XY = ',event.clientX, event.clientY);
    console.log('Offset XY = ',event.offsetX, event.offsetY);
    console.log('Type event:',event.type,'Target:', event.target, event.currentTarget);
};

box.addEventListener('click', outXY);


