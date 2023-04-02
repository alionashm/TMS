(function () {
  function calcArea(width, height) {
    return width * height;
  }
  calcArea(5, 7);

  function showMessage(from, text) {
    alert(from + ": " + text);
  }
  showMessage("Max", "Hi!");
  showMessage("Helen", "Hello");

  function showMessageNoText(from, text = "Empty message") {
    alert(from + ": " + text);
  }
  showMessageNoText("Max");

  function getEmptyMessage() {
    return "Empty message";
  }
  function showMessageDefaultFunc(from, text = getEmptyMessage()) {
    alert(from + ": " + text);
  }
  showMessageDefaultFunc("Max");

  function checkEven(num) {
    if (num <= 1) return alert("Not good number");
    else {
      const isEven = !(num % 2);
      return isEven;
    }
  }
  let num = prompt("Enter number > 1", 2);
  let res = checkEven(num);
  if (res !== undefined) {
    if (res) {
      alert("Even");
    } else {
      alert("Odd");
    }
  }

  function noAlert(showFilm) {
    if (!showFilm) return;
    alert("You watch a film");
  }

  //function expression
  const funcExpr = function () {
    alert("i am function expression");
  };

  function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
  function showOk() {
    alert("Pressed yes");
  }
  function showCancel() {
    alert("Pressed cancel");
  }
  ask("Are you sure?", showOk, showCancel);
  ask(
    "Are you sure?",
    function () {
      alert("Pressed yes");
    },
    function () {
      alert("Pressed cancel");
    }
  );

  let age = 16;
  if (age < 18) {
    welcome();
    function welcome() {
      alert("Hey!");
    }
    welcome();
  } else {
    function welcome() {
      alert("Good afternoon!");
    }
  }
  welcome();

  //arrow functions
  const sayHi = () => console.log("Hi");
  const sayHello = () => {
    console.log("Hello");
  };
  const showName = (name) => console.log(`Your name ${name}`);

})();
