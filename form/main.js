const firstName = document.getElementById('first_name');
const lastName = document.getElementById('last_name');
const firstNameEvent = firstName.addEventListener('keyup', () => validateName(firstName));
const lastNameEvent = lastName.addEventListener('keyup', () => validateName(lastName));

function validateName(element) {
    if (isNullOrWhitespace(element, element.value)) {
        return;
    }
    clearAllErrorMessage(element);
}

const username = document.getElementById('username');
const usernameEvent = username.addEventListener('keyup', () => checkUsername());
function checkUsername() {
    if (isNullOrWhitespace(username, username.value)) {
        return;
    }
    clearAllErrorMessage(username);
}

const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm_password');
const passwordEvent = password.addEventListener('keyup', () => checkPasswordValidity(password));
const confirmPasswordEvent = confirmPassword.addEventListener('keyup', () => {
    checkPasswordValidity(confirmPassword);
    checkPasswordEquality();
});
function checkPasswordValidity(element) {
    if (!isValidLength(element, element.value, 8)) {
        return;
    }
    clearAllErrorMessage(element.id);
}

function checkPasswordEquality() {
    if (password.value !== confirmPassword.value) {
        updateErrorMessage(confirmPassword, "Password entered does not match.");
        return;
    }
    clearAllErrorMessage(confirmPassword.id);
}

const email = document.getElementById('email');
const emailEvent = email.addEventListener('keyup', () => checkEmail());
function checkEmail() {
    if (isNullOrWhitespace(email, email.value)) {
        return;
    }
    clearAllErrorMessage(email);
}

const dateOfBirth = document.getElementById('date_of_birth');
const dateOfBirthEvent = dateOfBirth.addEventListener('change', () => checkDateOfBirth());
function checkDateOfBirth() {
    if (isNullOrWhitespace(dateOfBirth, dateOfBirth.value)) {
        return;
    }
    let userBirthDate = new Date(dateOfBirth.value);
    if (!userBirthDate) return;
    if (new Date().getFullYear() - userBirthDate.getFullYear() < 13) {
        updateErrorMessage(dateOfBirth, "User under the age of 13 is not allowed to register.");
        return;
    }
    clearAllErrorMessage(confirmPassword.id);
}

const agreement = document.getElementById('agreement');
function checkAgreement() {
    if (!agreement.checked) {
        updateErrorMessage(agreement, "You must agree to the terms and agreements before registering.");
        return;
    }
    clearAllErrorMessage(confirmPassword.id);
}

const submit = document.getElementById('submit');
const submitEvent = submit.addEventListener('click', () => {
    validateName(firstName);
    validateName(lastName);
    checkUsername();
    checkPasswordValidity(password);
    checkPasswordValidity(confirmPassword);
    checkPasswordEquality();
    checkEmail();
    checkDateOfBirth();
    checkAgreement();
    if (document.querySelectorAll('.error-text').length > 0) {
        return;
    }
});

// Checking Methods
function isAlphaNumeric(src, input) {
    const regex = /^[a-zA-Z0-9]+$/;
    if (username.value.match(input) === null) {
        updateErrorMessage(src,  "Username can only contain letters or numbers.");
        return;
    }
}

function isNullOrWhitespace(src, input) {
    if (!input || input.replace(/\s/g, '').length < 1) {
        updateErrorMessage(src, formatFieldName(src.id) + ' cannot be blank.');
        return true;
    }
    return false;
}

function isValidLength(src, input, minLength) {
    if (input.length < minLength) {
        updateErrorMessage(src, formatFieldName(src.id) + ' length is less than ' + minLength + '.');
        return false;
    }
    return true;
}

// Utility Methods
function clearAllErrorMessage(node) {
    document.querySelectorAll('#label_'+ node.id +' > .error-text').forEach(e => e.remove());
}

function formatFieldName(fieldName) {
    return fieldName.toLowerCase().split('_').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
}

function updateErrorMessage (node, errorMessage) {
    clearAllErrorMessage(node);
    if (node === null) return;
    node.insertAdjacentHTML('beforebegin',`<div class="error-text">${errorMessage}</div>`);
}