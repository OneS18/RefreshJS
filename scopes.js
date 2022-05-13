function generator(input) {
  var index = 0;
  return {
    next: function () {
      if (index < input.length) {
        index += 1;

        return input[index - 1];
      }
      return "";
    },
  };
}

var myGenerator = generator("boomerang");
console.log(myGenerator.next());

//1
{
  let message = "hello world";

  console.log(message); // works
}
console.log(message); //message is not defined

//2
if (true) {
  let ceva = "works case it true";

  console.log(ceva); // works
}
console.log(ceva); //error, no such a varibale
//
//3
for (let i = 0; i < 3; i++) {
  alert(i); // 0, then 1, then 2
}

alert(i); // Error, no such variable

//4
const makeCounter = () => {
  counter = 0;

  return () => {
    return counter++;
  };
};

let counter = makeCounter();

console.log(counter()); //0
console.log(counter()); //1
console.log(counter()); //2

//
//
//
//TASKS

//1

let name = "john";

const printName = () => {
  console.log(name);
};

name = "sergiu";

printName(); // prints 'sergui' becase  is used the most recent values

//2

const makeWorker = () => {
  let name = "pete";

  return () => {
    console.log(name);
  };
};

let name = "sergiu";

const work = makeWorker();

work(); // prints  pete because outer lexical environment (is in the function scope and takes the variable from the function
//if in the function was no variable then it means the program will prints 'Sergiu'

//3

function makeCounter() {
  let count = 0;

  return function () {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert(counter()); // 0
alert(counter()); // 1

alert(counter2()); //0 ,
alert(counter2()); //1
//they are created by different invocations of makeCounter()
//so they are independend outer Lexical Environments, each has his own count

//4

let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }

  //sayHi is inside the if and if you want to trigger the function you musc call it in the if scope
}

sayHi(); //this is gonna give an error

//4

function sum(a) {
  return function (b) {
    return a + b; // takes "a" from the outer lexical environment
  };
}

alert(sum(1)(2)); // 3
alert(sum(5)(-1)); // 4

//5

function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let shooter = function () {
      // create a shooter function,
      alert(i); // that should show its number
    };
    shooters.push(shooter); // and add it to the array
    i++;
  }

  // ...and return the array of shooters
  return shooters;
}

let army = makeArmy();

// all shooters show 10 instead of their numbers 0, 1, 2, 3...

army[0](); // 10 from the shooter number 0
army[1](); // 10 from the shooter number 1
army[2](); // 10 ...and so on.
