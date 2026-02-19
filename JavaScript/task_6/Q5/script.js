function getData(callback) {
    setTimeout(() => {
    callback("Data Loaded");
    }, 1000);
}

getData(function(result) {
    console.log(result);
});



//==================
function getData() {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data Loaded");
    }, 1000);
    });
}

getData().then(result => {
    console.log(result);
});


//==================
function getData() {
    return new Promise((resolve) => {
    setTimeout(() => {
        resolve("Data Loaded");
    }, 1000);
    });
}

async function fetchData() {
    let result = await getData();
    console.log(result);
}

fetchData();
