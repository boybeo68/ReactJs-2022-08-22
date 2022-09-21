var readlineSync = require('readline-sync');
const shortid = require('shortid');
var fs = require('fs');

let animals = ['Lion', 'Elephant', 'Crocodile', 'Giraffe', 'Hippo'];
let readFile = fs.readFileSync('./yarn.txt', 'utf-8');
fs.writeFileSync('./data.txt', 'tung da thay doi', 'utf-8');
console.log(readFile);
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
