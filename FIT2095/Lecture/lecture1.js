function varTest(){
    var x = 1;
    if(true) {
        var x = 2;
        console.log(x); //2
    }
    console.log(x);
}

varTest();

function letTest(){
    let x = 1;
    if(true) {
        let x = 2;
        //let x = 4 can't reassign like this
        //meanwhile var is reassignable
        console.log(x);
    }
    console.log(x);
}

letTest();

const number = 42;
//number = 3; //don't do this, not reassignable
console.log(number);

//use let over var, let is a lot more predictable than var.

let  number1 = 2;

let isEven;
if (number1 % 2 == 0) {
    isEven = true;
} else {
    isEven = false;
}

//doesn't matter if single or double quotation mark, just please be consistent
let message = "";
if (isEven) {
    message += "This number is even.";
} else {
    message += "This number is odd.";
}
//console.log(message);

//let betterMessage = "The number: " + number + " is even? " + isEven + "!!!";
//backtape not single quote lol
let betterMessage = `The number: ${number1} is even? ${isEven}!!!`;
console.log(betterMessage);
//ternary operator question mark thing
console.log(`The number: ${number} is even? ${number % 2 == 0? "YES" : "NO"}!!!`);

let fruitType="Apples";
switch (fruitType) {
    case "Oranges":
        console.log("Oranges are $0.59 a kilo.");
        break;
    case "Apples":
        console.log("Apples are $0.32 a kilo");
        break;
    case "Bananas":
        console.log("Bananas are $0.48 a kilo.");
        break;
    default:
        console.log("Sorry, we are out of " + fruitType + ".");
}
console.log("Is there anything else you'd like?");

//arrays objects and conditions 💀

let counter = 0;
for (let i = 0; i < 100; i++) {
    let rand = Math.random() * 10; //0 .. 10
    if(rand >= 5) {
        counter++;
    }
}

//console.log(`the value of ${counter}`);

let ar = [];
for (let i = 0; i < 10; i++) {
    ar.push(Math.round(Math.random() * 10));
}
console.log(ar);

let sum = 0;
for (let i = 0; i < ar.length; i++){
    sum += ar[i];
}
console.log(`the sum of the array is ${sum}`);

let sum2 = 0;
for (let item of ar) {
    sum2 += item;
}
console.log(`the sum of the array is ${sum2}`);
//wut is the spatial complexity of this unit???🍓

//search up arrow function =>  parameters => statement
//I'd rather just use function instead tho
//don't worry about "closure" for now

//class is a "blueprint" for an object
//who would have known?

class User {
    constructor(name) {//hunh, this is explicitly declared for some reason
        this.name = name;
    }
    sayHi(){
        console.log(this.name);
    }
}

let user = new User("John");
user.sayHi();

//this is essentially a tl;dr of FIT1051 but instead it's JavaScript ohmaguh

//HUNTING DOWN THE ERRORS!
const num2 = 42;

try {
    num2 = 99;
} catch(err) {
    console.log(err);
}

console.log(num2);