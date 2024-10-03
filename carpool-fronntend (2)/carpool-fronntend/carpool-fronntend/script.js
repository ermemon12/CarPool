document.addEventListener("DOMContentLoaded", function() {
    const signupBtn = document.getElementById("signup-btn");
    const formContainer = document.getElementById("form-container");

    signupBtn.addEventListener("click", function() {
        formContainer.style.display = "block"; // Show the form
        document.querySelector(".main-content").style.display = "none"; // Hide the main content
    });
});
