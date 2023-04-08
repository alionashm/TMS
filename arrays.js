"use strict";

let arr = new Array();
let arr2 = [];

let arr3 = [
  "str",
  { name: "Aliona" },
  function () {
    console.log("Hi!");
  },
  false,
];

let arr4 = [1, 4, 5, 8, 7, 9, 11];
console.log(arr4[arr4.length - 1]);
console.log(arr4.at(-1));

//INCORRECT
arr.test = 5; //key prop is not a number
arr[1000]; // array "holes"
arr[1000];
arr[999]; //incorrect order

//copy
const myTasks = ["finish table", "prepare to lesson"];
const ivanTasks = myTasks;
ivanTasks.push("clean flat");
console.log(ivanTasks); //???

//destr
const catProfile = [
  "Maru",
  "Scottish Fold",
  true,
  "https://youtu.be/ChignoxJHXc",
];
const catName = catProfile[0];
const catBreed = catProfile[1];

const [catName2, catBreed2] = catProfile;
console.log(catName2);

let [name1, name2, ...rest] = [
  "Julius",
  "Caesar",
  "Consul",
  "of the Roman Republic",
];
console.log(rest[0]); // Consul
console.log(rest[1]); // of the Roman Republic
console.log(rest.length); // 2

let [name = "Guest", surname = "Anonymous"] = ["Cahir"];
console.log({ name, surname });

//iterators
const people = ["Tom", "Bob", "Sam"];
for (const person of people) {
  console.log(person);
}
const items = people.entries();
console.log(items.next());

//custom iterator
const iterable = {
  [Symbol.iterator]() {
    return {
      current: 1, // current value
      end: 3, //limit
      next() {
        if (this.current <= this.end) {
          return { value: this.current++, done: false };
        }
        return { done: true };
      },
    };
  },
};
const myIterator = iterable[Symbol.iterator](); //get iterator
console.log(myIterator.next()); // {value: 1, done: false}
console.log(myIterator.next()); // {value: 2, done: false}
console.log(myIterator.next()); // {value: 3, done: false}
console.log(myIterator.next()); // {done: true}
for (const value of iterable) {
  console.log(value);
}

//another example
const team = {
  [Symbol.iterator]() {
    return {
      index: 0,
      members: ["Tom", "Alice", "Kate"],
      next() {
        if (this.index < this.members.length) {
          return { value: this.members[this.index++], done: false };
        }
        return { done: true };
      },
    };
  },
};
for (const member of team) {
  console.log(member);
}

//methods
(function () {
  let arr = [1, 2];
  alert(arr.concat([3, 4])); // 1,2,3,4
  alert(arr.concat([3, 4], [5, 6])); // 1,2,3,4,5,6
  alert(arr.concat([3, 4], 5, 6)); // 1,2,3,4,5,6
  console.log([...arr, 3, 4]);
})();

(function () {
  let arr = [1, 2];
  let arrayLike = {
    0: "bla",
    1: "more bla",
    [Symbol.isConcatSpreadable]: true,
    length: 2,
  };
  console.log(arr.concat(arrayLike));
})();

//splice
(function () {
  let arr = ["I", "have", "not", "time"];
  const removed = arr.splice(2, 1);
  arr.splice(0, 1, "You");
  console.log(arr);
})();

["I", "have", "not", "time"].forEach((item, index, array) => {
  console.log(`Index of ${item} is ${index} in ${array}`);
});

const arr = [NaN];
console.log(arr.indexOf(NaN)); // -1
console.log(arr.includes(NaN)); // true

const res = ["I", "have", "not", "time"].map((item, index, array) => {
  return item.length;
});

//sort
(function () {
  let arr = [1, 2, 15];
  // метод сортирует содержимое arr
  arr.sort();
  console.log(arr); // 1, 15, 2

  function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }
  let arr2 = [1, 2, 15];
  arr2.sort(compareNumeric);
  // arr.sort( (a, b) => a - b );
  console.log(arr); // 1, 2, 15
})();

let arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr); // 5,4,3,2,1

let arr = "Ivan, Alex, John".split(", ", 2);
console.log(arr);

let arr = ["Ivan", "Alex", "John"].join(", ");
console.log(arr);

let arr = [1, 2, 3, 4, 5];
let result = arr.reduce((sum, current) => sum + current, 0);
console.log(result); // 15

console.log(Array.isArray({})); // false
console.log(Array.isArray([])); // true
