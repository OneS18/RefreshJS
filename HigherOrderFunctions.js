const names = ["sina", "sergiu", "Qentin", "Martin", "Ovi"];

//EX 1
const filteredNames = names.filter((n) => n[1] !== "Q");

// console.log(filteredNames);

//EX 2
const filtered = [];
for (let i = 0; i < names.length; i++) {
  if (names[i][0] !== "Q") {
    filtered.push(names[i]);
  }
}

console.log(filtered);

//EX 3
const filtered = [];
for (let i = 0; i < names.length; i++) {
  if (names[i] >= 5) {
    filtered.push(names[i]);
  }
}

console.log(filtered);

// NOW, a lot of the code may be repetitive but you do all of this
// in some smaller function what do the same thing (and just the thing that is not nedded to pe repetitive)

//THE GOOD EXAMPLE

const notQ = names.filter(isnNotQ);
const IsMinimum = names.filter(IsMinimum5);
const ToEl = names.map(convertToEl);

function isnNotQ(n) {
  return n[0] !== "Q";
}

function IsMinimum5(n) {
  return n.length >= 5;
}

function convertToEl(n) {
  const el = document.createElement("p");
  el.innerText = n;
  return el;
}

console.log(notQ, IsMinimum, ToEl);
