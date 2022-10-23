import { Value } from "sass";

const y = 15415;

const pow2 = (base) => base ** 2;


function sayHello(){
    return 'Hello'
}

const COLOR = 'RED'

const sum = (num1, num2) => num1 + num2;

export const superSum = (...args) => 
args.reduce((total, item) => total + item, 0);


export default {sum, pow2};