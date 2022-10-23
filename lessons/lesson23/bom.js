
// //отслеживает длину и ширину монитор
// const [widthElement, heightElement] = document.querySelectorAll('p');

// //1 
// window.addEventListener('resize', () => {
//     widthElement.innerText = `width ${window.innerWidth} px`;
// heightElement.innerText = `heigth ${window.innerHeight} px`;

// })

// //2
// function funRezize(){
//     widthElement.innerText = `width ${window.innerWidth} px`;
//     heightElement.innerText = `heigth ${window.innerHeight} px`;
// }

// //1
// window.addEventListener("resize", funRezize);

// //2
// window.onresize = funRezize; 
// window.onload = funRezize; 
// //при двойном нажатии
// window.ondblclick = function(e){console.log(e);}

// //показывает какие клавиши были нажаты
// window.onkeydown = function(e){ console.log(e);}

// //когда наводешь на элемент

// function logEvent(event){
//     console.log(event);
// }

// widthElement.onfocus = logEvent;
// widthElement.onblur = logEvent;

// рычаг
// const info = document.querySelector('p');
// const rangeEnputElement = document.querySelector('input[type="range"]')

// function calcValue(event){
//     const value = rangeEnputElement.value;
//     info.innerText = value;
   
// }

// rangeEnputElement.oninput = calcValue;
// window.onload = calcValue;


const colors = document.querySelectorAll('input[type="range"]');
for(const i of colors){
    i.oninput = updateColor;
}

window.onload = function(){
    const color = localStorage.getItem('bodyColor');
    if(color){
        document.body.style.backgroundColor = color;
    }
};

window.onclose = function(){
    localStorage.setItem('bodyColor', 'document.body.style.backgroundColor');
}

function updateColor(){
    //rgba(r,g,b,a)
    const red = colors[0].value;
    const green = colors[1].value;
    const blue = colors[2].value;
    const a = colors[3].value;
    const newBodyColor = "rgba("+red+","+green+","+blue+","+a+")";
    document.body.style.backgroundColor = newBodyColor;
    localStorage.setItem('bodyColor', 'document.body.style.backgroundColor');
}


