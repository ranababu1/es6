// blocks - let works inside a scope only. For out of scope usage use global

function printaval(){
    let somevalue = 123;
console.log("Returned from 1st fn: " + somevalue);
}
printaval();

function getSomevalue(){
    console.log("Returned from 2nd fn" + somevalue); // undefined because out of scope
}

// arrow functions

            // without arrow function
function greet(){
    console.log('Hello ES5');
}
greet();

            // With arrow function
newGreet = () => 'Hello ES6';
console.log(newGreet());

// strings (includes, repeat)

// template strings

// destructuring  arrays / objs

// module exports , imports

// default parameters

// rest parameters

// named parameters

// spread operators

// classes

// maps - get, set, has

