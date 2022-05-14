var marks = { physics: 98, maths: 95, chemistry: 91 };
//
//
// returns "{"physics":98,"maths":95,"chemistry":91}"
JSON.stringify(marks);
// Get object from string
JSON.parse('{"physics":98,"maths":95,"chemistry":91}');
//
//
//
//

//Iterating over the object is easy, using Object.keys

var highScore = 0;
for (i of Object.keys(marks)) {
  if (marks[i] > highScore) highScore = marks[i];
}
//
//
//
//Other important functions on an object are:

// Object.prototype(object)
// Object.freeze(function)
// Object.seal(function)

//Object.prototype provides more important functions that have many applications. Some of them are:

//Object.prototype.hasOwnProperty is useful to find out whether a given property/key exists in an object.

marks.hasOwnProperty("physics"); // returns true
marks.hasOwnProperty("greek"); // returns false
//
//
//
//Object.prototype.instanceof evaluates whether a given object is the type of a particular prototype(we will see them in the next section, they are functions).

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
var newCar = new Car("Honda", "City", 2007); //here the type is given

console.log(newCar instanceof Car); // returns true

//
//
//
//Now comes the other two functions. Object.freeze allows us to freeze an object so that existing properties cannot be modified.

var marks = { physics: 98, maths: 95, chemistry: 91 };
finalizedMarks = Object.freeze(marks);
finalizedMarks["physics"] = 86; // throws error in strict mode
console.log(marks); // {physics: 98, maths: 95, chemistry: 91}

//and if we want to check if  a given object is frozen or  not like this

Object.isFrozen(finalizedMarks); // return true

//
//
//
//Object.seal is slightly different from the freeze. It allows configurable properties but won’t allow new property addition or deletion or properties.

var marks = { physics: 98, maths: 95, chemistry: 91 };
Object.seal(marks);

delete marks.chemistry; // returns false as operation failed
marks.physics = 95; // Works!
marks.greek = 86; // Will not add a new property

//if we want to check if the given object is sealed or not

Object.isSealed(marks); // returns true
