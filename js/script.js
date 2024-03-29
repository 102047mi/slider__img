const url1 = 'http://wallpapers-image.ru/2560x1600/cars/wallpapers/wallpapers-cars-019.jpg'
const url2 = 'http://wallpapers-image.ru/2560x1600/cars/wallpapers/wallpapers-cars-023.jpg'
const url3 = 'http://wallpapers-image.ru/2560x1600/cars/wallpapers/wallpapers-cars-09.jpg '

const img = document.createElement('img');
img.height = 200;
img.src = url1;
document.body.append(img);
let texts = [url1, url2, url3];

let slider = document.querySelector('#slider');
let i = 0;

setInterval(() => {
    slider.textContent = texts[i];
    i++;
    if (i == texts.length) {
        i = 0;
    };
}, 1000);