
function delay(message, time) {
    return new Promise((resolve) => {
    setTimeout(() => {
        console.log(message);
        resolve();
    }, time);
    });
}


// ==============================

async function printNumbers() {
    for (let i = 1; i <= 4; i++) {
    await delay(i, 1000); 
    }
}

printNumbers();
