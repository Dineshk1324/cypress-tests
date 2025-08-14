/*let a=10;

let b="55";

let c=a+b;

console.log(c);

if (true) {
    console.log("I'm Dinesh K");
}




// Print 1 to 10 using a for loop
for (let i = 1; i <= 10; i++) {
    console.log(i);
}



let passengers = 6;  // change this number to test

if (passengers === 10) {
    console.log("✅ Auto is full. Starting now!");
} else if (passengers >= 8) {
    console.log("⏳ Almost full. Waiting for a few minutes...");
} else {
    console.log("🕒 Not enough passengers. Still waiting...");
}
// Output based on the number of passengers
// If passengers is 10: "✅ Auto is full. Starting now!"    


let user = null;
console.log(user); // null


let name;
console.log(name); // undefined

function test() {}
console.log(test()); // undefined

console.log(age);  // ReferenceError: Cannot access 'age' before initialization

let result = 0 / 0;
console.log(result); // NaN

console.log("abc" * 3); // NaN



let score = 0;
if (score) {
  console.log("Has score");
} else {
  console.log("No score"); // Output
}


let msg = "";
if (msg) {
  console.log("Message exists");
} else {
  console.log("Empty message"); // Output
}


let x = 10;     // modern & recommended
const y = 20;   // constant, cannot be changed
var z = 30;     // old way, avoid using it
*/
/*
let name = "Dinesh";
console.log(typeof name); // "string"

let age = 30;
console.log(typeof age);  // "number"

let x;
console.log(typeof x);    // "undefined"

let y = null;
console.log(typeof y);    // ❗ returns "object" (known JS bug)


let username = "Dinesh";
let password = "admin123";

if (username === "Dinesh" && password === "admin123") {
  console.log("Login successful!");
} else {
  console.log("Login failed.");
}

function d (num1,num2,operand){
switch(operand) {
  case '+':
    console.log("Addition:",num1 + num2);
    break;
  case '-':
    console.log("Subtraction:",num1 - num2);
    break;
  case '*':
    console.log("Multiplication:",num1 * num2);
    break;
  case '/':
    console.log("Division:",num1 / num2);
    break;
  default:
    console.log("Invalid operator");
}}

d(150,20,'*');



let mydetails ={
  fname: "Dinesh",
  lname: "K",
  age: 24,
  city: "Chennai"
};

console.log(mydetails.fname);


let mydetails2 = {
  firstName: "Dinesh",
  lastName: "K",
  age: 24,
  designation: "Software Tester",
  hobbies: ["Traveling", "Learning new Skills", "Books Reading"],
  marriedStatus: false,
  education: {
    SSLC: "Chettinad Vidyashram",
    HSLC: "Kumara Rajah Muthiah Higher Secondary School",
    UG: "St Joseph's College Of Engineering"
  }
};

console.log(mydetails2.hobbies[1]);

let string array = ["Dinesh", "K", "Software Tester"];

console.log(string array[0]); // Output: Dinesh


let array = [0,1,2,[5,6,7,[9,10,[13,[15],14],11,12],8],3,4]

console.log(array[3][3][2][1]);

console.log(array[3][3][2]);

console.log(array[3][3]);

console.log(array[3]);





console.log(array);

console.log(array.pop());

console.log(array);





//console.log(array.shift());
console.log(array.push(7));   

console.log(array);



let array = [1, 2, 3, 4, 5, 6];
let part = array.slice(1, 4);  
console.log(part);



let a='10';
let b=10;
console.log(a ,'is declared as', typeof a);
//console.log(typeof a); 

console.log(b,'is declared as', typeof b);
//console.log(typeof b); 



let d1 = 7;

if (d1 === 0) {
    console.log("auto is empty");
} else if (d1 > 0 && d1 < 5) {
    console.log("auto is not full or half-filled yet");
} else if (d1 > 5 && d1 < 8) {
    console.log("auto is almost full can start anytime");
} else if (d1 > 8 && d1 === 10) {
    console.log("auto is  full can start now");
}



let user = null;
console.log(user,' is an ', typeof user);
*/
let d1 = 7;

switch (true) {
  case (d1 === 0):
    console.log("auto is empty");
    break;
  case (d1 > 0 && d1 < 5):
    console.log("auto is not full or half-filled yet");
    break;
  case (d1 > 5 && d1 < 8):
    console.log("auto is almost full can start anytime");
    break;
  case (d1 >= 8):
    console.log("auto is full can start now");
    break;
  default:
    console.log("invalid auto status");
}
