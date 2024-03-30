// Basic Object

// JS Object ? { key: value }

// Create object:
let obj = { name: "eshmat" };

// key => value-ni ushlab turuvchi name
// value => key'ga aloqador va qaram bo'luvchi qiymat

// #discription: Biz biron-bir object ichidagi key ga access qilganimizda huddi usha key ushlab turgan qiymatga ega bo'lamiz

// ====================================

// Object key"lariga 3 xil usulda access qilish mumkin

// 1. Access with dot object.name
// 2. Access with square brackets obj["name"]
// 3. Dynamic access obj[name]

// ====================================

// 1.Object.keys(); // => all keys in object

// 2.Object.values(act); // => all value in object

// 3.Object.assign(act, act2); // => adding other object values inside the object

// 4.Object.entries(act); // => convert to array

// 5.structeredClone // => copy object and paste to new object

// 6.new Object() // => object's constructor

// ====================================

// Object forin loop // loop for keys
// Object forof loop // In JavaScript, when you hear the term "loop", you probably think of using the various loop methods like for loops, forEach() , map() and others.
// But in the case of objects, unfortunately, these methods don't work because objects are not iterable

// ====================================

// Search key in Object
// console.log("name" in obj); // => true or false
