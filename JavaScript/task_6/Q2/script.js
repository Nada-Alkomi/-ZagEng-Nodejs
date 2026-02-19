function getUser(callback) {
    setTimeout(() => {
    console.log("User loaded");

    callback({ id: 1 });
    }, 1000);
}


function getOrders(userId, callback) {
    setTimeout(() => {
    console.log("Orders loaded");

    callback([{ id: 10 }]);
    }, 1000);
}

function getOrderDetails(orderId, callback) {
    setTimeout(() => {
    console.log("Order details loaded");    
    callback({ id: 100, product: "Laptop" , 
        price: 1500, quantity: 1 , total: 1500 , 
        status: "Shipped" , 
        estimatedDelivery: "2024-07-01" });
    }, 1000);
}


getUser(function (user) {

    getOrders(user.id, function (orders) {

    getOrderDetails(orders[0].id, function (details) {
        console.log("Details:", details);
    });

    });

});




