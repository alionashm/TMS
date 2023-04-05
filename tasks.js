function sequence(start = 0, step = 1) {
  let callNumber = start;
  return function () {
    let returnValue = callNumber; // значение для вывода
    callNumber += step; // готовимся к следующему шагу
    return returnValue;
  };
}

function sum(a) {
  let currentSum = a;
  function f(b) {
    currentSum += b;
    return f;
  }
  f.toString = function () {
    return currentSum;
  };
  return f;
}
