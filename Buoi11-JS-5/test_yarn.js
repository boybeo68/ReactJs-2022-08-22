var readlineSync = require('readline-sync');
const shortid = require('shortid');
var fs = require('fs');
var _ = require('lodash');

let animals = ['Lion', 'Elephant', 'Crocodile', 'Giraffe', 'Hippo'];
let readFile = fs.readFileSync('./yarn.txt', 'utf-8');
fs.writeFileSync('./data.txt', 'tung da thay doi', 'utf-8');
console.log(readFile);

const students = [
  {
    id: 1,
    name: 'tung',
  },
  {
    id: 2,
    name: 'tung2',
  },
  {
    id: 3,
    name: 'tung3',
  },
  {
    id: 4,
    name: 'tung4',
  },
];
let data = _.remove(students, function (item) {
  return _.indexOf([2, 3], item.id) !== -1;
});
console.log('bb data', data, students);
// var userName = readlineSync.question('May I have your name? ');
// console.log('Hi ' + userName + '!');
// console.log(shortid.generate());
// let product = [];
// product.push({
//   id: shortid.generate(),
//   name: 'Tung',
//   age: 27,
// });

// console.log(product);

// let index = readlineSync.keyInSelect(animals, 'Which animal?');
// console.log('Ok, ' + animals[index] + ' goes to your room.');
