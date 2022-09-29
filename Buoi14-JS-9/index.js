setTimeout(() => {
  console.log('timeout 1');
}, 0);

for (let index = 0; index < 100000000000000; index++) {
  console.log(index);
}

console.log('log 2');
// 3 cách xử lý bất đồng bộ : biến những cái ko đồng bộ thành đồng bộ .
// - callback
// - promise
// - async await.
