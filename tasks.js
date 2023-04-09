//task 1
function isEmpty(obj) {
  for (let key in obj) {
    // если тело цикла начнет выполняться - значит в объекте есть свойства
    return false;
  }
  return true;
}

//task 2
(function () {
  let menu = {
    width: 200,
    height: 300,
    title: "My menu",
  };

  function multiplyNumeric(obj) {
    for (let key in obj) {
      if (typeof obj[key] == "number") {
        obj[key] *= 2;
      }
    }
  }
  multiplyNumeric(menu);
})();

//task 3
(function () {
  function sumSalaries(salaries) {
    let sum = 0;
    for (let salary of Object.values(salaries)) {
      sum += salary;
    }

    return sum; // 650
  }

  //or
  // function sumSalaries(salaries) {
  //   return Object.values(salaries).reduce((a, b) => a + b, 0) // 650
  // }

  let salaries = {
    John: 100,
    Pete: 300,
    Mary: 250,
  };

  console.log(sumSalaries(salaries)); // 650
})();

//task 4
(function () {
  let user = {
    name: "John",
    age: 30,
  };

  console.log(count(user)); // 2
})();
