function getUser() {
    return new Promise((resolve) => {
    setTimeout(() => {
        console.log("User loaded");
        resolve({ id: 1 });
    }, 1000);
    });
}


function getOrders(userId) {
    return new Promise((resolve) => {
    setTimeout(() => {
        console.log("Orders loaded");
        resolve([{ id: 10 }]);
    }, 1000);
    });
}

function getOrderDetails(orderId) {
    return new Promise((resolve) => {
    setTimeout(() => {
        console.log("Details loaded");
        resolve({ id: 100, product: "Laptop" , 
        price: 1500, quantity: 1 , total: 1500 , 
        status: "Shipped" , 
        estimatedDelivery: "2024-07-01" });
    }, 1000);
    });
}


getUser()
    .then(user => {
    return getOrders(user.id);
    })
    .then(orders => {
    return getOrderDetails(orders[0].id);
    })
    .then(() => {
    console.log("All data loaded");
    });
