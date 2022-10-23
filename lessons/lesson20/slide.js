const sliderEl = document.getElementById('slider');
const leverEl = document.getElementById('lever');
let shiftX =0;
// нажать мышь
leverEl.addEventListener('mousedown', handleMouseDown);
function handleMouseDown(e){
    e.preventDefault(); // предотвращает влияние браузера
    shiftX = e.clientX - leverEl.getBoundingClientRect().left;
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
}


function handleMouseMove(e){
    let left = e.clientX - shiftX - sliderEl.getBoundingClientRect().left;
    let rigth = sliderEl.offsetWidth - leverEl.offsetWidth;
    if(left < 0) left = 0;
    if(left > rigth) left = rigth;
    leverEl.style.left = left + 'px';

}

function handleMouseUp(e){
    document.removeEventListener('mouseup', handleMouseUp);
    document.removeEventListener('mousemove', handleMouseMove);
}