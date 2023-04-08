const jedis = ["Anakin", "Luke"];
const sith = ["Palpatine", "Anakin"];
// запускаем цикл, определяем переменную итератора
for (let i = 0; i < jedis.length; i++) {
  // создаём переменную, на которую можем ссылаться
  const thisJedi = jedis[i];
  // проверяем, существует ли элемент в проверяемом массиве
  if (sith.includes(thisJedi)) {
    // если существует, значит, этот джедай ещё и ситх
    console.log(`${thisJedi} is also a Sith`);
    // можем выходить
    break;
  }
  console.log(`${thisJedi} is not a Sith`);
}

// Создаём глобальную переменную состояния для отслеживания
let matching;
// запускаем цикл в массиве
jedis.forEach((jedi, index, array) => {
  // проверяем, есть ли элемент jedi в массиве sith
  if (!sith.includes(jedi)) {
    // если нет, задаём значение false глобальной переменной
    matching = false;
  }
  // код продолжает работу...
});
console.log(matching); // false
