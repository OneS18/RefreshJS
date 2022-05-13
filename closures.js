function human(name) {
  function sayHi() {
    console.log(`Hi i am ${name}`);
  }
  function sayHowYouFeel() {
    console.log(`${name} is feeling good`);
  }

  return {
    sayHi,
    sayHowYouFeel,
  };
}

const sergiu = human("sergiu");

sergiu.sayHi();

//another example
// this is vor avoiding repetition
function clickHandler(size) {
  return function () {
    document.body.style.fontSize = `${size}px`;
  };
}

document.getElementById("size-12").onclick = clickHandler(12);
