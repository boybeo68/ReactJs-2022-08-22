// map : biến đổi tát cả phần tử của array theo 1 điều kiện nào đó
let arr = [1, 2, 3, 4, 5];
// return new array
let arrMap = arr.map((item, index) => {
  return item * 2 + 'Tung' + index; // return chính là điều kiện biến đổi
});

console.log(arrMap, arr);

let products = [
  {
    name: 'iphone',
    price: 10000,
    soluong: 5,
    imageURL: 'https:...',
  },
  {
    name: 'android',
    price: 5000,
    soluong: 2,
    imageURL: 'https:...',
  },
  {
    name: 'oppo',
    price: 20000,
    soluong: 10,
    imageURL: 'https:...',
  },
];

// let ui = products.map((item) => {
//   return (
//     <div>
//       <img src={item.imageURL} alt='' />
//       <h3>{item.name}</h3>
//       <p>{item.price}</p>
//     </div>
//   );
// });

// filter: tìm kiếm.
// return ra 1 array mới các kết quả thoả mãn điều kiện

let arrFilter = products.filter((item, index) => {
  return item.price < 6000; // với filter : return phải là 1 điêu kiện so sánh
});
// trả về phần tử đầu tiên thoả mãn điều kiện
let arrFind = products.find((item, index) => {
  return item.price > 6000; // với filter : return phải là 1 điêu kiện so sánh
});
// trả về index của phần tử đầu tiên thoả mãn điều kiện
let arrFindIndex = products.findIndex((item, index) => {
  return item.price === 7000; // với filter : return phải là 1 điêu kiện so sánh
});

// find, findIndex,findLastIndex tương tự như filter:
console.log(arrFindIndex);

// reduce: tính toán logic dựa trên array
let arr2 = [1, 2, 3, 4, 5];
// let sum = arr2.reduce((initItem, item) => {
//   return initItem + item;
// }, 0);
// cú pháp viết tắt
let sum = arr2.reduce((a, b) => a + b);
console.log(sum);
// 0 + 1 = 1 => gán initItem = 1
// 1+ 2 = 3 => gán initItem = 3
// ...
//  init + 5

// tính tổng giá tiền của tất cả products

let sumPrice = products.reduce((initItem, item) => {
  return initItem + item.price * item.soluong;
}, 0);

console.log(sumPrice);
