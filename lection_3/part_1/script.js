// alert("Hello script js");

// function helloName(name) {
//   console.log(name);
// }

// helloName("Alex");

// let count = 5;

// function couner() {
//   return count++;
// }

// couner();
// couner();

// console.log(count);
///////////////////////////////
let age = Number(prompt("Сколько Вам лет?"));

const lvlUpAge = () => age + 5;

console.log(`Через 5 лет Вам будет ${lvlUpAge()}`);
///////////////////////////////

function hello() {
  console.log("Hello function");
}

hello();
const sum = (param1, param2) => {
  return param1 + param2;
};

// const result = sum(2, 5);
// console.log(result);
console.log(sum(2, 5)); // сокращенно

//////////////////////////////////////

// const salary = (money) => {
//   money = money * 0.87;
//   return money * 0.75;
// };

// console.log(salary(100));
///////////////////////
// Сделаем как переменную ф-ю
// const salary = (money) => {
//   money = money * 0.87;
//   return money * 0.75;
// };

// const userMoney = Number(prompt("Сколько ты зарабатываешь"));

// console.log(salary(userMoney));

// Где еще можно использовать эту ф-ю?
const salary = (money) => {
  money = money * 0.87;
  return money * 0.75;
};

const userMoney = Number(prompt("Сколько ты зарабатываешь"));

let moneyMonth = salary(userMoney);

console.log(`Для расходов можно использовать ${salary(userMoney)}`);

console.log(`На еду желательно потратить не более чем ${moneyMonth * 0.3}`);
