let str = "I love JavaScript";
console.log(str.length);
console.log(str[0]);
console.log(str[str.length - 1]);

//========================================

let string = "   JavaScript  &    ";
console.log(string.trim());
console.log(string.trimStart());
console.log(string.trimEnd());
console.log(string.toLowerCase());

//========================================
let numbersarry=[1,2,3,4,5]
for (let i = 0; i < numbersarry.length; i++) {
    console.log(i);
}
console.log(numbersarry.length);
console.log(numbersarry.length - 1);

//========================================

for (let i = 1; i <= 20; i++) {
    if (i === 10) continue;
    console.log(i);
}
//========================================
let numbers = [3, 8, 6, 10, 2];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 6) {
    console.log(numbers[i]);
}
}

//========================================
let num = -4; 
if (num > 0) {
    console.log("Positive");
} else if (num < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}
//========================================
let values = ["js", "15", "8.5", true, false, null];
for (let i = 0; i < values.length; i++) {
    console.log(Number(values[i]));
}

//========================================

let sentence = "I love JavaScript";
if (sentence.includes("JavaScript")) {
    console.log("Found");
} else {
    console.log("Not Found");
}

//========================================

let names = ["Nada", "Sara", "Omar"];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

//========================================

let randomnumber = Math.floor(Math.random() * 10) + 1;
console.log(randomnumber);

//========================================

let ages = [11, 12, 15, 18, 20, 25];
for (let i = 0; i < ages.length; i++) {
    if (ages[i] >= 18) {
    console.log(ages[i]);
}
}
//========================================
let string22 = "Hello World";
let count = 0;
for (let i = 0; i < string22.length; i++) {
    count++;
}
console.log(count);

//========================================

let numbers1 = [7.6, 8.2, 5.9, 9.1];

for (let i = 0; i < numbers1.length; i++) {
    if (Math.round(numbers1[i]) >= 8) {
    console.log("Pass");
} else {
    console.log("Fail");
}
}

//========================================

for (let i = 1; i <= 30; i++) {
    if (i % 2 === 0) {
    console.log(i);
    }
}

//========================================
let numberString = "7";
let number = Number(numberString);
if (number % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

//========================================

let numberss = [5, 2, 9, 1, 7];
let max = numberss[0];
let min = numberss[0];

for (let i = 1; i < numberss.length; i++) {
    if (numberss[i] > max) {
    max = numberss[i];
}
    if (numberss[i] < min) {
    min = numberss[i];
}
}
console.log("Max:", max);
console.log("Min:", min);

//========================================
let sentence2 = "I love JavaScript very much";
let words = sentence2.split(" ");
for (let i = 0; i < words.length; i++) {
    console.log(words[i]);
}

//========================================
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
//========================================
let numbers3 = [2, 4, 6, 8, 10];
let sum = 0;
for (let i = 0; i < numbers3.length; i++) {
    sum += numbers3[i];
}
console.log(sum);
//========================================
let string3 = "JavaScript";
if (string3[0] === "J") {
    console.log("Yes");
} else {
    console.log("No");
}

//========================================

let randomNumber = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber);
//========================================
let numbers4 = [1, 3, 5, 7, 9];
let newArray = [];
for (let i = 0; i < numbers4.length; i++) {
    newArray.push(numbers4[i] * 2);
}
console.log(newArray);
//========================================
let string4 = "JavaScript";
for (let i = 0; i < string4.length; i++) {
    console.log(string4[i]);
}
//========================================
let number5 = 30;
if (number5 % 3 === 0 && number5 % 5 === 0) {
    console.log("Yes");
} else {
    console.log("No");
}
//========================================
let string5 = "I love JavaScript";
let result = "";
for (let i = 0; i < string5.length; i++) {
    if (string5[i] !== " ") {
    result += string5[i];
}
}
console.log(result);
//========================================
let numbers6 = [5, 12, 3, 20, 8];
let counts = 0;
for (let i = 0; i < numbers6.length; i++) {
    if (numbers6[i] > 10) {
    counts++;
}
}
console.log(counts);
//========================================
let number7;

while (true) {
  number7 = Math.floor(Math.random() * 10) + 1;
    console.log(number7);
    if (number7 === 7) break;
}
//========================================
let string7 = "I love JS and JS";
let result1 = "";
for (let i = 0; i < string7.length; i++) {
    if (string7[i] === "J" && string7[i + 1] === "S") {
    result1 += "JavaScript";
    i++; 
} else {
    result1 += string7[i];
}
}
console.log(result1);
//========================================
let text = "banana";
let index = -1;
for (let i = 0; i < text.length; i++) {
    if (text[i] === "a") {
    index = i;
    break;
}
}
console.log(index);
//========================================
let values2 = [1, "hello", true, "JS", 5];
for (let i = 0; i < values2.length; i++) {
    if (typeof values2[i] === "string") {
    console.log(values2[i]);
}
}