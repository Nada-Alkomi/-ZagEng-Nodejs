function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data Loaded");
        }, 2000);
    });
}

getData()
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });


///===================================================

function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data Loaded");
        }, 2000);
    });
}

async function showData() {
    try {
        let result = await getData();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

showData();




