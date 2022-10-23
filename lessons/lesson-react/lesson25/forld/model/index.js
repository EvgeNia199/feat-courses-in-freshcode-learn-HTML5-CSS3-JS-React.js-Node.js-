"use strict";

export default class myString{
    constructor(str, mode){
        this.str = str;
        this.mode = mode;
    }
    make(){
        if(this.mode == 'upper'){
            this.str = this.str.toUpperCase();
        } else if(this.mode == 'lower'){
            this.str = this.str.toLowerCase();
        } else if(this.mode == 'reverse'){
            this.str = this.str.split("").reverse().join("");
        }
        return this.str;
    }

}