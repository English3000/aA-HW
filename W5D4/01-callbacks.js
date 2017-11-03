// window.setTimeout(alert('HAMMERTIME'), 5000);

function hammerTime(time) {
  window.setTimeout(alert(`${time} is hammertime!`), time);
}

//------------------------------------
const readline = require('readline');

// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// reader.question("My good fellow, would you care for some tea? \n", function (teaAnswer) {
//   reader.question("And biscuits!? \n", function (biscuitAnswer) {
//     console.log(`So you ${teaAnswer} want tea and you ${biscuitAnswer} want biscuits.`);
//     reader.close();
//   })
// })

//------------------------------------
function Cat () {
  this.name = 'Markov';
  this.age = 3;
}

function Dog () {
  this.name = 'Noodles';
  this.age = 4;
}

Dog.prototype.chase = function (cat) {
  console.log(`My name is ${this.name} and I'm chasing ${cat.name}! Woof!`);
}

const Markov = new Cat ();
const Noodles = new Dog ();

Noodles.chase(Markov);
Noodles.chase.call(Markov, Noodles);
Noodles.chase.apply(Markov, [Noodles]);
