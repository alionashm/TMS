"use strict";

/*Задача 1
Напишите код, который выводит все простые числа из интервала от 2 до n.
(Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.) */

(function () {
  console.log("task 1");
  let n = 15;

  for (let i = 2; i <= n; i++) {
    for (let j = 2; j <= i; j++) {
      if (i % j === 0 && j < i) {
        break;
      } else if (j === i) {
        console.log("Simple: " + i);
      }
    }
  }
  console.log("___________________________________");
})();
(function () {
  let mynum = 15;
  let nums = [];
  check_i: for (let i = 2; i <= mynum; i++) {
    for (let j = 2; j <= i; j++) {
      if (i % j === 0) {
        if (i !== j) {
          continue check_i;
        } else {
          nums.push(i);
          continue check_i;
        }
      }
    }
  }
  if (nums.length > 0) {
    var res_num = nums.join(", ");
    alert("Nums from 1 to " + mynum + " - " + res_num);
  }
  console.log("___________________________________");
})();
(function () {
  function myFunction(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      //хороший вариант с оптимизацией!
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  function check(n) {
    for (let i = 2; i <= n; i++) {
      if (myFunction(i)) {
        console.log(i);
      }
    }
  }
  check(15);
  console.log("___________________________________");
})();
(function () {
  function simpleNumbers(n) {
    for (let i = 2; i < n; i++) {
      if (i % 2 !== 0) {
        console.log(i);
      }
    }
  }
  simpleNumbers(15);
  console.log("___________________________________");
})();
/*Задача 2 
Напишем программу для туристического терминала. Запросите у пользователя в какую сторону света он бы хотел отправиться. После ввода данных мы должны вывести в консоль сообщение из списка. Если пользователь ввел неверные данные, выведите сообщение в консоль чтобы он попробовал еще раз.
+ `south` на south пойдешь счастье найдешь
+ `north` на north пойдешь много денег найдешь
+ `west` go west you will find a true friend
+ `east` go east and become a developer*/

(function () {
  console.log("task 2");
  const side = prompt("Enter the cardinal direction", "side");

  switch (side) {
    case "south":
      alert("go south you will find happiness");
      break;
    case "north":
      alert("go north you will find a lot of money");
      break;
    case "west":
      alert("go west you will find a true friend");
      break;
    case "east":
      alert("go east and become a developer");
      break;
    default:
      alert("Enter true data");
      break;
  }
  console.log("___________________________________");
})();

(function () {
  let ans = prompt("Enter the cardinal direction").toLowerCase();
  switch (ans) {
    case "south":
      alert("go south you will find happiness");
      break;
    case "north":
      alert("go north you will find a lot of money");
      break;
    case "west":
      alert("go north you will find a lot of money");
      break;
    case "east":
      alert("go east and become a developer");
      break;
    default:
      alert("Enter true data");
  }
  console.log("___________________________________");
})();

(function () {
  let south = "go south you will find happiness"; //`south`
  let north = "go north you will find a lot of money"; //`north`
  let west = "go west you will find a true friend"; //`west`
  let east = "go east and become a developer"; // `east`
  let str = "";
  do {
    str = prompt("Enter the cardinal direction");
  } while (
    str !== "south" &&
    str !== "north" &&
    str !== "west" &&
    str !== "east"
  );
  switch (str) {
    case "south":
      console.log(south);
      break;
    case "north":
      console.log(north);
      break;
    case "west":
      console.log(west);
      break;
    case "east":
      console.log(east);
      break;
  }
  console.log("___________________________________");
})();
(function () {
  const key = prompt("Enter the cardinal direction", 100);
  switch (key) {
    case "east":
      document.writeln("go east and become a developer");
      console.log("go east and become a developer");
      break;
    case "south":
      document.writeln("go south you will find happiness");
      console.log("go south you will find happiness");
      break;
    case "north":
      document.writeln("go north you will find a lot of money");
      console.log("go north you will find a lot of money");
      break;
    case "west":
      document.writeln("go west you will find a true friend");
      console.log("go west you will find a true friend");
      break;
    default:
      document.writeln("Enter true data");
      console.log("Enter true data");
      break;
  }
  console.log("___________________________________");
})();
/* Задача 3
Написать программу, которая будет выводить в консоль лесенку.
```
    #
    ##
    ###
    ####
    #####
    ######
```
*/

(function () {
  console.log("task 3");
  let str = "#";
  for (let i = 1; i <= 6; i++) {
    console.log(str.repeat(i));
  }
  console.log("___________________________________");
})();

(function () {
  let str = "";
  for (let i = 1; i <= 5; i++) {
    str += "x";
    console.log(str);
  }
  console.log("___________________________________");
})();

(function () {
  let lattice = "";
  for (let i = 0; i <= 6; i++) {
    lattice += "#";
    console.log(lattice);
  }
})();
(function () {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < i + 1; j++) {
      document.writeln("#");
    }
    document.writeln("<br>");
  }
  console.log("___________________________________");
})();
/*Задача 4 (опционально)
Написать программу, которая выполняет следующие операции: 
1. Запрашивает у пользователя число.
2. Последовательно задает вопрос: 
    cколько отнять / прибавить / умножить / разделить от предыдущего результата?
3. По окончании вывести пользователю **`alert`**, содержащий формулу и результат например: 
> ((((6 - 10) + 5) * 20) / 2 = 110)*/

(function () {
  console.log("task 4");
  let num = prompt("enter num", "number");
  let dif = prompt("-", "number");
  let sum = prompt("+", "number");
  let mul = prompt("*", "number");
  let div = prompt("/", "number");

  let res =
    ((Number(num) - Number(dif) + Number(sum)) * Number(mul)) / Number(div);

  alert(
    "Result: (((" +
      num +
      "-" +
      dif +
      ") + " +
      sum +
      ") * " +
      mul +
      ") /" +
      div +
      " = " +
      res
  );
  console.log("___________________________________");
})();

(function () {
  let common = prompt("enter num");
  if (isNaN(common)) throw alert("num is not a number");

  let minus = prompt("-");
  let plus = prompt("+");
  let ast = prompt("*");
  let div = prompt("/");

  common = Number(common);
  minus = Number(minus);
  plus = Number(plus);
  ast = Number(ast);
  div = Number(div);

  alert(
    "Formula: (" +
      common +
      " - " +
      minus +
      " + " +
      plus +
      ") * " +
      ast +
      " / " +
      div +
      ". Result - " +
      ((common - minus + plus) * ast) / div
  );
  console.log("___________________________________");
})();

(function () {
  let enterNum = parseInt(prompt("enter num"));
  let minus = parseInt(prompt("-"));
  let plus = parseInt(prompt("+"));
  let multiply = parseInt(prompt("*"));
  let divide = parseInt(prompt("/"));
  let result = ((enterNum - minus + plus) * multiply) / divide;
  console.log(result);
  console.log("___________________________________");
})();

(function () {
  let number = prompt("enter num", +"");
  let take = prompt("-", +"");
  let add = prompt("+", +"");
  let multiply = prompt("*", +"");
  let divide = prompt("/", +"");
  let summ = ((number - take + add) * multiply) / divide;
  alert(summ);
  console.log("___________________________________");
})();

(function () {
  try {
    let common = prompt("enter num");
    if (isNaN(common)) throw new Error("num is not a number");

    let minus = prompt("-");
    let plus = prompt("+");
    let ast = prompt("*");
    let div = prompt("/");

    common = Number(common);
    minus = Number(minus);
    plus = Number(plus);
    ast = Number(ast);
    div = Number(div);

    alert(
      "Formula: (" +
        common +
        " - " +
        minus +
        " + " +
        plus +
        ") * " +
        ast +
        " / " +
        div +
        ". Result - " +
        ((common - minus + plus) * ast) / div
    );
  } catch (e) {
    alert(e);
  }
  console.log("___________________________________");
})();
