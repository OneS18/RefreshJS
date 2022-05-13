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
