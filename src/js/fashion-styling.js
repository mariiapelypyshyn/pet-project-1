const detailsBtn = document.querySelector(".details-btn");
console.log(detailsBtn);

const testimonialsBtn = document.querySelector(".testimonials-btn");
console.log(testimonialsBtn);


const detailsSection = document.querySelector(".details");

const testimonialsSection = document.querySelector(".testimonials");



const handleClickDetails = () => {
    console.log('nhjbhvgghv')
    detailsSection.classList.toggle('visible');
    // detailsBtn.textContent = '+ DETAILS';
    if (detailsSection.classList.contains('visible')) {
        detailsBtn.textContent = '- DETAILS';
    }
    else { detailsBtn.textContent = '+ DETAILS' };

}

const handleClickTestimonials = () => {
    testimonialsSection.classList.toggle('visible');
    if (testimonialsSection.classList.contains('visible')) {
        testimonialsBtn.textContent = '- TESTIMONIALS';
    }
    else { testimonialsBtn.textContent = '+ TESTIMONIALS' };

}



detailsBtn.addEventListener('click', handleClickDetails);
testimonialsBtn.addEventListener('click', handleClickTestimonials);
