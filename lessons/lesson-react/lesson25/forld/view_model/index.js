
'use strict';
import myString from '../model/index.js';
const str = document.getElementById('str');
const btn = document.getElementById('btn');
const result = document.getElementById('result');
const mode = document.getElementById('mode');
btn.addEventListener('click', () => {
    const answer = new myString(str.value, mode.value).make();
    result.innerText = answer; 
});