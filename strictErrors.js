"use strict";
(function () {
  // Обращаемся к необъявленной переменной
  myVariable = "pikabu"; //выдаст ReferenceError

  // Присваивание значения глобальной переменной, защищённой от записи
  var undefined = 5; // выдаст TypeError
  var Infinity = 5; // выдаст TypeError

  // Присваивание значения свойству, защищённому от записи
  var obj1 = {};
  Object.defineProperty(obj1, "x", { value: 42, writable: false });
  obj1.x = 9; // выдаст TypeError

  // Присваивание значения свойству, доступному только для чтения
  var obj2 = {
    get x() {
      return 17;
    },
  };
  obj2.x = 5; // выдаст TypeError

  // Задание нового свойства нерасширяемому объекту
  var fixed = {};
  Object.preventExtensions(fixed);
  fixed.newProp = "ohai"; // выдаст TypeError

  delete Object.prototype; // выдаст TypeError

  // Ну зачем вам два свойства с одним именем?
  var o = { p: 1, p: 2 }; // !!! синтаксическая ошибка

  // А как будете отличать входящие параметры функции? Не делай так
  function sum(a, a, c) {
    // !!! синтаксическая ошибка
    "use strict";
    return a + a + c; // ошибка, если код был запущен
  }
})();
