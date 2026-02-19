
function checkNumber(num) {
    return new Promise((resolve, reject) => {
    if (num > 0) {
        resolve("Positive");
    } else if (num === 0) {
        resolve("Zero");
    } else {
        reject("Negative");
    }
    });
}


// ==============================

checkNumber(5)
.then(result => {
    console.log("Then/Catch Result:", result);
    })
.catch(error => {
    console.log("Then/Catch Error:", error);
    });

checkNumber(-3)
.then(result => {
    console.log("Then/Catch Result:", result);
    })
.catch(error => {
    console.log("Then/Catch Error:", error);
    });


// ==============================

async function testNumber(num) {
    try {
    const result = await checkNumber(num);
    console.log("Async/Await Result:", result);
    } catch (error) {
    console.log("Async/Await Error:", error);
    }
}

testNumber(0);
testNumber(-10);
