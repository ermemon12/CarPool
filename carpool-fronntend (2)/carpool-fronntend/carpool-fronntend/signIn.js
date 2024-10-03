const signInForm = document.querySelector('.sign-in-form');

signInForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Redirect to home page (or index.html)
    window.location.href = 'index.html'; // Make sure 'index.html' is the correct name
});
