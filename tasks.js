//task 1
function camelize(str) {
  return str
    .split("-")
    .map((word, index) =>
      index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
}

//task 2
(function () {
  function filterRange(arr, a, b) {
    return arr.filter((item) => a <= item && item <= b);
  }
  let arr = [5, 3, 8, 1];
  let filtered = filterRange(arr, 1, 4);
  console.log(filtered);
  console.log(arr);
})();

//task 3
(function () {
  let arr = [5, 2, 1, -10, 8];
  arr.sort((a, b) => b - a);
  console.log(arr);
})();

//task 4
(function () {
  function copySorted(arr) {
    return arr.slice().sort();
  }
  let arr = ["HTML", "JavaScript", "CSS"];
  let sorted = copySorted(arr);
  console.log(sorted);
  console.log(arr);
})();

//task 5
(function () {
  let user1 = { name: "Ivan", age: 25 };
  let user2 = { name: "Alex", age: 30 };
  let user3 = { name: "John", age: 28 };

  let users = [user1, user2, user3];

  let names = users.map((item) => item.name);

  console.log(names);
})();

//task 6
(function () {
  function sortByAge(arr) {
    arr.sort((a, b) => (a.age > b.age ? 1 : -1));
  }

  let user1 = { name: "Ivan", age: 25 };
  let user2 = { name: "Alex", age: 30 };
  let user3 = { name: "John", age: 28 };

  let arr = [user1, user2, user3];

  sortByAge(arr);

  console.log(arr[0].name); // Alex
  console.log(arr[1].name); // Ivan
  console.log(arr[2].name); // John
})();

//task 7
(function () {
  function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
  }

  let user1 = { name: "Ivan", age: 25 };
  let user2 = { name: "Alex", age: 30 };
  let user3 = { name: "John", age: 28 };

  let arr = [user1, user2, user3];

  alert(getAverageAge(arr));
})();

(function () {
  function unique(arr) {
    let result = [];

    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }

    return result;
  }
  let strings = [
    "о-о",
    "о-о",
    "зеленоглазое",
    "такси",
    "о-о",
    "о-о",
    "притормози",
    "притормози",
  ];

  console.log(unique(strings)); // о-о, зелеонаглазое, такси, притормози
})();
