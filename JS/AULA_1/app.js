//const { type } = require("node:os");

//console.log('hello world');
// this is my first comment in java script
/* this is my first multi line comment in java script
this is the second line of my multi line comment in java script*/

//variables in java script
/*
var Name = 'infantini'; // var is used to declare a variable in java script
let Age = 17; // let is used to declare a variable in java script and it can be reassigned
const pi = 3.14; // const is used to declare a variable in java script and it cannot be reassigned

console.log(Name);
console.log(Age);
console.log(pi);
console.log('my name is ' + Name + ' and my age is ' + Age); // string concatenation in java script
*/
// operators in java script
/*
let a = 10;
let b = 5;
console.log(a + b); // addition
console.log(a - b); // subtraction
console.log(a * b); // multiplication
console.log(a / b); // division
console.log(a % b); // modulus 
console.log(a ** b); // exponentiation
*/
/*
// comparison operators in java script
console.log(a > b); // greater than
console.log(a < b); // less than
console.log(a >= b); // greater than or equal to
console.log(a <= b); // less than or equal to
console.log(a == b); // equal to
console.log(a != b); // not equal to
*/
/*
// logical operators in java script
let x = true;
let y = false;
console.log(x && y); // logical AND
console.log(x || y); // logical OR
console.log(!x); // logical NOT

name = 'infantini';
age = 17;
console.log(name);
console.log(age);
console.log('my name is ' + name, ' and my age is ' + age);

console.log(`my name is ${name} and my age is ${age}`); // template literals in java script

console.log(typeof name); // string
console.log(typeof age); // number

let age =  19;
if (age >= 18) {
  console.log('you are an adult');
} else {
  console.log('you are a minor');
}

//the funcion "´${}´" is used to insert variables into a string in java script. It is called template literals and it is enclosed in backticks (``) 
//instead of single or double quotes. It allows us to write multi-line strings and also to include expressions inside the string.

//ternary operator in java script
let age2 = 19;
let status = age2 >= 18 ? 'adult' : 'minor';
console.log(status);

if (num1 % 2 === 0) {
  console.log('the number is pair');
} else {
  console.log('the number is odd');
}

//repeat estructure in java script
for (let i = 0; i < 5; i++) {
  console.log(i);
}

//arrays in java script
let fruits = ['apple', 'banana', 'orange'];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits.length);

//objects in java script
let person = {
  name: 'infantini',
    age: 17,
    city: 'BSB'
};
*/
//activity: create a calculator BMI in java script
/*
let weight = 70; // weight in kg
let height = 1.75; // height in meters
let bmi = weight / (height * height); //calculate BMI
console.log('your BMI is ' + bmi.toFixed(2)); // round BMI to 2 decimal places

if (bmi < 18.5) {
  console.log('you are underweight');
} else if (bmi >= 18.5 && bmi < 24.9) {
  console.log('you are normal weight');
} else if (bmi >= 25 && bmi < 29.9) {
  console.log('you are overweight');
} else {
  console.log('you are obese');
}
*/

//of our in, arrays = of, objects = in

/*
you are a developer of SENAI sistem, and you need create a system to control a park

rules of the park:
- the park have a capacity of 10 cars
- the park diary fee is R$ 20,00
- if the car stay more than 3 hours, pay the full diary
- if the car stay up to 3 hours, pay R$ 8,00 per hour
- if the client is VIP, recive 20% of discount in the total value

create a program that:
- recive:
    - name of the client
    - number of hours parked
    - if the client is VIP or not
- calculate the total value to pay
- print the total value to pay

-show on console the name of the client, the number of hours parked, if the client is VIP or not and the total value to pay

the values need  to be formatted in currency format (R$ 20,00)
signal (R$) need to be added before the value and the decimal separator need to be a comma (,)
*/
let carInparking = 0;
function parkCar(clientName, hoursParked, isVIP) {
    if (carInparking >= 10) {
        console.log('the park is full');
        return;
    }   
    carInparking++;
    let totalValue = 0;
    if (hoursParked > 3) {
        totalValue = 20;
    } else {
        totalValue = hoursParked * 8;
    }
    if (isVIP) {
        totalValue *= 0.8;
    }
    console.log(`Client: ${clientName}, \nHours Parked: ${hoursParked}, \nVIP: ${isVIP ? 'Yes' : 'No'}, \nTotal Value: R$ ${totalValue.toFixed(2).replace('.', ',')}`);
};

clientName = 'infantini';
hoursParked = 4;
isVIP = true;
parkCar(clientName, hoursParked, isVIP);

clientName = 'Freitas';
hoursParked = 2;
isVIP = false;
parkCar(clientName, hoursParked, isVIP);

clientName = 'Humberto';
hoursParked = 5;
isVIP = true;
parkCar(clientName, hoursParked, isVIP);

clientName = 'Paulo';
hoursParked = 1;
isVIP = false;
parkCar(clientName, hoursParked, isVIP);