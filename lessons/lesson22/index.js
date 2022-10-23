// const btn = document.getElementById('send');
// const username = document.getElementById('userName');
// const userPassword = document.getElementById('userPassword');

// const  regPassword = / (?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#%\+\*;\.])^.{6,12}$/g ;
// userPassword.setAttribute('pattern',regPassword )

//  userPassword.addEventListener('input', e =>{
//     console.log(userPassword.value);
//  })



// // userPassword.addEventListener('change',e => {
// //     console.log(e);

// // },    false)

const btn = document.getElementById("send");
const userName = document.getElementById("userName");
const userPassword = document.getElementById("userPassword");


const regPassword = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#%\+\*;\.])^.{6,12}$/;
const strRegPswd = regPassword.toString(); // и обрезать начало и конец
userPassword.setAttribute('pattern', regPassword);