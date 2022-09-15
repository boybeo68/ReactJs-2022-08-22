let newArray = [];
let arr = [1, 23];
// CRUD;
newArray.push('Tung'); // thêm phẩn tử vào cuối mảng
newArray.push(12);
newArray.push(19);
newArray.push(30);
let dataPush = newArray.push(50);
// giá trị trả về của push (function)
console.log(newArray);

// console.log(dataPush);
// tìm hiểu về 1 hàm bất kì của array.
// - có thay đổi arr gốc hay không
// - giả trị trả về là gì
// sử dung [...]
let dataSpread = [...newArray, true]; // ko thay đổi array ban đầu, trả về 1 array mới.
let dataSpread2 = [...arr, 'newdata', ...newArray]; // ko thay đổi array ban đầu, trả về 1 array mới.
//... clone array.
console.log(dataSpread2);
newArray.unshift('data pop');
console.log(newArray);
let a = newArray.shift();
console.log(newArray.pop());
// push - thêm ở cuối - thay đổi mảng ban đầu - return độ dài mảng
// unshift - thêm ở đầu  - thay đổi mảng ban đầu - return độ dài mảng
// shift - xoá ở đầu - thay đổi mảng ban đầu - return phần tử đã xoá
// pop - xoá cuối - thay đổi mảng ban đầu - return phần tử đã xoá
// ...: clone array và linh hoạt thêm ở đầu hoặc ở cuối

//  indexOf / lastIndexOf
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison', 'duck'];
let index = beasts.lastIndexOf('tung');
console.log('giá trị index của duck là:', index);

// reverse.
const beasts2 = ['ant', 'bison', 'camel', 'duck', 'bison', 'duck'];
let retunRe = beasts2.reverse();
console.log(retunRe);

// slice: cắt mảng

const beasts3 = ['ant', 'bison', 'camel', 'duck', 'bison', 'duck'];
let afterSlice = beasts3.slice(2, 4);
console.log(afterSlice, beasts3);

// splice: xoá, thêm phần tử vào mảng
const beasts4 = [1, 2, 3, 4, 5, 6];
// let deleteArray = beasts4.splice(2, 2); // (vị trí bắt đầu, số phần từ muốn xoá)
// console.log(deleteArray, beasts4);

// beasts4.splice(4, 2, 'tung', 'manh', 'hoa');
beasts4.splice(beasts4.length, 0, 'Tien');
console.log(beasts4);

// join (biến array thành string theo điều kiện), split (biến 1 chuỗi thành array theo điều kiện) .
// const beasts5 = 123454321;
// let newBeats5 = beasts5.split('');
// let newJoin = newBeats5.join('');
// console.log(newJoin);

// kiểm tra 1 số có phải số đối xứng hay không ? sử dụng các hàm của array  123454321

function checkNumber(n) {
  n = n + '';
  let newN = n.split('').reverse().join('');
  if (newN === n) return true;
  return false;
}

// console.log(checkNumber(123454321));

// sort
// sắp xếp theo bảng chữ cái tieng Anh.
let beasts6 = ['Anh', 'Yến', 'Bảo', 'Gừ', 'Đức'];
// let beasts7 = [1, 8, 4, 6, 10, 3, 6];
// function như 1 params: gọi là callback
//beasts7.sort((a, b) => a - b); // a - b : tăng dần , b - a giảm dần
//console.log(beasts7);

beasts6.sort((a, b) => a.localeCompare(b)); // sử dụng cho tiếng việt
console.log(beasts6);
let products = [
  {id: 1, name: 'aphone', price: 2000},
  {id: 2, name: 'yiaomi', price: 8000},
  {id: 3, name: 'samsung', price: 4000},
  {id: 4, name: 'dpo', price: 5000},
];

products.sort((a, b) => {
  let left = a.price;
  let right = b.price;
  return left === right ? 0 : left > right ? 1 : -1;
});
// if (left === right) {
//   return 0;
// } else if (left > right) {
//   return 1;
// } else {
//   return -1;
// }

// if(a===b){
//   return 0
// }else {
//   return 1
// }
// a===b ? 0 : 1

console.log(products);

// Tính reference của object. => clone object;

let obj1 = {
  name: 'Tung',
  age: 27,
  data: {
    price: 3000,
  },
};

let obj2 = obj1; // không tạo ra 1 ô nhớ mới.
console.log(obj2);
obj2.name = 'Manh Hung';
// console.log(obj2);
// console.log(obj1);
// xử lý clone object.
let obj3 = {...obj1}; //shallow clone: clone ở mức 1 level
obj3.data.price = 5000;
console.log(obj3);
console.log(obj1);

let obj4 = JSON.parse(JSON.stringify(obj1)); //deep clone(copy)
obj4.data.price = 100000;
console.log(obj4);
console.log(obj1);
// JSON.stringify(obj): biến object thành string;
// JSON.parse(str): biến string về object (str: là string dạng object)

// map, filter, reduce, find, findIndex, npm , yarn
