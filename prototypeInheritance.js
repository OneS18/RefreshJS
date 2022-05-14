//a dumb example of a class

var animalGroups = {
  MAMMAL: 1,
  REPTILE: 2,
  AMPHIBIAN: 3,
  INVERTEBRATE: 4,
};
function Animal(name, type) {
  this.name = name;
  this.type = type;
}
var dog = new Animal("dog", animalGroups.MAMMAL);
var crocodile = new Animal("crocodile", animalGroups.REPTILE);

//EX 2
let animal = {
  eats: true,
};

let rabbit = {
  jump: true,
};

rabbit.__proto__ = animal; // basically what it does is giving to the rabbit the property('eats')

//when we call rabbit.eats, if that property dosen't exist in the rabbit instance, then we use the property from the animal instance
console.log(rabbit.eats); // true
console.log(rabbit.jump); // true

//EX 3
let animal = {
  eats: true,
  walk() {
    console.log("the animal walk");
  },
};

let rabbit = {
  jumps: true,
  __proto__: animal,
};

//walk is taken from the prototype
rabbit.walk();

//EX 4
//here we can see we can use __proto__ like a chain
let animal = {
  eats: true,
  walk() {
    alert("Animal walk");
  },
};

let rabbit = {
  jumps: true,
  __proto__: animal,
};

let longEar = {
  earLength: 10,
  __proto__: rabbit,
};

// walk is taken from the prototype chain
longEar.walk(); // Animal walk
alert(longEar.jumps); // true (from rabbit)

//EX 5

//from what I observed rabbit don't need to receve the function 'walk()' from the prototype chain animore because rabbit has already that function

let animal = {
  eats: true,
  walk() {
    /* this method won't be used by rabbit */
  },
};

let rabbit = {
  __proto__: animal,
};

rabbit.walk = function () {
  alert("Rabbit! Bounce-bounce!");
};

rabbit.walk(); // Rabbit! Bounce-bounce!

//EX 6

let user = {
  name: "John",
  surname: "Smith",

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },

  get fullName() {
    return `${this.name} ${this.surname}`;
  },
};

let admin = {
  __proto__: user,
  isAdmin: true,
};

alert(admin.fullName); // John Smith (*)

// setter triggers!
admin.fullName = "Alice Cooper"; // (**)

alert(admin.fullName); // Alice Cooper, state of admin modified
alert(user.fullName); // John Smith, state of user protected
