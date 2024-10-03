
document.addEventListener('DOMContentLoaded', function() {
    const formToggleBtn = document.querySelector('.btn-r');
    const formContainer = document.querySelector('.form-container');
    const closeButton = document.querySelector('.form-container .close-btn');

    formToggleBtn.addEventListener('click', function() {
        formContainer.style.display = 'flex';
    });

    closeButton.addEventListener('click', function() {
        formContainer.style.display = 'none';
    });

    
    const form = document.getElementById('registration-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting the default way

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const confirmPassword = document.getElementById('confirm-password').value.trim();
        
        // Simple validation
        if (!name || !email || !password || !confirmPassword) {
            alert('Please fill out all fields.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        // If validation passes, you can process the form data here
        // For demonstration, we'll just display a success message
        alert('Form submitted successfully!');

        // Hide the form after submission
        formContainer.style.display = 'none';
        
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // Select all FAQ questions
    const faqQuestions = document.querySelectorAll('.faq-question');

    // Add click event listener to each question
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            // Toggle the active class on the parent faq-item
            const faqItem = question.parentElement;
            faqItem.classList.toggle('active');
        });
    });
});



// JavaScript for toggling FAQ answers
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const toggle = item.querySelector('.faq-toggle');

    question.addEventListener('click', () => {
        answer.classList.toggle('visible');
        question.classList.toggle('active');
    });
});
