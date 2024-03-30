// Basic Array []

// Adding a new element in to the array

// let ar = [];

// ar[0] = "new item";
// ar[100] = 1;

// console.log(ar);

// ===============================================

// Converting an array to a string

// let ar = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(ar.join(" "));
// console.log(ar.toString());
// console.log(typeof ar.toString());

// ===============================================

// Update an array element to a new value

// let ar = [1, 2, 3, 4, 5];

// console.log(ar);

// ar[2] = 'two';

// console.log(ar);

// ===============================================

// Access an array element

// arr.at(-1) // takes a minus value

// let arr = ['a', 1, 'b', 2];

// console.log(arr[2]);
// console.log(arr.at(-3));

// ===============================================

// new Array()

// let ar = new Array(5);
// let arr = new Array("5");

// console.log(ar); // =>  [ <5 empty items> ];
// console.log(arr); // => [ "5" ];

// ===============================================

// join("."); mutable

// let ar1 = [1, 2, 3, 4, 5, 6];

// console.log(ar1.join(""));
// console.log(ar1.join("."));

// ===============================================

// concat(); mutable

// let ar1 = [1, 2, 3, 4, 5];
// let ar2 = [6, 7, 8, 9, 10];

// console.log(ar1.concat(ar2));
// console.log(ar1.concat(ar2, [], ar1));

// ===============================================

// Array.isArray() => true or false

// let ar = []
// let obj = {}

// console.log(Array.isArray(ar));
// console.log(Array.isArray(obj));

// ===============================================

// Loops for Array

// let ar = ['Asad', 'Sardor', 'Komil', 'Ibroxim'];

// for (let i = 0; i < ar.length; i++) {
//      console.log(ar[i], i); // value, index loop
// }

// ==========================

// for(let value of ar){
//      console.log(value); // value loop
// }

// for(let value in ar){
//      console.log(value); // index loop
// }

// ===============================================

// push() & pop() immutable

// let ar = [1, 2, 3, 4, 5];

// console.log(ar.push(6)); // push bu array-ga orqadan element qo'shadi
// console.log(ar.pop()); // pop bu array-dan orqadan element o'chiradi

// ===============================================

// unshift() & shift() immutable

// let ar = [1, 2, 3, 4, 5];

// console.log(ar.shift()); // shift oldindan o'chiradi
// console.log(ar.unshift(0)); // unshift bu oldindan qo'shadi

// ===============================================

// slice() mutable

// let ar = [23,654,345,234,234];

// console.log(ar.slice(0,3));

// ===============================================

// splice() immutable

// let ar = [1, 35, 67, 31, 12];

// ar.splice(0, 2, "wba"); // 0-index dan 2-index"gacha kesib va "wba"ga almashtirish

// console.log(ar);

// ===============================================

// toSpliced() mutable

// let ar = [1, 35, 67, 31, 12];

// console.log(ar.toSpliced(0, 2, "wba")); // [ 'wba', 67, 31, 12 ]

// console.log(ar); // [1, 35, 67, 31, 12]

// ===============================================

// includes() => true or false

// let ar = [13, 5, 24, 12, 42];

// console.log(ar.includes(42));

// ===============================================

// reverse() immutable

// let ar = [13, 5, 24, 12, 42];

// console.log(ar.reverse()); // arrayni teskarisiga aylantirib qo'yish

// ===============================================

// toReversed() mutable

// Array.toReversed bu array"dan copy olib kegin teskariga o'giradi

// let ar = [1, 4, 6, 7, 3, 2];

// console.log(ar.toReversed()); // => [ 2, 3, 7, 6, 4, 1 ]

// ===============================================

// Array.with mutable

// Array.with bu array elementlarini yangilash uchun eng qulay usul

// const months = ["Januar", "Februar", "Mar", "April"];
// const news = months.with(2, "March"); // => ["Januar", "Februar", "March", "April"]
