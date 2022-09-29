// Tính diện tích hình thang
// (a + b) *h /2 *2 /4 + 8 + 2 / 6

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
// (a + b) *h /2 *2 /4 + 8 + 2 / 6
const ketqua = (cb) => {
  cong(10, 5, (resultCong) => {
    nhan(resultCong, 7, (resultNhan) => {
      chia(resultNhan, 2, (resultChia) => {
        nhan(resultChia, 2, (nhan2) => {
          chia(nhan2, 4, (chia4) => {
            cong(chia4, 8, (cong8) => {
              cong(cong8, 2, (cong2) => {
                chia(cong2, 6, (chia6) => {
                  cb(chia6);
                });
              });
            });
          });
        });
      });
    });
  });
};

ketqua((finalResult) => {
  console.log('Final result: ', finalResult);
});
