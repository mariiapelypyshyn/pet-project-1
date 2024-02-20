const slide = document.querySelectorAll(".slider-item");
console.log(slide);

const sliderLine = document.querySelector(".slider-line");
console.log(sliderLine);

let count = 0;
let width;

function init() {
    console.log('resize');
    width = document.querySelector(".slider").offsetWidth;
    sliderLine.style.width = width * slide.length + 'px';
    console.log(width);

    slide.forEach(item => {
        item.style.width = width + 'px';
    })
    rollSlider();
}

window.addEventListener('resize', init);
init();

const slidePrev = document.querySelector(".slide-prev").addEventListener('click', function () {
    count--;
     
    if (count < 0) {
        count = slide.length - 1;
       
    }
    rollSlider();
})

const slideNext = document.querySelector(".slide-next").addEventListener('click', function () {
    count++;
     
    if (count >= slide.length) {
        count = 0;
       
    }
    rollSlider();
})

function rollSlider(){
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';
}



