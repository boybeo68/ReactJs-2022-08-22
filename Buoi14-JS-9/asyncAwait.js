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

const ketqua = async (cb) => {
  try {
    let resultCong = await congPromise(10, 5);
    let resultNhan = await nhanPromise(resultCong, 7);
    let final = await chiaPromise(resultNhan, 2);
    return cb(final);
  } catch (error) {
    console.log('loi ', error);
  }
};
// - chỉ chạy await được cho những function dang promise
// - handle lỗi của async: sử dung try/catch
let a = 0;
ketqua((final) => {
  console.log('final', final);
});
