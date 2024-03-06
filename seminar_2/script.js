// Задание 1:
// 1. Создать две переменные и спросить у пользователя значения для данных
// переменных. Одна переменная будет хранить имя пользователя, другая его возраст.
// 2. Вывести на экран текст:
// “Добро пожаловать, `имя`. Ваше количество оборотов вокруг солнца - `возраст`.”

// const userName = prompt("Введите имя");

// + превратит ВСЕ введеные данные в число. в противном случае будет NaN, не работает с BigINT
// для проверки на NaN используем функцию Number.isNaN(значение); используется в ключе if

// const userAge = +prompt("Введите возраст");
// const userAge = Number(prompt("Введите возраст"));

// parseInt превратит в число и отбросит дробную часть если она была
// const userAge = Number.parseInt(prompt("Введите возраст"));

// будет сохранять дробную часть при преобразовании в число
// const userAge = Number.parseFloat(prompt("Введите возраст"));

// alert(`Добро пожаловать, ${userName}. Ваше количество оборотов вокруг солнца - ${userAge}.`);

// Задание 2:

// 1. Найти остаток от деления переменных `a` на `b`, где a = 13, b = 5.
// const numberOne = 13;
// const numberTwo = 5;
// const result = numberOne % numberTwo;
// console.log(result);

// определение четное или нечетное число
// const number = 13;
// console.log(number % 2);

// 2. Что выведет на экран (Сначала проговорите, потом проверьте)
// ```
// let a;
// console.log(a);
// ```
// 3. Что выведет на экран (Сначала проговорите, потом проверьте)
// ```NaN
// console.log('abc' * 3);
// ```
// 4. Что выведет на экран (Сначала проговорите, потом проверьте)
// ``` Infinity
// console.log(1 / 0);
// console.log(-1 / 0);
// console.log(Infinity * 0);
// ```
// 5. Что выведет на экран (Сначала проговорите, потом проверьте)
// ```
// console.log('2' * '3');
// ```

// Задание 3:
// 1. Сознательно допустите ошибку в вашем коде. Убедитесь, что ошибка появляется
// в консоли. Определите, в какой строке кода случилась ошибка.

// const numbers;
// console.log(numbers);

// 2. Необходимо вывести в консоль результат суммы переменных a = '2', b = '3'.

// const a = '2';
// const b = '3';
// console.log(a + b);
// console.log(+a + +b);

// 3. Пользователь с клавиатуры вводит 2 числа, необходимо в консоль вывести весь
// текст ниже, одной строкой с переносами строк:

// const numberOne = +prompt("Введите число 1: ");
// const numberTwo = +prompt("Введите число 2: ");

// console.log(`Сумма чисел равна ${numberOne + numberTwo}.
// Разность чисел равна ${numberOne - numberTwo}.
// Произведение чисел равно ${numberOne * numberTwo}.
// Частное чисел равно ${numberOne / numberTwo}.
// Остаток от деления чисел равен ${numberOne % numberTwo}.`);

// Задание 4

// 1. Не запуская код, определите, что выводится в консоль:

// ```
// console.log(String(true));
// // если есть при сложении строка = получим строку
// console.log('a' + true);
// console.log(Number(true));
// // так как нет строки, все превращается в число
// console.log(true + 1);
// // так как нет строки, все превращается в число
// console.log(true + true);
// console.log(true - true);
// console.log(String(true) + Number(true));
// ```

// const yourName = prompt("Ваше имя", "");
// if (yourName === null) {
//     // Пользователь отменил ввод
//     alert("Ввод отменен");
// } else {
//     // Пользователь ввел (корректные) данные
//     alert(`Добро пожаловать на сайт,  ${yourName}`);
// }

// Задание 5:
// 1. Пользователь с клавиатуры вводит число. Необходимо создать условный
// оператор, который выведет одну из следующих строк в консоль:
// “Число больше 5”, “Число меньше 5”, либо “Число равно 5”.

// const number = prompt("Введите число: ");

// if (number > 5) {
//   alert("Число больше 5");
// } else if (number < 5) {
//   alert("Число меньше 5");
// } else {
//   alert("Число равно 5");
// }

// const userNum = +prompt("Введите число", "");
// if (Number.isNaN(userNum)) {
//   alert("Нужно писать число!");
// } else if (userNum > 5) {
//   alert("Число больше 5");
// } else if (userNum < 5) {
//   alert("Число меньше 5");
// } else {
//   alert("Число равно 5");
// }

// 2. Создайте две переменные test1 и test2. Проверьте, равны ли их значения и
// выведите соответствующее сообщение.

// const test1 = 5;
// const test2 = 5;

// if (test1 === test2) {
//     console.log("Числа равны");
// } else {
//     console.log("Числа не равны");
// }

// console.log(test1 === test2 ? "Переменные равны" : "Переменные не равны");

// 3. Пользовать с клавиатуры вводит 2 числа, необходимо определить, какие из двух
// чисел минимальное и вывести в консоль строку “Минимальное число `число`”.

// const numberOne = +prompt('введите число 1: ');
// const numberTwo = +prompt('введите число 2: ');

// if (numberOne > numberTwo) {
//     console.log(`Минимальное число ${numberTwo}`);
// } else {
//     console.log(`Минимальное число ${numberOne}`);
// }

// console.log(Math.min(numberOne, numberTwo));

// console.log(2**6);

// 4. Попросить пользователя ввести число, которое будет больше нуля и меньше 15.
// Если пользователь ввел значение, о котором его попросили, необходимо вывести
// сообщение “Спасибо за число `число`.”, в противном случае, вывести сообщение:
// “А вы, я смотрю, хулиганите! `число` - неверное значение.”

// const numberOne = +prompt('ввдеите число от 1 до 15: ');

// if (numberOne > 0 && numberOne < 15) {
//     console.log(`Спасибо за число ${numberOne}`);
// } else {
//     console.log(`А вы, я смотрю, хулиганите! число ${numberOne}`);
// }

// Задание *

// const number = 2367;
// console.log(number % 10);
// console.log(Math.trunc(number / 10) % 10);
// console.log(Math.trunc(number / 100) % 10);