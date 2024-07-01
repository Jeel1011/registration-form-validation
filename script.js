document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.container__form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        validateForm();
    });

    const numberInput = document.getElementById('number');
    const zipCodeInput = document.getElementById('zip-code');

    // Add event listener for input event
    numberInput.addEventListener('input', function(event) {
        const input = event.target.value;
        // Check if input length is more than 10 characters
        if (input.length > 10) {
            // Truncate the input to only first 10 characters
            event.target.value = input.slice(0, 10);
        }
    });

    // Add event listener for input event
    zipCodeInput.addEventListener('input', function(event) {
        const input = event.target.value;
        // Check if input length is more than 5 characters
        if (input.length > 5) {
            // Truncate the input to only first 5 characters
            event.target.value = input.slice(0, 5);
        }
    });

    function validateForm() {
        const fname = document.getElementById('fname').value;
        const email = document.getElementById('email').value;
        const pwd = document.getElementById('pwd').value;
        const number = document.getElementById('number').value;
        const language = document.getElementById('language').value;
        const genderRadios = document.querySelector('input[name="gender"]:checked');
        const zipCode = document.getElementById('zip-code').value;
        const about = document.getElementById('about-input').value;
    
        // Remove existing error messages
        removeErrorMessages();
    
        let hasError = false;
    
        if (fname.trim() === '') {
            showError('fname', 'Please enter your name.');
            hasError = true;
        }
    
        if (!validateEmail(email)) {
            showError('email', 'Please enter a valid email address.');
            hasError = true;
        }
    
        if (pwd.trim() === '') {
            showError('pwd', 'Please enter a password.');
            hasError = true;
        }
    
        if (number.trim() === '') {
            showError('number', 'Please enter a phone number.');
            hasError = true;
        } else if (isNaN(number) || number.length !== 10) {
            showError('number', 'Please enter a valid 10-digit phone number.');
            hasError = true;
        }
    
        if (language === 'select language') {
            showError('language', 'Please select a language.');
            hasError = true;
        }
    
        if (zipCode.trim() === '') {
            showError('zip-code', 'Please enter a zip code.');
            hasError = true;
        } else if (isNaN(zipCode) || zipCode.length !== 5) {
            showError('zip-code', 'Please enter a valid 5-digit zip code.');
            hasError = true;
        }
    
        if (about.trim() === '') {
            showError('about-input', 'Please write something about yourself.');
            hasError = true;
        }
    
        if (!genderRadios) {
            showError('gender-error', 'Please select your gender.');
            hasError = true;
        }
    
        if (!hasError) {
            // If no errors, submit the form
            form.submit();
        }
    }
    
    
    

    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    function showError(inputId, message) {
        const inputField = document.getElementById(inputId);
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.innerText = message;
    
        if (inputId === 'gender-error') {
            const genderField = document.querySelector('.container__form-data:nth-child(5) td');  // Assuming gender field is the fifth row and appending to its <td> tag
            genderField.appendChild(errorElement);
        } else {
            inputField.parentNode.appendChild(errorElement);
        }
    }

    function removeErrorMessages() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(errorMessage => errorMessage.remove());
    }
});
