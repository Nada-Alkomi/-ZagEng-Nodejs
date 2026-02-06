function toUpperCaseArray(arr) {
    return arr.map(function(item) {
    return item.toUpperCase();
    });
}
const names = ["ahmed", "sara"];
console.log(toUpperCaseArray(names));

//=======================================
function checkPassed(students) {
    return students.map(function(student) {
    return {
        name: student.name,
        score: student.score,
        passed: student.score >= 50
    };
    });
}
const students = [
    { name: "Ahmed", score: 80 },
    { name: "Sara", score: 40 }
];
console.log(checkPassed(students));



//===============================================

function longWords(arr) {
    return arr.filter(word => word.length > 4);
}
console.log(longWords(["i love javescript", "hello", "i love programming"]));


//==================================================
function average(arr) {
    let sum = arr.reduce((a, b) => a + b);
    return sum / arr.length;
}


console.log(average([60, 70,90]));


//====================================================

function Names(arr) {
    return arr
    .filter(person => person.age >= 18)
    .map(person => person.name);
}
console.log(Names([
    { name: "Ahmed", age: 23 },
    { name: "Ail", age: 12 },
    { name: "Mona", age: 25 }
]));

//========================================================

function factoial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
    result = result * i;
    }

    return result;
}
console.log(factoial(5)); 
console.log(factoial(4)); 


//=================================================

function uniqueNumbers(arr) {
    return arr.filter(num => arr.indexOf(num) === arr.lastIndexOf(num));
}
console.log(uniqueNumbers([1, 1, 1, 2, 1, 1]));
console.log(uniqueNumbers([2, 4, -2]));

//=====================================
function removeSpecialChars(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (
        (ch >= "a" && ch <= "z") ||
        (ch >= "A" && ch <= "Z") ||
        (ch >= "0" && ch <= "9") ||
        ch === " " ||
        ch === "_" ||
        ch === "-"
    ) {
        result += ch;
    }
    }

    return result;
}
console.log(removeSpecialChars("Hi How are you!"));
console.log(removeSpecialChars("Are-u_coming?"));

//=============================================

function replaceSpaces(str) {
    if (str.includes(" ")) {
    return str.split(" ").join("Love js");
    }
    return str;
}

console.log(replaceSpaces("Hello World"));

//=========================================
function modifyNumbers(arr) {
    return arr.map(num => {
    if (num % 2 === 0) {
    return num + 1;
    } else {
    return num - 1;
    }
    });
}
console.log(modifyNumbers([73, 221, 52, 214]));






