'use strict';

// function drill 1

function createGreeting(name, age){
    return `Hello, My name is ${name}, I am ${age} years old.`;
}

function getYearOfBirth(age){
  let yearOfBirth = 2019 - age;
  if (typeof age !== "number"){
        throw new Error("Age must be a number");
    } else if (age < 0) {
        throw new Error("Age can not be negative")
    } else {
    return `I was born in ${yearOfBirth}`;
    }
}

try {
    const greeting1 = getYearOfBirth('-1');
    console.log(greeting1);
} catch(e) {
    console.log(e);
}

createGreeting("John", 25);
getYearOfBirth(12);

// function drills 2

function jediName(first,last){
  return `${last.slice(0,3)}${first.slice(0,2)}`; 
}

console.log(jediName('matt','smith'));

fucntion beyond(num){
    if (num === Infinity || num === Number.NEGATIVE_INFINITY ){
        console.log("And beyond");
    } else if (num > 0 && num < Infinity){
        console.log("To infinity");
    } else if (num < 0 && num > Number.NEGATIVE_INFINITY){
        console.log("To negative infinity")
    } else {
        console.log("Staying home")
    }
}

console.log(beyond(2));

function decode (code){
    
}


