function makeSizer(size) {
  return function () {
    document.body.style.fontSize = size + "px";
  };
}

// const size12 = makeSizer(12);
// const size14 = makeSizer(14);
// const size16 = makeSizer(16);
// // console.log({ size12, size14, size16 });
// document.getElementById("size-12").onclick = () => {
//   document.body.style.fontSize = 12 + "px";
// };
// document.getElementById("size-14").onclick = size14;
// document.getElementById("size-16").onclick = size16;

const makeCounter = function () {
  let privateCounter = 0;

  function changeBy(val) {
    privateCounter += val;
  }

  const res = {
    // increment: function () {
    //   changeBy(1);
    // },
    // decrement: function () {
    //   changeBy(-1);
    // },
    changeAny: function (num) {
      changeBy(num);
    },
    value: function () {
      return privateCounter;
    },
  };

  return res;
};

const Counter1 = makeCounter();
const Counter2 = makeCounter();

console.log({ value1: Counter1.value(), value2: Counter2.value() });
// alert(Counter1.value()); //0
Counter1.changeAny(5);
console.log({ value1: Counter1.value(), value2: Counter2.value() });

// Counter1.increment();
// Counter1.increment();
// Counter2.increment();

// console.log({ value1: Counter1.value(), value2: Counter2.value() });

// alert(Counter1.value()); //2

// Counter1.decrement();

// alert(Counter1.value()); //1
// alert(Counter2.value()); //0
