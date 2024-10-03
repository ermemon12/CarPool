document.getElementById('heritageForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    let isValid = true;
    const name = document.getElementById('name').value.trim();
    const nameError = document.getElementById('nameError');
    if (name === '') {
        nameError.textContent = 'Full Name is required';
        isValid = false;
        alert('Full Name is required');
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
        nameError.textContent = 'Full Name can only contain letters and spaces';
        isValid = false;
        alert('Full Name can only contain letters and spaces');
    } else {
        nameError.textContent = '';
    }
    const email = document.getElementById('email').value.trim();
    const emailError = document.getElementById('emailError');
    if (email === '') {
        emailError.textContent = 'Email is required';
        isValid = false;
        alert('Email is required');
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        emailError.textContent = 'Please enter a valid email address';
        isValid = false;
        alert('Please enter a valid email address');
    } else if (email.length > 100) {
        emailError.textContent = 'Email cannot exceed 100 characters';
        isValid = false;
        alert('Email cannot exceed 100 characters');
    } else {
        emailError.textContent = '';
    }
    const phone = document.getElementById('phone').value.trim();
    const phoneError = document.getElementById('phoneError');
    if (phone === '') {
        phoneError.textContent = 'Phone Number is required';
        isValid = false;
        alert('Phone Number is required');
    } else if (!/^\d{10}$/.test(phone)) {
        phoneError.textContent = 'Please enter a valid 10-digit phone number';
        isValid = false;
        alert('Please enter a valid 10-digit phone number');
    } else {
        phoneError.textContent = '';
    }
    
    if (isValid) {
        alert('Registration successful! Redirecting to the website.');
        window.location.href = './index.html'; 
    }
});

 
 
 



