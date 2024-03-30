// map();

// map bizga array bo'yicha loop qilib beradi va uni ichida return yozilishi kerak

// Example:
// let ar = [1, 2, 3, 4, 5];

// let res = ar.map((val, index) => {
//   if (index % 2 === 0) {
//     return val;
//   } else return 0;
// });

// console.log(res); // [ 1, 0, 3, 0, 5 ]

// ====================================================

// Agar map ichida return bo'lmasa automatic undefined bo`lib ketadi

// Example:
// let ar = [1, 2, 3, 4, 5];

// let res = ar.map((val, index) => {
//   if (index % 2 === 0) {
//     return val;
//   }
// });

// console.log(res); // [ 1, undefined, 3, undefined, 5 ]
