console.log("hello");
// alert("hi");

var b = "smoo";
console.log(b);

var someNumber = 45;
console.log(someNumber);

//  var age = prompt("age?");

// document.getElementById("someText").innerHTML = age;

//number in javascript

var num1 = 10;
// increse
num1++;

// decrease
num1--;
console.log(num1);

// remainder
console.log(num1 % 5);

// increase, decrease by 10
num1 += 10;
console.log(num1);

// Function
// function fun() {
//   alert("This is func");
// }

// fun();

function greeting(yourName) {
  var result = "hello " + yourName;
  console.log(result);
}

var name = prompt("name?");

greeting(name);

// How do arguments work in function?
// How do we add 2 numbers together in a fuction?

function sumNumbers(num1, num2) {
  var result = num1 + num2;
  console.log(num1 + num2);
}

sumNumbers("Hello", " hi");

// While loops
// var num = 0;
// while (num < 10) {
//   num += 1;
//   console.log(num);
// }

// for loops
for (let num = 0; num < 100; num++) {
  console.log(num);
}

// Data types
let yourAge = 18;
let yourName = "Bob";
let namee = { first: "Jane", last: "Doe" }; // object
let truth = false;
let groceries = ["Apple", "Banana"]; // array
let random; // undefined
let nothing = null;

// string in js
let fruit = "banana";
let moreFruits = "banana\napple";
console.log(moreFruits);

console.log(fruit.length);

console.log(fruit.indexOf("an"));
console.log(fruit.slice(2, 6));
console.log(fruit.replace("ban", "12"));
console.log(fruit.toUpperCase(fruit));
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split("a"));
console.log(fruit.split(""));

// array in JS
let fruits = ["banana", "apple", "orange"];
fruits = new Array("banana", "apple", "orange");

alert(fruits[2]);

fruits[0] = "pear";
console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//array common methods
console.log(fruits.toString());
console.log(fruits.join("-"));
console.log(fruits.pop(), fruits); //remove last item
console.log(fruits.push("pine"), fruits); // append at last

fruits[3] = "new";
fruits[fruits.length] = "new2";
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.unshift("kiwi");
console.log(fruits);

let vege = ["potato", "tomato", "broc"];
let all = fruits.concat(vege);
console.log(all);

console.log(all.sort());
console.log(all.reverse());

let emptyArray = new Array();

for (let num = 0; num < 10; num++) {
  emptyArray.push(num);
  console.log(num);
}

console.log(emptyArray);

//object in JS

let stu = {
  first: "KH",
  last: "K",
  age: 33,
  info: function () {
    return this.first + "\n" + this.last;
  },
};

console.log(stu.first);
console.log(stu.last);
console.log(stu["first"]);
stu.last = "KIM";
console.log(stu.last);
stu.age++;
console.log(stu.age);
console.log(stu.info());

// if condotion
let age = prompt("age?");

if (age >= 18 && age < 35) {
  status = "demo";
} else {
  status = "not my aud";
}

//switch

switch (6) {
  case 0:
    text = "weekend";
  case 5:
    text = "weekend";
  default:
    text = "weekday";
}
console.log(text);
