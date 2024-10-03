document.getElementById('settings-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect user data
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validate password confirmation
    const confirmPassword = document.getElementById('confirm-password').value;
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    // Implement logic to update user information here
    // This could be an API call to update user settings
    alert('Settings updated successfully!');

    // Reset form after submission
    document.getElementById('settings-form').reset();
});
