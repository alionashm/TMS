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

//task 5
(function () {
  const isPlainObject = (element) =>
    typeof element === "object" && !Array.isArray(element) && element !== null;
  const data = { a: 1 };
  console.log(isPlainObject(data)); // true
})();

//task 6
(function () {
  const without = (object, ...args) => {
    const newObject = { ...object };

    args.forEach((arg) => {
      delete newObject[arg];
    });

    return newObject;
  };
  const data = { a: 1, b: 2, c: 3 };
  console.log(without(data, "b", "c")); // { a: 1 }
})();

//task 7
(function () {
  const isEmpty = (object) => {
    const objectKeys = Object.keys(object);
    if (objectKeys.length === 0) {
      return true;
    }

    return !objectKeys.filter(
      (key) => object[key] || object[key] === 0 || object[key] === false
    ).length;
  };
  const data = { a: 1, b: undefined };
  const data2 = { a: undefined };
  console.log(isEmpty(data)); // false
  console.log(isEmpty(data2)); // true
})();

//task 8
(function () {
  const intersection = (firstObj, secondObj) => {
    const firstObjKeys = Object.keys(firstObj);

    return firstObjKeys.reduce((acc = {}, key) => {
      if (firstObj[key] === secondObj[key]) {
        acc = {
          ...acc,
          [key]: firstObj[key],
        };
      }

      return acc;
    }, {});
  };
  const data = { a: 1, b: 2 };
  const data2 = { c: 1, b: 2 };
  console.log(intersection(data, data2)); // { b: 2 }
})();

//task 9
(function () {
  const getUniq = (arr) => {
    return [...newSet(arr)];
  };
  const data = [11, 12, 4, 5, 11, 12, 5, 5, 5, 78, 9, 1];
  console.log(getUniq(data)); //[11, 12, 4, 5, 78, 9, 1]
})();
