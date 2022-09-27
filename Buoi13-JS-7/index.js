// xử lý bất đồng bộ trong Js
// Tính pha cà phê.
// start pha cà phê.
// doing: 5s
// done: cho thêm đường.

// Sử dụng callback để xử lý bất đồng bộ. ( callStack - webapi - callback queue)
console.log('start pha cà phê');
const doingMakeCoffe = (cb) => {
  setTimeout(() => {
    let sugar = 5;
    console.log('doing pha cà phê');
    cb(sugar);
  }, 5000);
};
doingMakeCoffe((params) => {
  console.log('done pha cà phê', params);
});

// Tính diện tích hình thang. (a + b) * h /2;

// phép công xử lý mất 3s
// phép  nhân xử lý mất 2s
// phép chia xử lý mất 5s
// kết quả tính diện tích hình thang

// điểm yếu của callback khi xử lý bất đồng bộ
// promise
// async await
