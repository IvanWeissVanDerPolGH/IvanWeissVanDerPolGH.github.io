document.addEventListener('DOMContentLoaded', function() {
    const hero = document.querySelector('.hero');
    hero.classList.add('animate-wiggle');

    // Toggle wiggle animation on click
    hero.addEventListener('click', function() {
        this.classList.toggle('animate-wiggle');
    });
});
