//node.js has vast ecosystem of modules
//MVC = model view controller

//I like seeing all the subjects linking into each other humu humu

//no way for the server to talk back to the hooman realtime
//SIMULTANEOUS CORRESPONDENCE-

//node.js is considered "event-driven programming"

//Asynchronous programming doesn't block the process
//embedded Javascript within HTML file
//UP TO FIRST VIDEO 15:55

//callback function
//handler of the event

console.log("A");

setTimeout(()=> {
    console.log("B");
}, 2000);//asynshronous, C runs before B ohmaguh

console.log("C");

//runs print statements first before the setTimeout
//able to handle high volume of simultaneous events
//but wouldn't realistically speaking the program splits its attention.
    //partially it will get through 1 of every bit then terminate each 
    //complete one to download the longer ones quicker afterwards?
//like, there isn't any "simultaneous action" done, right?

//Ecmascript, JS and Node.js are children
//mainly use fs and http modules for assignments

const fs = require("fs");
const http = require("http");

//local/custom module humu humu
//inheritance exists as well

const great = require("./utilis");

console.log(great("Joe"));

//npm search up third party modules :3
//I do wanna ask, is there a possibility that we can use other third party modules
//outside the required ones? Is there a way to reference them?
//Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
//npm init
//npm i <- wut the TAs will use for grading.
//npm i express
//npm i mongoose
//don't submit the node modules, the TAs will do it themselves lol
const {v4: uuidv4 } = require('uuid');
console.log(uuidv4());

