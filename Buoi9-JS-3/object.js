// object: đối tượng.
let car = {
  name: 'roy roll',
  color: 'black',
  years: 1990,
  isBuy: true,
  owner: {
    name: 'Tung',
    age: 27,
  },
  images: 'url của ảnh',
  addTool: () => {
    console.log('vô lăng đã được độ thêm ');
  },
};
// products, shop

// Khai báo object. 2 cách
let obj1 = new Object();
console.log(obj1);
let obj2 = {}; // cách 2

// thêm 1 phần tử (property) vào object
obj2.follower = 3000;
obj2.following = 5;

// truy xuất 1 phần tử trong object  2 cách;
console.log(obj2.follower);
console.log(obj2['following']);
obj2.following = 1000;
console.log(obj2);
// delete obj2.follower;
console.log(obj2);
// CRUD. (C: create, r: read, u: update, d: delete)
// check xem object có thuộc tinh a hay không?
console.log(obj2.hasOwnProperty('products'));

// Array (mảng/list) cũng là object
let arr = [1, 2, 3, 4, 5];
let arr2 = ['Tung', 32, false, undefined, null, 10.2]; // 0,1,2,3,4,5 : index của array
console.log(arr2[5]);

// Duyệt object: Objects.key và Objects.value
console.log(Object.keys(car));
console.log(Object.values(car));
console.log(car.addTool());
let products = [
  {id: 1, name: 'iphone', price: 2000},
  {id: 2, name: 'xiaomi', price: 3000},
  {id: 3, name: 'samsung', price: 4000},
  {id: 4, name: 'oppo', price: 5000},
];
for (let index = 0; index < products.length; index++) {
  const element = products[index];
  console.log('element thứ index là', index, element['name']);
}
// console.log('số phần tử của array', products.length);
