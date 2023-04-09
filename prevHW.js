// task 1
/*Написать функцию **getSum**, которая будет высчитывать сумму чисел от нуля, до параметра, который мы в неё передаем. 
> Если передадим число 100 то, надо вычислить сумму чисел от 0 до 100 (должно получится 5050) */
(function () {
  let sum = 0;
  function getSum(num) {
    for (let i = 0; i <= num; i++) {
      sum += i;
    }
    console.log(sum);
  }
  let str = parseInt(prompt("Enter number"));
  getSum(str);
})();
(function () {
  //чистая функция! это очень хорошо
  function getSum(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
      sum += i;
    }
    console.log(sum);
  }
  getSum(100);
})();
// task 2
/*Написать функцию **getSumNumbers**, которая будет принимать число и вычислять сумму цифр из которых состоит число. */
(function () {
  let sum = 0;
  function getSumNumbers(num) {
    for (let i = 0; i < num.length; i++) {
      sum += num[i];
    }
    console.log(sum);
  }
  let str = Array.from(prompt("Введи число"), Number);
  // let str = Array.from(prompt("Введи число"), (i) => +i);
  getSumNumbers(str);
})();
(function () {
  function getSumNumbers(n) {
    let k = 0;
    let getSum = n.toString().split("");
    // let getSum = [...n.toString()]; //можно заиспользовать спред оператор для разбивки строки на буквы
    for (let i = 0; i < getSum.length; i++) {
      k += +getSum[i];
    }
    console.log(k);
  }
  getSumNumbers(2021);
})();
// task 3
/*Написать функцию **`getSum`** которая принимает два целых числа a и b, которые могут быть положительными или отрицательными, найти сумму всех чисел между ними, включая их, и вернуть ее. Если два числа равны, верните a или b.
 */
(function () {
  let sum = 0;
  function getSum(a, b) {
    if (typeof a != "number" || typeof b != "number") {
      throw new TypeError("Args should be numbers");
    }
    if (a === b) {
      console.log(a);
    } else {
      let start = Math.min(a, b);
      let end = Math.max(a, b);
      for (let i = start; i <= end; i++) {
        sum += i;
      }
      console.log(sum);
    }
  }
  let a = parseInt(prompt("Enter a"));
  let b = parseInt(prompt("Enter b"));
  getSum(a, b);
})();
// task 4
/*Написать функцию, которая принимает n-ое кол-во строк, но не меньше двух, и выводит пользователю каждую строку столько раз, в каком порядке эта строка была передана в функцию
 */
(function () {
  function foo(...args) {
    if (args.length <= 1) {
      alert("Not enough");
      return;
    }
    let arr = [];
    for (let i = 0; i < args.length; i++) {
      const currentString = args[i];
      arr.push(currentString.repeat(i + 1));
    }
    return arr.join("-");
  }
  foo("one");
  foo("one", "two", "three");
})();
(function () {
  function foo(...str) {
    // if (args.length <= 1) {
    //   alert("Not enough");
    //   return;
    // }
    // let res = "";
    for (let i = 0; i < str.length; i++) {
      for (let j = 0; j <= i; j++) {
        console.log(str[i]);
        // res = res + str[i];
      }
      // res = res + "-";
    }
    // return res;
  }

  foo("one", "two", "three");
})();
// task 5
/*Найдите в массиве первое четное число */
(function () {
  const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
  function declaration(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
        break;
      }
    }
  }
  declaration(numbers);
})();

// task 5.1
(function () {
  const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
  let findEvenNumber = (numbers) => {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
        break;
      }
    }
  };
  findEvenNumber(numbers);
})();
