"use strict";

function calcArea(width, height) {
  return width * height;
}
calcArea(5, 7);

function showMessage(from, text) {
  alert(from + ": " + text);
}
showMessage("Max", "Hi!");
showMessage("Helen", "Hello");

function showMessageNoText(from, text = "Empty message") {
  alert(from + ": " + text);
}
showMessageNoText("Max");

function getEmptyMessage() {
  return "Empty message";
}
function showMessageDefaultFunc(from, text = getEmptyMessage()) {
  alert(from + ": " + text);
}
showMessageDefaultFunc("Max");

function checkEven(num) {
  if (num <= 1) return alert("Not good number");
  else {
    const isEven = !(num % 2);
    return isEven;
  }
}
let num = prompt("Enter number > 1", 2);
let res = checkEven(num);
if (res !== undefined) {
  if (res) {
    alert("Even");
  } else {
    alert("Odd");
  }
}

function noAlert(showFilm) {
  if (!showFilm) return;
  alert("You watch a film");
}

//function expression
const funcExpr = function () {
  alert("i am function expression");
};

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}
function showOk() {
  alert("Pressed yes");
}
function showCancel() {
  alert("Pressed cancel");
}
ask("Are you sure?", showOk, showCancel);
ask(
  "Are you sure?",
  function () {
    alert("Pressed yes");
  },
  function () {
    alert("Pressed cancel");
  }
);

//arrow functions
const sayHi = () => console.log("Hi");
const sayHello = () => {
  console.log("Hello");
};
const showName = (name) => console.log(`Your name ${name}`);

context
let foo = {
  baz: function () {
    console.log(this);
  },
};
foo.baz(); // 'foo'
let bar = foo.baz;
bar(); // window

function whatsThis() {
  function whatInside() {
    console.log(this);
  }

  whatInside();
}
whatsThis(); //window

(function () {
  console.log(this); //window
})();

function User() {
  console.log(this instanceof User); // true
  this.name = "Levi";
}
const myUser = new User();
console.log(myUser instanceof User); // true

function greet(greetWord, wish) {
  console.log(`${greetWord} ${this.name} ${wish}`);
}
const user1 = { name: "Levi" };
const user2 = { name: "Eren" };
greet.call(user1, "Hi,", "Have a good day!");
greet.call(user2, "Hello,", "Have a nice day!");
greet.apply(user1, ["Hi,", "Have a good day!"]);
greet.apply(user2, ["Hello,", "Have a nice day!"]);

function sayHi() {
  console.log(`Hi, ${this.name}`);
}
const user3 = { name: "Armin" };
const sayHiToArmin = sayHi.bind(user3);
sayHiToArmin();

//no self context in arrow function
function greetWaitAndAgain() {
  console.log(`Hello, ${this.name}!`);
  setTimeout(() => {
    console.log(`Hello again, ${this.name}!`);
  });
}
const user4 = { name: "Alex" };
user4.greet = greetWaitAndAgain;
user4.greet();

let user5 = {
  firstName: "Ilya",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  },
};

//about arguments
function getSum(a, b) {
  return a + b;
}
console.log(getSum(1, 2, 3, 4, 5));

function sumArgs(...args) {
  let sum = 0;
  for (let index = 0; index < args.length; index++) {
    sum = sum + args[index];
  }
  return sum;
}
sumArgs(1, 2);
sumArgs(10, 11, 4, 5, 6, 7);

function sumArguments() {
  console.log(arguments.length);
  let sum = 0;
  for (let index = 0; index < arguments.length; index++) {
    sum = sum + arguments[index];
  }
  return sum;
}
sumArguments(1, 2);
sumArguments(10, 11, 4, 5, 6, 7);

Math.max(...[1,2,3,5,6,6,6,6,6,6])
// function funcWrapper() {
//   let showArg = () => alert(arguments[0]);
//   showArg(2);
// }
// funcWrapper(1);

// let arr1 = [1, -2, 3, 4];
// let arr2 = [8, 3, -8, 1];
// console.log(Math.max(...arr1, ...arr2));

function greetWaitAndAgain() {
  console.log(`Hello, ${this.name}!`);
}
// greetWaitAndAgain();

const user6 = {
  name: "Ura",
  greet: greetWaitAndAgain,
};
user6.greet();

function sumArguments() {
  console.log(arguments.length);
  debugger;
  let sum = 0;
  for (let index = 0; index < arguments.length; index++) {
    sum = sum + arguments[index];
    debugger;
  }
  debugger;
  return sum;
}
sumArguments(1, 2);
sumArguments(10, 11, 4, 5, 6, 7);
