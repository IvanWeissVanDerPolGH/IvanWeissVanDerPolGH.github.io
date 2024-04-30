document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('#navToggle');
    const navMenu = document.querySelector('#navMenu');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('hidden');
    });

    // Handling dropdowns within the navigation
    const navDropdowns = document.querySelectorAll('.nav-dropdown');
    navDropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function() {
            this.classList.toggle('open');
        });
    });
});
