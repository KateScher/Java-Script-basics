const arr = [];
arr.push(1);
console.log(arr);
let arrNew = [];
arrNew = 6;
console.log(arrNew);
///////////////////////
// const arr = [1, 2, "hello", 4, 5, 9];
// console.log(arr);
// console.log(arr[0]);
// console.log(arr.length);
// console.log(arr[arr.length - 1]);

///////////////////////////////
// 1й вариант
// const user = [];
// const userName = prompt("Ваше имя");
// const userAge = prompt("Ваш возраст");
// user.push(userName);
// user.push(userAge);
// console.log(user);
// 2 вариант
// const user = [];
// user.push(prompt("Ваше имя"));
// user.push(Number(prompt("Ваш возраст")));
// console.log(user);

////////////////////////////////////

// const numbers = [2, 3, 19, 15];
// alert(`Запомни цифры ${numbers}`);
// // console.log(numbers[numbers.length - 1]); // последний элемент массива
// console.log(numbers.pop());
// console.log(numbers);

///////////////////////////////////////

// const word = "example";
// const arrWord = word.split(""); // разделяет слово по буквам, как элементы в массиве
// const upWord = arrWord.pop();
// // console.log(upWord.toLocaleUpperCase());
// arrWord.push(upWord.toLocaleUpperCase()); // добавляем Е в конец массива
// console.log(arrWord.join("")); // соединяет элементы массива

//////////////////////////////////////////
// метод 'shift()' - выбор 1го элемента массива
//////////////////////////////////

// метод 'slice()' - без аргументов копирует полностью массив,
//                   а, например, с аргументами (0, 2) - скопирует элементы с 0 по 1.

// метод 'indexOf' - осуществляет поиск индекса элемента, совпадающего
//  со значением, переданного в качестве аргумента. Возвращает индекс первого найденного элемента, в противном случае -1. (т.е. true или false)

// Комбинация циклов и массивов

// const arr = [1, 2, 3, 7, 19];

// for (let i = 0; i < arr.length; i++) {
//   const element = arr[i];
//   console.log(element); // вывод всех элементов массива в столбик
// }

// Вывод элементов больше 5
// const arr = [5, 2, 3, 7, 19, 7, 13, 3];

// for (let i = 0; i < arr.length; i++) {
//   const element = arr[i];
//   if (element >= 5) {
//     console.log(element);
//   } else {
//     continue;
//   }
// }

// Нахождение эл-та по индексу
// const arrAnswers = ["елка", "ёлка", "ель"];
// const userAnswer = prompt("Зимой и летом одним цветом");

// for (let i = 0; i < arrAnswers.length; i++) {
//   const element = arrAnswers[i];
//   if (element === userAnswer) {
//     console.log("Молодец");
//     break;
//   } else {
//     continue;
//   }
// }
