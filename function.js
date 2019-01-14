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
  let newString = '';
  let space = ' ';

  for(let i = 0; i < string1.length; i++){
    if(string1[i][0] === 'a')
      newString+=string1[i][1]; 
    else if(string1[i][0] === 'b' )
      newString+=string1[i][2];
    else if(string1[i][0] === 'c' )
      newString+=string1[i][3];
    else if(string1[i][0] === 'd' )
      newString+=string1[i][4];
    else    
      newString+=space;            
  }    
  return newString;
}

console.log(decode('craft block argon meter bells brown croon droop'));

function leapYear(month,leapyear=false){

  switch (month) {
  case 'January':
  case 'March':
  case 'May':
  case 'July':
  case 'August':
  case 'October':
  case 'December':
    console.log(`${month} has 31 days`);
    break;
  case 'February':
    if(leapYear ===false)
      console.log(`${month} has 28 days.`);
    else
      console.log(`${month} has 29 days.`);
    break;
    
  default:
    console.log(`${month} has 30 days.`);
    break;
  }
}

console.log(leapYear('February',true));

//rock1 paper2 scissors3

function computerPick(){
  return Math.floor(Math.random() * 3) + 1;
}

function game(num){
  let computer = computerPick();
  console.log(computer);
  if((num<0 || num>4) || typeof(num) !== 'number'){
    throw new Error('This is not a valid input');
  }
  else{
  switch(num){
    case 1:
      if(computer ===2)
        console.log('Computer wins!');
      else if(computer ===3)
        console.log('You win!');
    break;
    case 2:
    if(computer ===3)
        console.log('Computer wins!');
      else if(computer ===1)
        console.log('You win!');
    break;
    case 3:
    if(computer ===1)
        console.log('Computer wins!');
      else if(computer ===2)
        console.log('You win!');
    break;
    default:
    console.log('It\'s a tie!');
    break;
  }
}
}

console.log(game(1));