// Number sort()

// Agar array ichidagi sonlar 10dan kichik bo'lsa biz shunchaki "arr.sort()" shunday qilib ishlatsak bo'ladi

// Lekin agar array ichidagi sonlar 10dan katta bo'lsa bu kod to'g'ri ishlamaydi

// Example:
// let ar = [4, 1, 3, 2, 5];

// let res = ar.sort();

// console.log(res); // [1, 2, 3, 4, 5]

// ========================================

// Biz agar har doim to'g'ri sort qilmoqchi bo'lsak ushbu kod"dan foydalanamiz

// Example:
// let ar = [41, 19, 31, 25, 53];

// let res = ar.sort((a, b) => a - b);

// console.log(res); // [ 19, 25, 31, 41, 53 ]

// ====================================================================

// String sort()

// Agar array elementlari ichida katta harif yo'q bo'lsa va hammasida kichik hariflar bo'lsa bizga bu usul qo'l keladi lekin
// agar katta harif bor bo'lsa bu kod xato ishlaydi

// let ar = ["apple", "kiwi", "orange", "banana"];

// let res = ar.sort();

// console.log(res); // [ 'apple', 'banana', 'kiwi', 'orange' ]

// ========================================

// Biz har qanday holatda ham to'g'ri sort qilish uchun bu kod"dan foydalanamiz

// let ar = ["apple", "Kiwi", "orange", "Banana"];

// let res = ar.sort((a, b) => a.localeCompare(b));

// console.log(res); // [ 'apple', 'Banana', 'Kiwi', 'orange' ]
