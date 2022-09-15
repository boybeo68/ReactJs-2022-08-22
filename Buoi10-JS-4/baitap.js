let a = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 10, 11, 10, 8, 7, 6, 5, 4, 3, 2, 1,
];
function bai22(arr) {
  return Math.min(...arr);
}

function bai23(arr) {
  let a = [];
  let b = [];
  let prev;
  arr.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== prev) {
      a.push(arr[i]);
      b.push(1);
    } else {
      b[b.length - 1]++;
    }
    prev = arr[i];
  }
  let maxFrequency = Math.max(...b);
  let indexMax = b.indexOf(maxFrequency);
  let maxNumberHaveFrequency = a[indexMax];
  console.log(maxNumberHaveFrequency, maxFrequency);
}

bai23(a);

// btvn: 24,25,26,27,28,29
