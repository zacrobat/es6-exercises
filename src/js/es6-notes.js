// es6.io notes

// var scoping vs let and const
if (age > 12) {
  var dogYears = age * 7; // function scoped not block scoped, leaks
  // let dogYears = age * 7; block scoped
  // const dogYears = age * 7; block scoped
  console.log(`You are ${dogYears} dog years old!`);
}


const key = "abc123";
let points = 50;
let winner = false;
// cannot declare let points = 60 because you cannot declare it twice in the same scope;
points = 60; // you can update a let variable

if(points > 40) {
  console.log('it ran1');
  let points = 50;
  console.log(points); // 50 per scope
}
console.log(points); // 60 per update


const person = {
  name: 'Joe',
  age: 29
}
// cannot do this: const person = {name = 'Whaterver'} because it cannot be reassigned.
// howerver you can do this:
person.age = 30; // person is the same object and the object's properties can be updated.

// If you do need to freeze everything, use object.freeze
// const wes = Object.freeze(person); // not es6

// note in JavaScript the window has a name property with value ""
// use let and const instead of an IIFE

// use let instead of var to...
for(let i = 0; i < 10; i++) {
  console.log(i);
  setTimeout(function() {
    console.log('The number is ' + i);
  }, 1000);
}


// temporal dead zone aka temporal dad zone
console.log(pizza); // plus ONE of the below following...
// temporal dead zone here - cannot access variables defined below
var pizza = 'Deep Dish 🍕🍕🍕'; // undefined
let pizza = 'Deep Dish 🍕🍕🍕'; // Uncaught ReferenceError: pizza is not defined
const pizza = 'Deep Dish 🍕🍕🍕'; // Uncaught ReferenceError: pizza is not defined


// Arrow functions - three benefits:
// 1. more concise
// 2. implicit returns
// 3. doesn't rebind the value of 'this' when you use an arrow function inside of another function

const names = ['Michael', 'Janet', 'Tito'];

// before arrow functions:
const fullNames = names.map(function(name) {
  return `${name} Jackson`;
});
console.log(fullNames);

// arrow function - delete the word 'function', add fat arrow:
const fullNames2 = names.map((name) => {
  return `${name} Jackson`;
});
console.log(fullNames2);

// if only one paramater ie (name), don't need second parantheses (optional stylistic choice):
const fullNames3 = names.map(name => {
  return `${name} Jackson`;
});
console.log(fullNames3);

// implicit return - move it up, remove 'return', remove curly brackets
const fullNames4 = names.map(name => `${name} Jackson`);
console.log(fullNames4);

// if you have no arguments, pass empty parantheses:
const fullNames5 = names.map(() => `Original Jackson`);
console.log(fullNames5);

// note arrow functions are always anonymous functions.
// but you can put them into a variable:
const sayMyName = (name) => { console.log(`Hello ${name}!`) };
sayMyName('Zac');


// more arrow functions:
const race = '100m Dash';
const winners = ['Hunter Gath', 'Singa Song', 'Imda Bos'];

// if we remove the curly brackets for an implicit return, how do we deal with an {object literal}, not a {function block}? Wrap in parantheses.
const win = winners.map((winner, i) => ({name: winner, race: race, place: i + 1}))

console.table(win); // console.table is cool.
// note, another feature of es6 is that {race: race} above can be replaced with {race}.

const ages = [23, 62, 45, 234, 2, 62, 234, 62, 34];
const old = ages.filter(age => age >= 60);
const young = ages.filter(age => age < 60);
console.log(old);
console.log(young);

// arrow functions and 'this'
const box = document.querySelector('.box');

// don't use an arrow function:
const box2 = document.querySelector('.box');
box2.addEventListener('click', () => {console.log(this)});
// 'this' is 'window' because with arrow functions 'this' is not rebound inside of that function - it's inherited from whatever the parent scope is. Don't use an arrow function here.

// es6 arrow functions to avoid self or that...
const box = document.querySelector('.box');
box.addEventListener('click', function() {
  console.log(this); // 'this' is box
  this.classList.toggle('opening');
  setTimeout(function() {
    console.log(this.classList); // undefined
    console.log(this); // window
    // these two behave this way because the setTimout function here is not bound to anything
    this.classList.toggle('open');
  })
});

// the old way in es5:
box.addEventListener('click', function() {
  var self = this; // or var that = this;
  this.classList.toggle('opening');
  setTimeout(function() {
    self.classList.toggle('open');
  })
});

// with es6 we can use an arrow function because it's scoped to its parent. It will inherit the value of 'this'. We can use an arrow function inside of another function because it will inherit the value of 'this'.
box.addEventListener('click', function() {
  let first = 'opening';
  let second = 'open';

  if(this.classList.contains(first)) {
    [first, second] = [second, first]; // es6 trick to swap variables
  }

  this.classList.toggle(first);
  setTimeout(() => {
    console.log(this);
    this.classList.toggle(second);
}, 500);
});






// exercises:

  // Select all the list items on the page and convert to array
  const items = Array.from(document.querySelectorAll('[data-time]'));

  // Filter for only the elements that contain the word 'Flexbox'
  const filtered = items
    .filter(item => item.textContent.includes('Flexbox'))
    // map down to a list of time strings
    .map(item => item.dataset.time)
    // map to an array of seconds
    .map(timecode => {
      const parts = timecode.split(':').map(part => parseFloat(part));
      return (parts[0] * 60) + parts[1];
    })
    // reduce to get total
    .reduce((runningTotal, seconds) => runningTotal + seconds);

  console.log(filtered);
  // 🔥 This can also be done in a single .reduce(), but we're practicing arrow functions here, so chain them!
