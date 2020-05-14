// blocks - let works inside a scope only. For out of scope usage use global

function printaval() {
    let somevalue = 123;
    console.log("Returned from 1st fn: " + somevalue);
}
printaval();

function getSomevalue() {
    console.log("Returned from 2nd fn" + somevalue); // undefined because out of scope
}


// arrow functions

// without arrow function

function greet() {
    console.log('Hello ES5');
}
greet()

// With arrow function

newGreet = () => "Hello ES6";
console.log(newGreet());

// without arrow function
function sumes5(x, y) {
    result = x + y;
    console.log('From ES5: ' + result);
}

sumes5(200, 300);

// With arrow function

let result2 = (x, y) => x + y;
console.log("From ES6: " + result2(400, 200));


// strings  -  startsWith(), endsWith(), includes, repeat

const strVar = "Imran";
const result3 = strVar.startsWith('Im')
console.log(result3); // returns boolean (either true or false)

const result4 = strVar.endsWith('M');
console.log(result4); // false 

const result5 = strVar.includes('a');
console.log(result5); // true

const result6 = strVar.repeat(3);
console.log(result6); //imranimranimran

// template literals

let someTemplate = `<h2>Hello there!</h2>
<p>This is a paragraph generated using template literal.</p>`;
document.getElementById('templateLiteral').innerHTML = someTemplate;

// using variables in template literals

let theName = "Imran";
function randNo() {
    let theNumber = Math.random();

    return theNumber;
}
let anotherTemplate = `<h2>Hello ${theName}</h2>
            <p>A random number <span style="color:green;">${randNo(10)}</span> is generated using function in a template literal. </p>`;
document.getElementById('templateLiteralWithVar').innerHTML = anotherTemplate;


// destructuring  arrays / objects

var favourite = {
    color: 'black',
    food: 'chinese',
    game: 'CSGO',
    number: 18
}

//  ES5 - to access food value

var favFood = favourite.food;
console.log("Using ES5: " + favFood);

// ES6 - to access food value
const { color, food, game, number } = favourite;
console.log("Using ES6: " + food);

//or you can use your own 

const { color: c, food: f, game: g, number: n } = favourite;
console.log("Fav color using ES6: " + c);




// module exports , imports

// default parameters

// rest parameters

// named parameters

// spread operators



// classes

// maps - get, set, has