// switch case
// vòng lặp
// làm bài tập 1
let a = 7;
switch (a) {
  case 5:
    console.log('gia tri = 5');
    break;
  case 6:
    console.log('gia tri = 6');
    break;
  case 7:
    console.log('gia tri = 7');
    break;
  case 10:
    console.log('gia tri = 10');
    break;
  default:
    console.log('còn lại');
    break;
}

// let b = 10;
// if (b === 5) {
//   console.log('giá trị = 5');
// } else if (b === 6) {
//   console.log('giá trị  = 6');
// } else if (b === 7) {
//   console.log('giá trị  = 7');
// } else if (b === 10) {
//   console.log('giá trị  = 10');
// } else {
//   console.log('còn lại');
// }

// 3 kiểu sử dụng vòng lặp
// for, while, do while

// console.log('giá trị 1');
// console.log('giá trị 2');
// console.log('giá trị 3');
// console.log('giá trị 4');
// console.log('giá trị 5');
// console.log('giá trị 6');
// console.log('giá trị 7');
// console.log('giá trị 8');
// console.log('giá trị 9');
// console.log('giá trị 10');
// giá trị khởi điểm, điểm cuối, số lần bước nhảy.
// index++,  index = index + 1 , index+=1
// index = index + 2, index +=2
for (let index = 1; index <= 10; index++) {
  console.log(`giá trị ${index}`);
}
// index = 1, 1 <=10(true), log('giá trị 1')
// index = 3, 3<=10(true), log('giá tri 3')
// index = 5, 5<=10(true), log('giá tri 5')
// index = 7, 5<=10(true), log('giá tri 7')
// index = 9, 9<=10(true), log('giá tri 9')
// index = 11, 11<=10(false).
// số lần lặp là số lần thoả mãn điều kiện

let i = 20;
while (i <= 10) {
  console.log('giá trị i là', i);
  i += 2;
}

let j = 20;
do {
  console.log('giá trị j là', j);
  j++;
} while (j <= 5);

// for: sử dụng khi biết số lần lặp. (biết đầu, cuối, số bước nhảy)
// while: vòng lặp vô hạn.
// while (true) {
//   console.log('data');
// }
// do while: muốn sử dụng vòng lặp nhưng nhảy vào ít nhất 1 lần

// break và continue

for (let index = 0; index < 10; index++) {
  if (index === 5) {
    break; // thoát ngay lập tức ra khỏi vòng lặp
  }
  //   console.log('learn break', index);
}

for (let index = 0; index < 10; index++) {
  if (index === 5) {
    continue; // thoát ngay lập tức ra khỏi lần lặp đó lặp
  }
  //   console.log('learn continue', index);
}

// number và string;

// kiêm tra 1 số có phải là số hay không?
let number = '10.7';
// console.log(isNaN(number)); // true tức không phải là số, là số thì là !isNaN
// convert number dùng cho string mà giá trị là number;
console.log(Number.parseFloat(number));
// random số.
console.log(Math.random()); // trả về 1 số ngẫu nhiên trong khoảng từ 0 - 1
console.log(Math.floor(3.9)); // làm tròn xuống
console.log(Math.ceil(3.2)); // làm tròn lên
console.log(Math.round(3.3)); // làm tròn theo toán học
// xúc sắc ( 1, 2,3,4,5,6);
console.log('xúc sắc = ', Math.floor(Math.random() * 6) + 1);
// Math.random() 0.1 -> 1
// * 6 :         0.6.. -> 6
// math.floor: 0 -> 5
// + 1 : 1 -> 6
// random trong 1 khoảng từ min - max;  20 - 30
let min = 20;
let max = 30;
console.log(
  'random trong khoảng min-max',
  Math.floor(Math.random() * (max - min + 1)) + min,
);

//  xử lý String;
let dataTesst = `Tung teacher`;
// các method trong string;
console.log(dataTesst + 'end');
console.log('đếm số ký tự trong string', dataTesst.length);
console.log('bỏ khoảng trắng 2 bên', dataTesst.trim());
console.log('viết thường tất cả ký tự', dataTesst.toLowerCase());
console.log('viết hoa tất cả ký tự', dataTesst.toUpperCase());
console.log('trả về 1 ký tự ở vị trí truyền vào', dataTesst.charAt(6));
console.log(
  'kiểm tra xem teacgh có nằm trong dataTesst hay không',
  dataTesst.includes('teacgh'),
);
console.log('cắt chuỗi', dataTesst.slice(16)); // slice(start, end): lấy start và không lấy end
// btvn: 2, 4, 6. 7. 8.9.10
