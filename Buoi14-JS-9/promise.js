// Tính diện tích hình thang
// (a + b) *h /2 *2 /4 + 8 + 2 / 6

// phép công xử lý mất 3s
// phép  nhân xử lý mất 2s,
// phép chia xử lý mất 5s
// kết quả tính diện tích hình thang
// 3 trạng thái: pending, fulfilled, reject

const congPromise = (a, b) => {
  console.log('start cong');

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a != 'number' || typeof b != 'number') {
        return reject('Ban phai nhap vao so');
      }
      let result = a + b;
      console.log('cong done: ', result);
      return resolve(result);
    }, 3000);
  }); // biến function thành dạng promise
};

// const congDemo = (a, b) => {
//   return a + b;
// };

const nhanPromise = (a, b) => {
  console.log('start nhan');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a != 'number' || typeof b != 'number') {
        return reject('Ban phai nhap vao so');
      }

      let result = a * b;
      resolve(result);
      console.log('nhan done: ', result);
    }, 2000);
  });
};

const chiaPromise = (a, b) => {
  return new Promise((resolve, reject) => {
    console.log('start chia');
    setTimeout(() => {
      if (typeof a != 'number' || typeof b != 'number') {
        return reject('Ban phai nhap vao so');
      }
      if (b === 0) {
        return reject('Không thể chia cho số 0');
      }
      let result = a / b;
      resolve(result);
      console.log('chia done: ', result);
    }, 5000);
  });
};

const ketqua = () => {
  congPromise(5, 8)
    .then((res) => nhanPromise(res, 'tung'))
    .then((resNhan) => chiaPromise(resNhan, 9))
    .then((final) => {
      console.log('kết quả cuối cùng là: ', final);
    })
    .catch((e) => {
      console.log(e);
    });
};

ketqua();

// chạy tuần tự.
// chạy song song promise.all
// chạy đua: promise.race
