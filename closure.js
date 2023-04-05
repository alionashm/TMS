function makeSizer(size) {
  return function () {
    document.body.style.fontSize = size + "px";
  };
}

const size12 = makeSizer(12);
const size14 = makeSizer(14);
const size16 = makeSizer(16);

document.getElementById("size-12").onclick = size12;
document.getElementById("size-14").onclick = size14;
document.getElementById("size-16").onclick = size16;

const makeCounter = function () {
  let privateCounter = 0;

  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment: function () {
      changeBy(1);
    },
    decrement: function () {
      changeBy(-1);
    },
    value: function () {
      return privateCounter;
    },
  };
};

const Counter1 = makeCounter();
const Counter2 = makeCounter();

alert(Counter1.value()); //0

Counter1.increment();
Counter1.increment();

alert(Counter1.value()); //2

Counter1.decrement();

alert(Counter1.value()); //1
alert(Counter2.value()); //0
