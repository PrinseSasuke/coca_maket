/*let sliderContainer = document.querySelector('.slider-list');
let innerSlider = document.querySelector('.insight-list');

let pressed = false;
let startX;
let x;
const insightItems = Array.from(document.querySelectorAll('.insight-list-item'));

const ItemWidth = insightItems[0].offsetWidth;


sliderContainer.addEventListener("mouseenter", () => {
    sliderContainer.style.cursor = "grab";
});

sliderContainer.addEventListener("mouseup", () => {
    sliderContainer.style.cursor = "grab";
    pressed = false;
});



const checkBoundary = () => {
    let outer = sliderContainer.getBoundingClientRect();
    let inner = innerSlider.getBoundingClientRect();
    const transformValue = getComputedStyle(innerSlider).transform;
    const transformMatrix = new DOMMatrix(transformValue);
    let translateX = transformMatrix.m41;
    console.log(translateX);

    if (translateX > 0){
        innerSlider.style.transform = `translateX(0px)`;
    }
    if (translateX * -1 + ItemWidth > outer.width){
        console.log(translateX, ItemWidth, outer.width)
    }


};


sliderContainer.addEventListener("mousedown", (e) => {
    pressed = true;
    startX = e.clientX - innerSlider.getBoundingClientRect().left;
    sliderContainer.style.cursor = "grabbing";
});

sliderContainer.addEventListener("mousemove", (e) => {
    if (!pressed) return;
    e.preventDefault();

    const currentX = e.clientX - sliderContainer.getBoundingClientRect().left;
    const offsetX = currentX - startX;

    innerSlider.style.transform = `translateX(${offsetX}px)`;
    checkBoundary();
});*/
const carousel = document.querySelector(".slider-list");
let isDragStart = false, prevPageX, prevScrollLeft;
const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}
const dragging = (e) => {
    if (!isDragStart) return;
    let positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
}
const dragEnd = () =>{
    isDragStart = false;
}
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

carousel.addEventListener("mouseup", dragEnd);
carousel.addEventListener("touchend", dragEnd);