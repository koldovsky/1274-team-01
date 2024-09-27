const form = document.querySelector('.collaborate__registration');

const inputPhone = document.querySelector('input[name="phone"]');
const maxLength = 10;

const inputEmail = document.querySelector('input[name="email"]');

const buttonContactUs = document.querySelector('button[type="submit"]');


inputPhone.addEventListener('keydown', (event) => {
    const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];

    if (!allowedKeys.includes(event.key) &&
        (event.key < '0' || event.key > '9')) {
        event.preventDefault();
    }

    if (inputPhone.value.length >= maxLength &&
        !allowedKeys.includes(event.key)) {
        event.preventDefault();
    }
});

inputPhone.addEventListener('input', () => {
    if (/^\d{1,10}$/.test(inputPhone.value) && inputPhone.value.length === maxLength) {
        inputPhone.classList.add('valid');
        inputPhone.classList.remove('invalid');
    } else {
        inputPhone.classList.remove('valid');
        inputPhone.classList.add('invalid');
    }
});

form.addEventListener('submit', (event) => {
    const isValid = /^\d{1,10}$/.test(inputPhone.value);
    
    if (!isValid || inputPhone.value.length !== maxLength) {
        event.preventDefault();
    }
});