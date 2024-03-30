// flat()

// flat bizga ichma-ich arraylarni ochib elementlarni outer arrayga olib chiqish uchun qo'l keladi
// default holatda 1 berilgan bo'ladi shuning uchun ham pastdagi kod"da oxirgi 4-qavs qolib ketgan.

// Example:
// let ar = [10, [[23, [[42]]]], [[93], 25]];

// let res = ar.flat(3);

// console.log(res); // [ 10, 23, [ 42 ], 93, 25 ]

// ========================================

// Agar biz har doim hamma ichma-ich ochilgan array"lardan qutilmoqchi bo'lsak flat"ga Infinity berib ketamiz va
// u har doim to`g`ri ishlaydi va nested bo'lganlarni hammasini outer arrayga ochib chiqadi.

// Example:
// let ar = [10, [[23, [[42]]]], [[93], 25]];

// let res = ar.flat(Infinity);

// console.log(res); // [ 10, 23, 42, 93, 25 ]
