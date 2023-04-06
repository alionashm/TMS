"use strict";
let propName = "This is prop name";
let myObj = {
  strKey: "key like string",
  innerObj: { a: "asd", b: {} },
  [propName]: 90,
  propName: "now it is just key",
};

const myArr = [{ label: "value" }, { label2: "value" }];
myObj.innerObj.a;
myObj[propName];

["q", 1, , "123"].map((el) => console.log(el));

const column = {
  id: "1",
  width: "123px",
};
column.width