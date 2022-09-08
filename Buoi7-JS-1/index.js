// các cách khai báo biến trong js
var a = 10; // kiểu number
var a = 50.6; // kiểu number
console.log(a);

let name = 'Tung'; // kiểu string
name = 'Hoang'; // kiểu string
name = `Hoang`; // kiểu string
console.log(name);
let c = true; // or false : kiểu boolean;
const PI = 3.14;
console.log(PI);
let car = {
  color: 'red',
  price: 1000000,
  maxSpeed: 500,
  isPay: false,
}; // kiểu object

let people = {
  name: 'Tung',
  age: 27,
  sex: 'male',
}; // kiểu object

function getNumber() {
  let isFan = 50;
  if (isFan > 100) {
    return 'tung là người nổi tiếng';
  } else {
    return 'Tung chả là gì';
  }
} // kiểu function

let undef = undefined; // kiểu undefined

console.log(typeof getNumber);
let nameProduct; //camelCase
let getProduct;
let addToCart;
class PeopleInClass {} // viết hoa tất cả các ký tự đầu của các từ;

// các toán tử trong JS: + - * / % ! !!
let num1 = 12;
let num2 = 5;
let str = 'Tung';
let num3 = false;
let num4 = 0;
let str2 = '';
let other = null; // có nghĩa là không gì cả, kiểu object
other = 100;
// undefined : không được định nghĩa (khai báo). dùng mà không hề khai báo;
// null: dùng là phải khai báo và giá trị là không gì cả.
console.log(typeof other2);

// điều kiện sử dụng if, else (nếu thì)
// các toán tử so sánh: ==; >=, <=, >, <, === , >==, <==, !=, !==, &&
let dtb = 7;
if (dtb >= 8) {
  console.log('Bạn là học sinh giỏi');
} else if (dtb >= 5 && dtb < 8) {
  console.log('Bạn là học sinh khá');
} else if (dtb > 3 && dtb < 2) {
  console.log('bạn là học sinh kém');
} else {
  console.log('bạn là học sinh rất kém kém');
}

let num5 = '10';
if (num5 === 10) {
  console.log('num5 bằng 10');
} else {
  console.log('num5 khác 10');
}
let num6 = '20';
if (num6 !== 20) {
  console.log('num6 khác 20');
} else {
  console.log('num6 bằng 20');
}

// Giải phương trình bậc 2; ax^2 + bx + c = 0;
let a1 = 1;
let b1 = 2;
let c1 = -3;
let delta = Math.pow(b1, 2) - 4 * a1 * c1;
if (delta < 0) {
  console.log('phương trình vô nghiệm');
} else if (delta === 0) {
  let x = -(b1 / (2 * a1));
  console.log('phương trình có nghiệm x = ', x);
} else {
  let x1 = (-b1 + Math.sqrt(delta)) / (2 * a1);
  let x2 = (-b1 - Math.sqrt(delta)) / (2 * a1);
  console.log(`phương trình có 2 nghiệm phân biệt x1 = ${x1} và x2 = ${x2} `);
}
