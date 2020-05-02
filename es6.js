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
greet()

            // With arrow function

newGreet = () => "Hello ES6";
console.log(newGreet());

// without arrow function
function sumes5(x,y){
    result = x+y;
    console.log('From ES5: '+ result);
}

sumes5(200,300);

// With arrow function

let result2 = (x,y) => x+y;
console.log("From ES6: " + result2(400,200));


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

