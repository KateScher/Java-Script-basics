"use strict";

/*
Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в 
диапазоне [0, 9].
После создания массива необходимо вывести в консоль следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива, в которых 
значение равно 3.
Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести 
в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
не окажется, значит нужно будет вывести пустой массив.
*/

// const array = [];
// for (let i = 0; i < 5; i++) {
//   array.push(Math.floor(Math.random() * 10));
// }
// console.log(array);

// let sum = 0;
// array.forEach((element) => {
//   sum = sum + element;
// });
// console.log(sum);

// const minValue = Math.min.apply(null, array); //Math.min.apply(null, array); можно заменить на Math.min(...array);
// console.log(minValue);

// const arr = [];
// const element = 3;
// let getIndx = array.indexOf(element);
// while (getIndx != -1) {
//   arr.push(getIndx);
//   getIndx = array.indexOf(element, getIndx + 1);
// }

// console.log(arr);
