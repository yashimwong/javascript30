const firstName = document.getElementById('first_name');
const lastName = document.getElementById('last_name');
const firstNameEvent = firstName.addEventListener('keyup', () => { validateName(firstName); });
const lastNameEvent = lastName.addEventListener('keyup', () => { validateName(lastName); });
function validateName(e) {
    if (isNullOrWhitespace(e.id, e.value)) {
        return;
    }
    clearAllErrorMessage(e.id);
}

const username = document.getElementById('username');
const usernameEvent = username.addEventListener('keyup', () => {
    if (isNullOrWhitespace(username.id, username.value)) {
        return;
    }

    const regex = /^[a-zA-Z0-9]+$/;
    if (username.value.match(regex) === null) {
        updateErrorMessage(username.id,  "Username can only contain letters or numbers.");
        return;
    }
    clearAllErrorMessage(username.id);
});

const password = document.getElementById('password');
const passwordEvent = password.addEventListener('keyup', () => );

const confirmPasswordInput = document.getElementById('current_password');
const emailInput = document.getElementById('email');
const dateOfBirthInput = document.getElementById('date_of_birth');
const agreementCheckBox = document.getElementById('agreement');

function clearAllErrorMessage(node) {
    let targetNode = 'label_' + node;
    document.querySelectorAll('#'+ targetNode +' > .error-text').forEach(e => e.remove());
}

function formatFieldName(fieldName) {
    
}

function isNullOrWhitespace(src, input) {
    if (!input || input.replace(/\s/g, '').length < 1) {
        updateErrorMessage(src, src + ' cannot be blank.');
        return true;
    }
    return false;
}

function updateErrorMessage (node, errorMessage) {
    clearAllErrorMessage(node);
    let targetNode = document.getElementById(node);
    if (targetNode === null) return;
    targetNode.insertAdjacentHTML('beforebegin',`<div class="error-text">${errorMessage}</div>`);
}