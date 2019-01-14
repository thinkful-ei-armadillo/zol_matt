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
    const greeting1 = createGreeting();
    console.log(greeting1);
} catch(e) {
    console.log(e);
}

// const greeting1 = createGreeting();
// console.log(greeting1);

createGreeting("John", 25);
getYearOfBirth(12);