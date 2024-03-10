"use strict";

/*
Необязательное задание. 
Необходимо вывести горку в консоль (используя цикл for), как показано на
рисунке, только у вашей горки должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx
*/

const lines = 20;
let str = " ";
const iks = "x";
for (let i = 0; i < lines; i++) {
  str += iks;
  console.log(str);
}
