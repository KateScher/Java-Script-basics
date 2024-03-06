// function sayHello() {
//   alert("Привет");
//   alert("Нажали на кнопку");
// }

// Игра в загадки
// let userAnswe = prompt("Зимой и летом одним цветом");

// if (userAnswe === "елка") {
//   console.log("Угадал");
// } else {
//   console.log("Не угадал");
// }

// let userAnswer2 = prompt(
//   "Сидит дед во сто шуб одет, кто его раздевает, тот слезы проливает"
// );

// if (userAnswer2 === "лук") {
//   console.log("Угадал");
// } else {
//   console.log("Не угадал");
// }
// В примерах выше отличие только в вопросе и ответе,
// и если у нас будет много загадок - будет огромная конструкция,
// лучше заменить ее функцией:
function askQuestion(answer, question) {
  const userAnswer = prompt(question);

  if (userAnswer.toLowerCase() === answer) {
    console.log("Угадал");
  } else {
    console.log("Не угадал");
  }
}
askQuestion(
  "лук",
  "Сидит дед во сто шуб одет, кто его раздевает, тот слезы проливает"
);
askQuestion("елка", "Зимой и летом одним цветом");

// А если мне нужно 'позвать' все это вместе, как быть?
// Сделаем функция puzzle и в html добавим эту функцию,
// которая будет срабаьтывать при нажатии на кнопку:
function askQuestion(answer, question) {
  const userAnswer = prompt(question);

  if (userAnswer.toLowerCase() === answer) {
    console.log("Молодец, угадал");
  } else {
    console.log("Не угадал");
  }
}

function puzzle() {
  askQuestion(
    "лук",
    "Сидит дед во сто шуб одет, кто его раздевает, тот слезы проливает"
  );
  askQuestion("елка", "Зимой и летом одним цветом");
}
