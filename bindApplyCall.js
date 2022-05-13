//CALL

console.log("CALL");
var mathLib = {
  pi: 3.14,
  area: function (r) {
    return this.pi * r * r;
  },
  circumference: function (r) {
    return 2 * this.pi * r;
  },
};

console.log(mathLib.pi);

//here I want to change the pi value but I don't change for everyone, just where I want to '
console.log(mathLib.area.call({ pi: 3.14159 }, 4));

console.log(mathLib.circumference(4));

//APPLY

console.log("APPLY");

//is the same like call except Function argumets is passed as a list
console.log(mathLib.area.apply({ pi: 3.14159 }, [4]));

//BIND

console.log("BIND");

//bind attaches a  brand new this to a given function
//is not  executed instantly lke appply and call
//use useful while working with with  JS events
const newVolume = mathLib.area.bind({ pi: 3.14159 });

console.log(newVolume(4));
