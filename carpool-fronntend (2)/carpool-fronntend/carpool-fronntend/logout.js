document.getElementById('logoutYes').addEventListener('click', function() {
    // Implement logout logic here, e.g., removing user token, redirecting to login page
    // Example: Clear user session and redirect
    // localStorage.removeItem('userToken'); // Remove user token if using localStorage
    window.location.href = 'signIn.html'; // Redirect to sign-in page after logout
});

document.getElementById('logoutNo').addEventListener('click', function() {
    window.history.back(); // Go back to the previous page
});
