// Select all question buttons
const questionBtns = document.querySelectorAll('.question-btn');

questionBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const question = e.currentTarget.closest('.question'); // Ensure correct parent selection
        question.classList.toggle('show-text');

        // Toggle visibility for images and table
        const images = question.querySelector('.question-images');
        const table = question.querySelector('.question-table');

        if (images) {
            images.classList.toggle('show-content');
        }
        if (table) {
            table.classList.toggle('show-content');
        }
    });
});

// Toggle navigation menu
const menuToggleButton = document.getElementById('more-but');
const navMenu = document.getElementById('nav-icon');

menuToggleButton.addEventListener('click', () => {
    // Use class to handle visibility
    navMenu.classList.toggle('visible');
});
