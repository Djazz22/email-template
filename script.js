function validateEmail() {
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const formStatus = document.getElementById('formStatus');
    if (email.length > 3 && email.includes('@') && email.includes('.')) {
        emailError.textContent = '';
        formStatus.textContent = '';
        checkAllValid();
    } else {
        emailError.textContent = 'Invalid email format.';
        formStatus.textContent = '';
    }
}

function validatePassword() {
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');
    const formStatus = document.getElementById('formStatus');
    if (password.length > 8) {
        passwordError.textContent = '';
        formStatus.textContent = '';
        checkAllValid();
    } else {
        passwordError.textContent = 'Password must be more than 8 characters.';
        formStatus.textContent = '';
    }
}

function checkAllValid() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const formStatus = document.getElementById('formStatus');
    if (email.length > 3 && email.includes('@') && email.includes('.') && password.length > 8) {
        formStatus.textContent = 'All good to go!';
        formStatus.className = 'success';
    } else {
        formStatus.textContent = '';
    }
}

function submitForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (email.length > 3 && email.includes('@') && email.includes('.') && password.length > 8) {
        if (confirm('Are you sure you want to submit?')) {
            alert('Successful signup!');
        } else {
            document.getElementById('signupForm').reset();
            document.getElementById('emailError').textContent = '';
            document.getElementById('passwordError').textContent = '';
            document.getElementById('formStatus').textContent = '';
        }
    }
}
