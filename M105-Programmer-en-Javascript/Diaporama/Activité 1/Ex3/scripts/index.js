const IMAGES_NUMBER = 4;
const images_container = document.querySelector('.images-container')
let counter = 1;

function translateX(value) {
    images_container.style.cssText = `transform:translateY(-${value}px)`;
}

function up() {
    translateX(498 * counter)
    counter += 1
}

// setInterval(() => {
//     up()
// },[400])