//Variables
const a:number = 1;
const b:string ="Sameer"
const c : boolean = true;

//Arrays:
const arr:number[] = [1,2,3];
const arr2:string[] = ["a","b","c"];
const arr3:boolean[] = [true,false,true];

//Tuples:
const tuple:[number,string,boolean] = [1,"a",true];

let age: number = 25;
let userName: string = "Sameer";
let isStudent: boolean = true;
let hobbies: string[] = ["Reading", "Coding", "Gaming"];


// Create variables for a person's height, weight, name, and whether they are employed.
let height:number = 171;
let weight:number = 70;
let uname:string = "Sameer";
let isEmployed:boolean = true;

//Inference:
let x = 10;
let y = "Hello";
let z = true;

//Explicit:
let e : number = 10;
let f : string = "Hello";
let g : boolean = true;

// Create variables with inferred types and explicitly annotated types.
let inferredAge = 22;
let explicitAge: number = 22;

//Functions:
function add(a:number, b : number){
    return a+b;
}
add(1,2);
//Arrow Function:
const multiply = (a:number, b:number) => a*b;
multiply(1,2);
// Write a function that accepts a string and returns its length.
const stringLength = (str :string)=>{
    return str.length;
}

// Create a function that takes two numbers and returns their sum.
const sum = (a:number, b:number) => a+b;
sum(1,2);

// Create a function that takes a string and returns its first character.
const firstChar = (str:string) => str[0];
firstChar("Hello");


