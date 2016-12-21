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
// 3. doesn't rebind the value of 'this' when you use an arrow
// function inside of another function

const names = ['Michael', 'Janet'];
// before arrow functions:
const fullNames = names.map(function(name) {
  return `${name} Jackson`;
})
console.log(fullNames);

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
