// MyArray.prototype = {
//     push(val){
//         this[ this.length++] = val;
//     },
//     pop(){
//         if(this.length > 0){
//             const res = this[--this.length];
//             delete this[this.length];
//             return res;
//         }
//     }
// };
// a.push({name: "Vasya"})
// a.push( (() => {} ));

// console.log(a);

// a.pop();
// console.log(a);


// class Car{
//     constructor(model, year, color){
//         this.model  = model;
//         this.year = year;
//         this.color = color;
//     }
//     out(){
//         console.log(`Model ${this.model} : color ${this.color}`);
//     }
// }
//список
class Elem{
    constructor(value, next = null, prev = null){
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
    addStartElem(value){
        const newHead = new Elem(value, this.head, null);
        this.size ++; 
        this.head = newHead;
        if(!this.tail) {this.tail = newHead;}
        if(this.head) {this.head.prev = newHead;}
    }
    addEndElem(value){
        const nawTail = new Elem(value, null, this.tail);
        this.size++;
        this.tail = newTail;
        if(!this.head) this.head = newTail;
        if(this.tail) this.tail.next = newTail;
    }
    addAfterNode(indexNode, value){
        if(this.tail == indexNode){
            this.addEndElem(value);
            return;
        }
        const newElem = new Elem(value, indexNode.next, indexNode);
        this.size ++;
        indexNode.next = indexNode;
        newElem.next.prev = indexNode;
    }
    addBeforeNode(indexNode, value){
        if(this.head == indexNode){
            this.addStartElem(value);
            return;
        }
        
    }
}

class List {
    constructor(){
    this.size = 0;
    this.head = null;
    this.tail = null;       
    }
};

class MyArray{
    constructor(arr){
        this.arr = arr;
    }
    [Symbol.iterator] () {
        let index =0;
        return{
            next:()=>{
                // console.log(this);
                return index < this.arr.length ?
                        {value: this.arr[index++],
                        done: false}
                    : {done: true}
            }
        }
    }
}

let arr1 = [10,20,30,40];
let test = new MyArray(arr1);
for(let i of test){
    // console.log(i);
}

// const list1 = new List();
// list1.addEndElem(10);
// list1.addEndElem('hello');
// console.log(list1); */

class Stack{
    constructor(maxSize = 1000){
        this.size = 0;
        this.maxSize = maxSize;
    }
    isEmpty(){
        return this.size == 0;
    }
    push(value){
        if(this.size > this.maxSize){
            throw new RangeError('стек переполнен')
        }
        this.size++;
        this[this.size] = value;
        console.log('5555555555555555555555555');
        console.log(this[this.size]);
    }
    pop(){
        if(this.isEmpty()) {return;}
        else{
        const value = this[this.size];
        delete this[this.size--];
        return value;}
    }
}
try{
const mytest = new Stack(5)
mytest.push('a')
mytest.push('b')
mytest.push('c')
mytest.pop()
console.log(mytest);
} catch(err){
console.log(err);
}


const obj = {
}

obj['a'] = '1'

console.log(obj);


