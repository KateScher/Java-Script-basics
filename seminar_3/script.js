// Задание 1:

// 1. Написать функцию, которая принимает, имя, фамилия и возраст. Функция должна
// вывести в консоль строку:
// "Привет, `имя` `фамилия`. Вы уже большой, вам `возраст`."

// function printHello(firstName, lastName, age) {
//   console.log(`Привет, ${firstName} ${lastName}. Вы уже большая, вам ${age}`);
// }
// printHello("Ekaterina", "Scherbakova", 18);
//////
// 2. Создайте функцию, которая принимает число, а возвращает квадрат переданного
// ей числа.
// function square(number) {
//   return number ** 2;
// }
// const result = square(+prompt("Введите число: "));
// console.log(result);
////
// 3. Создайте функцию, которая принимает число.
// Функция должна вывести в консоль '+++', если число положительное, либо '---',
// если число было отрицательное. В случае, если было передано не число, либо ноль,
// функция ничего не должна выводить.
// function digit(number) {
//   if (!Number.isFinite(number)) {
//     // !Number - если это не число, ничего не делаем
//     // return  - просто уйти из функции
//     return;
//   }
//   if (number < 0) {
//     console.log("---");
//   } else if (number > 0) {
//     console.log("+++");
//   }
// }
// digit("5"); // ничего не выедется в консоль, т.к. есть проверка на число,
// а в данном случае "5" - это строка.

// Другие решения от студентов:
// function checkNumber(number) {
//   if (typeof number === "number" && number !== 0) {
//     if (number > 0) {
//       console.log("+++");
//     } else {
//       console.log("---");
//     }
//   }
// }
// const result = checkNumber(+prompt(`Введите число`));
// console.log(result);
// ///////
// function ifNegative(number) {
//   if (number > 0) {
//     console.log("+++");
//   } else if (number < 0) {
//     console.log("---");
//   }
// }
// ifNegative(5);
// ifNegative("n");
// ifNegative(-5);
// ifNegative(0);
// ////
// const num = (a) => {
//   if (Number.isInteger(a) && a != 0) {
//     a > 0 ? console.log("+++") : console.log("---");
//   }
//   return;
// };

// Задание 2:
// 1. Создайте функцию, которая параметрами принимает 3 числа и выводит в
// консоль сумму этих чисел.
// Создайте три переменные, со случайными значениями и продемонстрируйте работу
// данной функции.
// function sum(number1, number2, number3) {
//   console.log(number1 + number2 + number3);
// }
// const num1 = Math.floor(Math.random() * 100);
// console.log(num1);
// const num2 = Math.floor(Math.random() * 100);
// console.log(num2);
// const num3 = Math.floor(Math.random() * 100);
// console.log(num3);
// sum(num1, num2, num3);
// 3. Дан код:

// ```
// func(2); // => 4
// func(3); // => 9
// func();

// function func(num = 5) {
//   console.log(num * num);
// }
// ```

// Расскажите, каким будет результат каждого из вызовов функции.

// Задание 3:

// 1. Создайте функцию, которая принимает число, а возвращает квадратный корень
// переданного числа.
// С помощью созданной функции найдите сумму корней чисел 3 и 4 и выведите данную
// сумму в консоль.
// function sqrt(num) {
//   return Math.sqrt(num);
// }
// console.log(sqrt(3) + sqrt(4));
// 2. Создайте функцию, которая находит минимальное число из 2х переданных
// аргументов функции и вернет найденное значение.
// function findmin(ar1, ar2) {
//   // return ar1 < ar2 ? ar1 : ar2; // можно также использовать ф-ю Math.min()
//   return Math.min(ar1, ar2);
// }
// console.log(findmin(8, -5));

// Задание 4:

// 1. Создайте функцию, которая принимает параметром число от 1 до 7, а возвращает
// день недели на русском языке.

// function getWeekDay(number) {
//   switch (number) {
//     case 1:
//       return "Понедельник";
//     case 2:
//       return "Вторник";
//     case 3:
//       return "Среда";
//     case 4:
//       return "Четверг";
//     case 5:
//       return "Пятница";
//     case 6:
//       return "Суббота";
//     case 7:
//       return "Воскресенье";
//     default:
//       return "Некорректный день недели";
//   }
// }
// console.log(getWeekDay(+prompt("Введите день недели"))); // или
// console.log(getWeekDay(7));

// 2. Создайте функцию, которой мы передаем имя и она возвращает приветствие в
// зависимости от времени суток (утро, день, вечер, ночь), например:
// "Добрый день, Иван." или "Доброй ночи, Иван.".

// 1 вариант:
// let clock = new Date();
// let username = "Ekaterina";
// const fn = (someName, time) => {
//   time.getHours() > 18
//     ? console.log(`Добрый вечер ${someName}`)
//     : console.log(`Добрый день ${someName}`);
// };

// fn(username, clock);

// 2 вариант:
// function greetByName(name) {
//   const currentTime = new Date();
//   const currentHour = currentTime.getHours();

//   if (currentHour >= 6 && currentHour < 12) {
//     return `Доброе утро, ${name}.`;
//   } else if (currentHour >= 12 && currentHour < 18) {
//     return `Добрый день, ${name}.`;
//   } else if (currentHour >= 18 && currentHour < 24) {
//     return `Добрый вечер, ${name}.`;
//   } else {
//     return `Доброй ночи, ${name}.`;
//   }
// }

// console.log(greetByName("Ekaterina"));

// 3 вариант:
// function greetByName(name) {
//   const currentTime = new Date();
//   const currentHour = currentTime.getHours();

//   if (currentHour >= 6 && currentHour < 12) {
//     alert(`Доброе утро, ${name}.`);
//   } else if (currentHour >= 12 && currentHour < 18) {
//     alert(`Добрый день, ${name}.`);
//   } else if (currentHour >= 18 && currentHour < 24) {
//     alert(`Добрый вечер, ${name}.`);
//   } else {
//     alert(`Доброй ночи, ${name}.`);
//   }
// }

// greetByName("Ekaterina");

/**
 * Для комментариев
 * Description placeholder
 * @date 06.03.2024 - 14:29:06
 * Функция возводит число в квадрат, jsdoc
 * @param {number} num
 * @returns {number}
 */
// function fn(num) {
//   return num ** 2;
// }
// console.log(fn(5));
