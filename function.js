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

<<<<<<< HEAD
createGreeting("John", 25);
getYearOfBirth(12);
=======
// function drills 2

function jediName(first,last){
  return `${last.slice(0,3)}${first.slice(0,2)}`; 
}

console.log(jediName('matt','smith'));
>>>>>>> 3b6b5eab83ca74db43e0202ef3f52235091b4ca0
