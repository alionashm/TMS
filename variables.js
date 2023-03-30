(function () {
  const button = document.querySelector("button");
  button.onclick = function () {
    let name = prompt("Name?");
    alert("Hi " + name);
  };

  // let goodName = 123;
  // let _alsoGoodName = "bla";

  // let myHouse = "box";
  // let yourHose = myHouse;

  // // let return = "blabla"; //error

  // const TABLE_WIDTH = "500px";

  // if (true) {
  //   let alertString = "I know about you";
  // }
  // alert(alertString)

  // let foo = 42; // Number
  // foo = "bar"; // String
  // foo = true; //  Boolean

  // let num = 123;
  // num = 1.24;

  // num = Infinity;
  // num = 1 / 0; // Infinity

  // num = "now i get NaN" / 2; //NaN
  // alert(num);

  // const bigInt = 1234567890123456789012345678901234567890n;

  // let str = "Hi";
  // let str2 = "Hello";
  // let str3 = `Hi-${str}`;

  // const alwaysTrue = true;
  // const alwaysFalse = false;
  // const dontKnow = 4 > 2; //true

  // let items = null;

  // let noValue;
  // alert(noValue); //undefined

  // let id1 = Symbol("id");
  // let id2 = Symbol("id");

  // alert(id1 == id2); // false

  // const obj = { anyKey: "anyValue" };

  // typeof undefined; // "undefined"
  // typeof 0; // "number"
  // typeof 10n; // "bigint"
  // typeof true; // "boolean"
  // typeof "foo"; // "string"
  // typeof Symbol("id"); // "symbol"

  // typeof null; //"object"

  // String(123); // explicit
  // 123 + ""; // implicit

  // Boolean(2); // explicit
  // if (2) {
  // } // implicit due to logical context
  // !!2; // implicit due to logical operator
  // 2 || "hello"; // implicit due to logical operator

  // Boolean(""); // false
  // Boolean(0); // false
  // Boolean(-0); // false
  // Boolean(NaN); // false
  // Boolean(null); // false
  // Boolean(undefined); // false
  // Boolean(false); // false

  // Number("123") + // explicit
  //   +"123"; // implicit
  // 123 != "456"; // implicit
  // 4 > "5"; // implicit
  // 5 / null; // implicit
  // true | 0; // implicit

  // null == 0; // false, null is not converted to 0
  // null == null; // true
  // undefined == undefined; // true
  // null == undefined; // true

  alert("Hello");
  const userName = prompt("Enter yor name", "userName"); // second parameter is not required(it's default value)
  let isYourName = confirm("Is it your name?");
})();
