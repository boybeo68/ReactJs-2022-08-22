// map, filter, find, reduce, ...findIndex,
// Callback: là 1 function được truyền function khác như 1 tham số.
// callback: gắn liền với xử lý bất đồng bộ.

// function nauCom(cb) {
//   console.log('Toi dang nau cơm');
//   cb();
// }
// const hereCb = () => {
//   console.log('Đây là callback');
// };
// nauCom(hereCb);

// bất đồng bộ. => đồng bộ (chay từ trên xuống dưới, từ trái qua phải)
const demoBatDongBo = () => {
  console.log('số 1');
  setTimeout(() => {
    console.log('số 2');
  }, 5000);
  console.log('số 3');
};
// những hàm xử lý mất thời gian (setimeout, đọc ghi file, get dữ liệu (post) từ server, ...)  => Js sẽ xếp vào hàng chờ để xử lý sau, ưu tiên xử
// lý những hàm mất ít thời gian trước
// demoBatDongBo();
// xử lý bất đồng bộ: là biến bất đồng bộ về đồ bộ.
// - log('bắt đầu lấy dữ liệu')
// - call lên server lấy 1 số từ server về
// - sau khi lấy được số x2 số đó lên.
// => sử dụng callback để xử lý bất đồng bộ

const callApi = (cb) => {
  console.log('bắt đầu lấy dữ liệu');
  setTimeout(() => {
    let x = 5;
    console.log('lấy dữ liệu xong');
    cb(x);
  }, 3000);
};

callApi((params) => {
  console.log(' dữ liệu được x2 là', params * 2);
});
