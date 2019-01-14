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

function beyond(num)
{
    if (num === Infinity || num === Number.NEGATIVE_INFINITY ){
        console.log("And beyond");
    } else if (num > 0 && num < Infinity){
        console.log("To infinity");
    } else if (num < 0 && num > Number.NEGATIVE_INFINITY){
        console.log("To negative infinity");
    } else {
        console.log("Staying home");
    }
}

console.log(beyond(2));

function decode(code){
    let string1 = code.split(' ');
    let newArr = [];
    let space = ' ';
    
    for(let i = 0; i < string1.length; i++){
        if(string1[i][0] === 'a' )
            newArr.push(string1[i][1]); 
        if(string1[i][0] === 'b' )
            newArr.push(string1[i][2]);
        if(string1[i][0] === 'c' )
            newArr.push(string1[i][3]);
        if(string1[i][0] === 'd' )
            newArr.push(string1[i][4]);
        else    
            newArr.push(space);            
    }    
    return newArr.join(' ');
}

console.log(decode('craft block argon meter bells brown croon droop'));

