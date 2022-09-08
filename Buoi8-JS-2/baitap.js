// Bài 3: in số chẵn từ 1 -> n;

let n = 503;
// c1
// for (let index = 1; index <= n; index++) {
//   console.log('lần lặp thứ', index);
//   if (index % 2 === 0) {
//     console.log(index);
//   }
// }

// c2: độ phực tạp thuật toán giảm 1 nửa, performance tăng gấp đôi.
// for (let index = 2; index <= n; index += 2) {
//   console.log('lần lặp thứ', index);
//   console.log(index);
// }
// 5. Viết chương trình tính tổng từ 1 đến n?
// VD: n = 10, output: 55
// let sum = 0;
// for (let index = 1; index <= n; index++) {
//   //   sum = sum + index;
//   sum += index;
// }
// console.log(sum);

// 0 kiểm tra 1 số có phải số nguyên tố không
// thuật toán: SNT: lớn hơn 1,  là số chia hết cho 1 và chính nó;
// let flag = true;
// if (n < 2) {
//   flag = false;
// }
// for (let index = 2; index < n - 1; index++) {
//   if (n % index === 0) {
//     flag = false;
//     break;
//   }
// }

// if (flag === true) {
//   console.log('n là số nguyên tố');
// } else {
//   console.log('n không phải số nguyên tố');

//C2: số nguyên tố chỉ có duy nhất số 2 là số chẵn.
// Thuật toán
// n < 2: không phải số nguyên tố
// n = 2: là số nguyên tố
// n> 3, n< n-1, n+=2;

// let flag = true;
// if (n < 2) {
//   flag = false;
// }
// if (n === 2) {
//   flag = true;
// }
// for (let index = 3; index < n - 1; index += 2) {
//   if (n % index === 0) {
//     flag = false;
//     break;
//   }
// }

// if (flag === true) {
//   console.log('n là số nguyên tố');
// } else {
//   console.log('n không phải số nguyên tố');
// }

// C3
// tính chất bổ sung SNT:  n là số nguyên tố thì trong khoảng từ 2 đến căn bậc hai cua n sẽ không tồn tại số mà n chia hết
// quan hệ giữa toán học và lập trình
let flag = true;
if (n < 2) {
  flag = false;
}
if (n === 2) {
  flag = true;
}
for (let index = 3; index < Math.sqrt(n); index += 2) {
  if (n % index === 0) {
    flag = false;
    break;
  }
}

if (flag === true) {
  console.log('n là số nguyên tố');
} else {
  console.log('n không phải số nguyên tố');
}
