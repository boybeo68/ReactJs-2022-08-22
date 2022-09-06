// các cách khai báo biến trong js 
var a = 10; // kiểu number
var a = 50.6; // kiểu number
console.log(a);

let name = 'Tung'; // kiểu string
 name = "Hoang"; // kiểu string
 console.log(name);
let c = true;// or false : kiểu boolean;
const PI = 3.14;
console.log(PI);
let car = {
    color: 'red',
    price: 1000000,
    maxSpeed: 500,
    isPay: false,
} // kiểu object 

let people = {
    name: 'Tung',
    age: 27,
    sex: 'male'
} // kiểu object 

function getNumber() {
    let isFan = 50;
    if (isFan > 100) {
        return 'tung là người nổi tiếng'
    }else {
        return 'Tung chả là gì'
    }
   
} // kiểu function

let undef = undefined // kiểu undefined

console.log(typeof getNumber)