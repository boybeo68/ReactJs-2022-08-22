// bài 28
let students = [
  {
    id: 'T3HXX1',
    firstName: 'NgAN',
    lastName: 'Duong Thuy',
  },
  {
    id: 'T3HXX2',
    firstName: 'Ha',
    lastName: 'Do Thi Thu',
  },
  {
    id: 'T3HXX5',
    firstName: 'Minh',
    lastName: 'Nguyen Nhat',
  },
];

let result = students.filter((item, index) => {
  return item.lastName.indexOf('Do') >= 0;
});
console.log(result);
