document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

   
    if (!validatePassword(password)) {
        alert('Password must be at least 8 characters long and contain at least one number and one special character.');
        return;
    }

    // If all validations pass, you can submit the form or perform other actions
    alert('Form submitted successfully!');
    // this.submit(); // Uncomment to submit the form
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePassword(password) {
    const re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    return re.test(password);
}
