// Tính diện tích hình thang
// (a + b) *h /2 : a= 10, b = 5, h= 7

// phép công xử lý mất 3s
// phép  nhân xử lý mất 2s
// phép chia xử lý mất 5s
// kết quả tính diện tích hình thang

const cong = (a, b, cb) => {
  console.log('start cong');
  setTimeout(() => {
    let result = a + b;
    console.log('cong done: ', result);
    cb(result);
  }, 3000);
};

// const congDemo = (a, b) => {
//   return a + b;
// };

const nhan = (a, b, cb) => {
  console.log('start nhan');
  setTimeout(() => {
    let result = a * b;
    console.log('nhan done: ', result);
    cb(result);
  }, 2000);
};

const chia = (a, b, cb) => {
  console.log('start chia');
  setTimeout(() => {
    let result = a / b;
    console.log('chia done: ', result);
    cb(result);
    // return result;
  }, 5000);
};

const ketqua = (cb) => {
  cong(10, 5, (resultCong) => {
    nhan(resultCong, 7, (resultNhan) => {
      chia(resultNhan, 2, (resultChia) => {
        cb(resultChia);
      });
    });
  });
};

ketqua((finalResult) => {
  console.log('Final result: ', finalResult);
});
