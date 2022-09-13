// function: sub program: chương trình con: dùng để xử lý "1 việc" (khuyến nghị theo clean code).
// Tác dụng:
// - code gọn, tái sử dụng được source code.
// - code clear hơn.

// cách tách function: cái gì muốn tách thì tách để tiện sử dụng sau này.
// khai báo function

function checkSoNguyenTo(params) {
  if (!params) {
    return;
  }
  let flag = true;
  if (params < 2) {
    flag = false;
  }
  if (params === 2) {
    flag = true;
  }
  for (let index = 2; index < Math.sqrt(params); index += 2) {
    if (params % index === 0) {
      flag = false;
      break;
    }
  }
  return flag; // true or false
}

// cách 2 khai báo: sử dụng arrow function ( trong react js  nên dùng arrow function)

const checkRunN = (a, b, c) => {
  console.log('sử dụng arrow function với các tham số là ', a, b, c);
  return a + b + c;
};

// chạy function
//checkSoNguyenTo(10); //params : tham số truyền vào
let sum = checkRunN(1, 2, 3);
// console.log(sum + 10);

// return trong function
// - giá trị trả về của 1 function, biến function sử dụng được như 1 biến
// - thoát khỏi function.
// let check = checkSoNguyenTo();
// if (check === true) {
//   console.log('n là số nguyên tố');
// } else if (check === false) {
//   console.log('n không phải là số nguyên tố');
// } else {
//   console.log('vui long nhập n');
// }
// sử dụng ... trong function;
const tinhTong = (...params) => {
  let sum = 0;
  for (let index = 0; index < params.length; index++) {
    const element = params[index];
    sum += element;
  }
  return sum;
};

// console.log(tinhTong(1, 2, 3, 4));

// default trong function:

const getName = (name = 'Tung') => {
  return `tên của bạn là: ${name}`;
};

const nameLog = getName();
console.log(typeof getName);
