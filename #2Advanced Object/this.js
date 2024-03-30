// this keyword in Object

// this object ichida yozilsa u usha object"ni o'zini nazarda tutadi

// Example:
// let obj = {
//   name: "Eshmat",
//   getFullName() {
//     console.log(this);
//   },
// };

// obj.getFullName(); // { name: 'Eshmat', getFullName: [Function: getFullName] }

// ===========================================================

// this kalit so'zi bizga object ichidagi malumotlarga har qanday holatda muammolarsiz access qilish uchun yordam beradi chunki
// biz nazarda tutgan object nomi qachondir o'chib ketishi yoki o'zgarishi mumkin.

// Example:
// let obj = {
//   name: "Eshmat",
//   getFullName() {
//     console.log(obj.name);
//   },
// };

// let user = obj;

// obj = null;

// user.getFullName(); // Bu holatda bizga error beradi chunki asil object yo'q bo'lib ketti shu holat yuzaga kelmasligi
// uchun biz object nomi o'rniga this ishlatishimiz zarur chunki this har doim o'zining o'rab turgan object"ni nazarda tutadi

// Example:
// let obj = {
//   name: "Eshmat",
//   getFullName() {
//     console.log(this.name);
//   },
// };

// let user = obj;

// obj = null;

// user.getFullName(); // Eshmat | Endi biz this ishlatkanimiz uchun to'g'ri malumot keladi

// ===========================================================

// this kalit so'zi arrow function ichida ishlamaydi

// let obj = {
//   name: "Eshmat",
//   getFullName: () => {
//     console.log(this.name);
//   },
// };

// let user = obj;

// obj = null;

// user.getFullName(); // undefined

// ===========================================================

// this qachon yoqolib qoladi ?

// Example:
// let user = {
//   name: "Eshmat",
//   lastName: "Toshmatov",
//   getFullName() {
//     console.log(this.name, this.lastName);
//   },
// };

// let obj = {
//   name: "Qo'chqor",
//   lastName: "Bo'riyev",
// };

// Agar joriy object ichidagi function boshqa reference"ga copy qilinsa this ushanda yoqolib qoladi !
// let data = user.getFullName;

// keyinchalik yana this"dan foydalanish uchun call dan foydalansak bo'ladi qilinadi !
// data.call(user); // Eshmat Toshmatov
// data.call(obj); // Qo'chqor Bo'riyev
