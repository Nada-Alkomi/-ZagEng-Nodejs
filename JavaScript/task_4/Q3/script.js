let images = [
    "img/1004e482acd32b3edd8e03d84bceda64.jpg",
    "img/17c1be3e57629f292ab3147dd083cc42.jpg",
    "img/586a4f2c1f2b98a05deccf59b1c1cd6d.jpg",
    "img/5ea32d8ffe699bbccf4a170cc36a2a3b.jpg",
    "img/724c5c646e2f685a527f1ca93524701c.jpg",
    "img/b908e04e804212e8e6da7e4ae2d6c378.jpg",
    
];

let currentIndex = 0;
let img = document.getElementById("sliderImage");

img.src = images[currentIndex];

function nextImage() {
    currentIndex++;

    if (currentIndex === images.length) {
    currentIndex = 0;
    }

    img.src = images[currentIndex];
}

function prevImage() {
    currentIndex--;

    if (currentIndex < 0) {
    currentIndex = images.length - 1;
    }

    img.src = images[currentIndex];
}

function resetImage() {
    currentIndex = 0;
    img.src = images[currentIndex];
}
