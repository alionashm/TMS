let user = {
  name: "John",
  age: 30,
};
user.surname = "Black";
user.gender = "male";

const firstName = "John";
const username = "userName11";
const user = {
  firstName,
  username,
};

const animal = {
  name: "Lola",
  type: "cat",
};
animal.voice = function () {
  console.log("мяу мяу");
};
const animal = {
  name: "Lola",
  type: "cat",
};
animal.age = 12;
animal.name = "Lola the great";
delete animal.type;

console.log(user.name); // John
console.log(user["age"]); // 30
console.log(user.nme); // undefined

let fruit = prompt("Какой фрукт купить?", "apple");
let bag = {
  [fruit]: 5,
};
console.log(bag.apple); // 5 when fruit="apple"

function makeUser(name, age) {
  return {
    name, // то же самое, что и name: name
    age, // то же самое, что и age: age
  };
}

let obj = {
  for: 1,
  let: 2,
  return: 3,
};
console.log(obj.for + obj.let + obj.return); // 6

//in
let user = { name: "John", age: 30 };
const propKey = "name";
console.log("age" in user); // true
console.log("blabla" in user); // false
console.log(propKey in user); //true

//for in
let user = {
  name: "John",
  age: 30,
  isAdmin: true,
};

for (let key in user) {
  console.log(key); // name, age, isAdmin
  console.log(user[key]); // John, 30, true
}

let codes = {
  key: "HEH",
  49: "Германия",
  41: "Швейцария",
  44: "Великобритания",
  1: "США",
  key2: "BLA",
  key1: "ASDD",
};
for (let code in codes) {
  console.log(code);
}

let a = {};
let b = {};
console.log(a == b); // false

let user = {
  name: "John",
  age: 30,
};
let clone = {};
for (let key in user) {
  clone[key] = user[key];
}
clone.name = "Pete";
console.log(user.name); // John

let user = { name: "John" };
let permissions1 = { canView: true };
let permissions2 = { canEdit: true };
Object.assign(user, permissions1, permissions2);
console.log(user);

let user = { name: "John" };
let clone = { ...user };
clone.age = 30;
console.log(user, clone);

let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50,
  },
};
let clone = Object.assign({}, user);
alert(user.sizes === clone.sizes); // true
user.sizes.width++;
alert(clone.sizes.width); // 51

//this
let user = {
  name: "John",
  age: 30,

  sayHi() {
    console.log("Hi", this.name);
  },
};
user.sayHi(); // John

let user = {
  name: "John",
  age: 30,
  sayHi() {
    console.log(user.name);
  },
};
let admin = user;
user = null;
admin.sayHi(); //ERROR

let user = { name: "John" };
let admin = { name: "Admin" };
function sayHi() {
  console.log(this.name);
}
user.f = sayHi;
admin.f = sayHi;
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

const cat = {
  name: "Lola",
  age: 10,
  breed: "pers",
};
let { name, age: catAge, voice = "meow" } = cat;
console.log(name, catAge, voice);

//Map
let map = new Map();
map.set("1", "str1");
map.set(1, "num1");
map.set(true, "bool1");
//or
// let map = new Map([
//   ["1", "str1"],
//   [1, "num1"],
//   [true, "bool1"],
// ]);
console.log(map.get(1)); // "num1"
console.log(map.get("1")); // "str1"
console.log(map.size); // 3

let john = { name: "John" };
let visitsCountMap = new Map();
visitsCountMap.set(john, 123);
console.log(visitsCountMap.get(john)); // 123

let myMap = new Map([
  ["key1", 500],
  ["key2", 350],
  ["key3", 50],
]);
// keys
for (let vegetable of myMap.keys()) {
  console.log(vegetable); // key1, key2, key3
}
// values
for (let amount of myMap.values()) {
  console.log(amount); // 500, 350, 50
}
// [key, value]
for (let entry of myMap) {
  console.log(entry);
}
myMap.forEach((value, key, map) => {
  alert(`${key}: ${value}`);
});

let obj = {
  name: "John",
  age: 30,
};
let map = new Map(Object.entries(obj));
console.log(map.get("name"));

let prices = Object.fromEntries([
  ["banana", 1],
  ["orange", 2],
  ["meat", 4],
]);
console.log(prices);

let map = new Map();
map.set("banana", 1);
map.set("orange", 2);
map.set("meat", 4);

let obj = Object.fromEntries(map.entries());
//or
let obj = Object.fromEntries(map);

//Set
let set = new Set();
let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);
console.log(set.size); // 3
for (let user of set) {
  console.log(user.name);
}

let set = new Set(["bla", "bla2", "blabla"]);
for (let value of set) console.log(value);
//or
set.forEach((value, valueAgain, set) => {
  console.log(value);
});

let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};
let doublePrices = Object.fromEntries(
  Object.entries(prices).map(([key, value]) => [key, value * 2])
);
alert(doublePrices.meat); // 8
