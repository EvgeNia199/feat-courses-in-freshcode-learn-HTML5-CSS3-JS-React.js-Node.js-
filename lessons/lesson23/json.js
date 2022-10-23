// const test = {
//     name: "vasya",
//     age: 20,
//     isMale: true,
//     car: {model: 'super', year: 2022},
//     start: null,
//     zero: 0,
//     uknown: undefined,
//     sayHi: function(){console.log('Hi');},

// };

// const testStr = JSON.stringify(test);
// console.log(testStr);

// const loc = document.getElementById('browserLocation');
// for(let i in location){
//     if(typeof location[i] == 'string')
// {
//     const item = document.createElement('li');
//     item.innerText = `${i}=${location}`
// }}


const btn = document.getElementById('btnHome');
btn.addEventListener('click', () => {
    location.origin(`${Location.origin}`)
});

// history.back() назад
// history.forward() вперед 