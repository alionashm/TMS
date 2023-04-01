(function () {
  let x = 5;
  let y = 6;
  let z = 15;
  x = y; // x будет присвоено значение 6
  x = y = z; // x, y и z будут равны 15
  console.log({ x, y, z });

  console.log(5 % 2); // 1
  console.log(4 % 2); // 0

  console.log(2 ** 3); // 2³ = 8
  console.log(8 ** (1 / 3)); //корень кубический из 8 = 2

  console.log(2 + 2 + "1");

  let a = 1;
  let b = 2;

  let c = 3 - (a = b + 1);

  console.log(a); // ?
  console.log(c); // ?

  //str.charCodeAt(index)

  let noValue;
  true || (x = 1);
  console.log({ noValue });

  let result1 = a ?? b;
  let result2 = a !== null && a !== undefined ? a : b;

  let commaVar = (1 + 2, 3 + 4);
  console.log(commaVar); //7

  let compRes;
  if (1 > 0) {
    compRes = "yes";
  } else {
    compRes = "no";
  }

  let compRes2 = 1 > 0 ? "yes" : "no";

  let num = 0;
  while (num < 5) {
    console.log(num);
    num++;
  }

  const array = ["I", "learn", "JS"];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
  }

  let counter = 0;
  do {
    const element = array[counter];
    console.log(element);
    counter++;
  } while (counter < 3);

  let sum = 0;
  while (true) {
    let value = +prompt("Enter number", "");
    if (!value) break;

    sum += value;
  }
  alert("Result: " + sum);

  const personOnPhoto = "Spider-man";
  switch (personOnPhoto) {
    case "uncle Ben":
      alert("Peter, I wanted pictures of spider-man");
      break;
    case "just spider":
      alert("I wanted pictures of SPIDER-MAN!!!");
      break;
    case "Spider-man":
      alert("Good job!");
      break;
    default:
      alert("You're fired, Peter Parker");
      break;
  }

  //loop 1
  let i = 0;
  while (++i < 5) alert(i);

  //loop 2
  let j = 0;
  while (j++ < 5) alert(j);
  
})();
