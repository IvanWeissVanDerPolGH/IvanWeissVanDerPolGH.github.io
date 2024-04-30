document.addEventListener("DOMContentLoaded", function () {
    // Function to advance the carousel
    function advanceCarousel(carouselId) {
        let carousel = document.getElementById(carouselId);
        let slides = carousel.getElementsByClassName('carousel-slide');
        let currentSlide = carousel.querySelector('.current') || slides[0];
        let nextSlide = currentSlide.nextElementSibling || slides[0];
        
        // Scroll to the next slide
        nextSlide.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        
        // Update current class
        currentSlide.classList.remove('current');
        nextSlide.classList.add('current');
    }

    // Start the interval for each carousel
    let carousels = document.querySelectorAll('.carousel');
    carousels.forEach((carousel, index) => {
        setInterval(function () {
            advanceCarousel(carousel.id);
        }, 4000); // 4000ms = 4 seconds
    });
});
