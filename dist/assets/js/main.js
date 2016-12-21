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
