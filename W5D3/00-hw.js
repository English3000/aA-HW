// madLib
// Write a function that takes three strings -
  // a verb, an adjective, and a noun -
  // uppercases and interpolates them into the sentence
  // "We shall VERB the ADJECTIVE NOUN". Use ES6 template literals.

function madLib(verb, adj, noun) {
  console.log(`We shall ${verb.toUpperCase()} the ${adj.toUpperCase()} ${noun.toUpperCase()}.`);
  return `We shall ${verb.toUpperCase()} the ${adj.toUpperCase()} ${noun.toUpperCase()}.`;
}
// madLib('make', 'best', 'guac');
// "We shall MAKE the BEST GUAC."

/*
isSubstring

Input:
A String, called searchString.
A String, called subString.
Output: A Boolean. true if the subString is a part of the searchString.
*/
function isSubstring(searchString, subString) {
  console.log(searchString.includes(subString));
  return searchString.includes(subString);
}
// isSubstring("time to program", "time");
// true

// isSubstring("Jump for joy", "joys");
// false

/*
fizzBuzz

3 and 5 are magic numbers.

Define a function fizzBuzz(array)
that takes an array and returns
a new array of every number in the array
that is divisible by either 3 or 5, but not both.
*/
function fizzBuzz(array) {
  let new_array = [];
  array.forEach(function (el) {
    if ( el%15 !== 0 && (el%3 === 0 || el%5 === 0) ) {
      new_array.push(el);
    }
  })
  console.log(new_array);
  return new_array;
}
// fizzBuzz([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]);

/*
isPrime

Define a function isPrime(number) that returns true if number is prime.
Otherwise, false. Assume number is a positive integer.
*/
function isPrime(number) {
  if (number <= 1) { return false;}
    // console.log(false);
    // return false; }
  // } else {
  for (let div = 2; div < number; div++) {
    if (number%div === 0) {
      // console.log(false);
      return false;
    }
  }
  // }
  // console.log(true);
  return true;
}
// isPrime(2)
// true
//
// isPrime(10)
// false
//
// isPrime(15485863)
// true
//
// isPrime(3548563)
// false

/*
sumOfNPrimes

Using firstNPrimes, write a function sumOfNPrimes(n)
that returns the sum of the first n prime numbers.
Hint: use isPrime as a helper method.
*/
// function sumOfNPrimes (n) {
//   let sum = 0;
//   let countPrimes = 0;
//   let i = 2;
//
//   while (countPrimes < n) {
//     if (isPrime(i)) {
//       sum += i;
//       countPrimes++;
//     }
//     i++;
//   }
//
//   return sum;
// }
function sumOfNPrimes(n) {
  // var sum = 0;
  let sum = 0;
  for (let i = 2; i === i; i++) {
    if (n === 0) {
      console.log(sum);
      return sum;
    }
    if (isPrime(i)) {
      sum += i;
      n -= 1;
    }
  }
}
// sumOfNPrimes(0)
// 0

// sumOfNPrimes(1)
// 2

// sumOfNPrimes(4)
// 17

/*
Write a function titleize that takes an array of names and a function
(callback). titleize should use Array.prototype.map to create a new
array full of titleized versions of each name - titleize meaning
"Roger" should be made to read "Mx. Roger Jingleheimer Schmidt".
Then pass this new array of names to the callback, which should use
Array.prototype.forEach to print out each titleized name.
*/
// defining the function
// function titleize(names, callback) {
//   let titleized = names.map(name => `Mx. ${name} Jingleheimer Schmidt`);
//   callback(titleized);
// };

// invoking the function
// titleize(["Mary", "Brian", "Leo"], (names) => {
//   names.forEach(name => console.log(name));
// });
function titleize(names_arr, callback) {
  let new_arr = names_arr.map(function (name) {
    return name.slice(0, 1).toUpperCase() + name.slice(1, name.length);
  })
  callback(new_arr);
}

function printCallback(names_arr) {
  names_arr.forEach(function (name) {
    console.log(`Mx. ${name} Jingleheimer Schmidt`)
  })
}
// titleize(["Mary", "Brian", "Leo"], printCallback);
// Mx. Mary Jingleheimer Schmidt
// Mx. Brian Jingleheimer Schmidt
// Mx. Leo Jingleheimer Schmidt
// undefined

/*
First write a constructor function for an elephant.
Each elephant should have a name, height (in inches), and
array of tricks in gerund form (e.g. "painting a picture" rather than
"paint a picture").

Next write a few prototype functions that will be shared
among all elephants:

Elephant.prototype.trumpet: should print
"(name) the elephant goes 'phrRRRRRRRRRRR!!!!!!!'"

Elephant.prototype.grow: should
increase the elephant's height by 12 inches

Elephant.prototype.addTrick(trick): add
a new trick to their existing repertoire

Elephant.prototype.play: print out a random trick,
e.g. "(name) is (trick)!"

Hint: look up some JS Math methods!
Make sure to create an elephant and
test all of these functions out on them method style!
*/
function Elephant(name, height, tricks_array) {
  this.name = name;
  this.height = height;
  this.tricks = tricks_array;
}

Elephant.prototype.trumpet = function() {
  console.log(`${this.name} the elephant goes 'phrRRRRRRRRRRR!!!!!!!`)
}

Elephant.prototype.grow = function() {
  this.height += 12;
  console.log(this.height);
}

Elephant.prototype.addTrick = function (trick) {
  this.tricks.push(trick);
  console.log(this.tricks);
  return this.tricks;
}

Elephant.prototype.play = function () {
  let slick_trick = this.tricks[Math.floor(Math.random() * this.tricks.length)]
  //accessor from https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array
  console.log(`${this.name} is ${slick_trick}!`)
}

let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
// ellie.trumpet()
// ellie.grow()
// ellie.addTrick("jumping")
// ellie.play()
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];
/*
Now let's create a function called paradeHelper that we'll use to
have an elephant parade. It should take a single elephant as an
argument; this way, we can pass it as a callback to forEach when
called on our herd. Make sure to store it as a property on the
Elephant object. You can populate it with any console.log statement
you want to build your parade (e.g. "_______ is trotting by!").
*/
Elephant.prototype.paradeHelper = function () {
  console.log(`${this.name} is trotting by!`);
}
// herd.forEach(function (elephant) {
//   elephant.paradeHelper();
// })

// function dinerBreakfast() {
//   let order = "I'd like cheesy scrambled eggs please.";
//   console.log(order);
//
//   return function (food) {
//     order = `${order.slice(0, order.length - 8)} and ${food} please.`;
//     console.log(order);
//   };
// };
var orders = `I'd like cheesy scrambled eggs`
let bfastOrder = function dinerBreakfast(order) {
  if (order === undefined) {
    console.log(`${orders} please`);
  } else {
    orders += ` and ${order}`
    console.log(`${orders} please.`)
  }
}
// "I'd like cheesy scrambled eggs please"
bfastOrder("chocolate chip pancakes");
// "I'd like cheesy scrambled eggs and chocolate chip pancakes please."
bfastOrder("grits");
// "I'd like cheesy scrambled eggs and chocolate chip pancakes and grits please."
