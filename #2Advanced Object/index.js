// Reference type ?

// Objectlarning "reference type" deyilishiga asosiy sabab, ular Call stack (xotiramiz)da qiymatni o'zini emas,
// balki o'sha qiymatni Heap deb atalgan joydagi addressini saqlab turadi va yo'naltirib yuboradi. Heap"da esa biz usha
// object yoki array qiymatlari joriy address ga birikib turgan bo'ladi

// ====================================

// Optional chaining "?"

// let obj = {
//   name: "Eshmat",
//   status: "dev",
//   address: {
//     country: "Uzbekistan",
//     city: "Tashkent",
//   },
// };

// obj.address = null;

// access without optional ?
// console.log(obj.address.country); // error

// access with optional
// console.log(obj?.address?.country); // Uzbekistan

// ====================================
