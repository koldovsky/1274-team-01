const form = document.querySelector('.collaborate__registration');

const inputPhone = document.querySelector('input[name="phone"]');
const selectIndex = document.querySelector('select[name="prefix"]');
const phoneError = document.querySelector('.phone-error');
const maxLength = 9;

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
    const isEmpty = inputPhone.value.length === 0;
    
    if (/^\d{1,9}$/.test(inputPhone.value) && inputPhone.value.length === maxLength) {
        inputPhone.classList.add('valid');
        inputPhone.classList.remove('invalid');
    } else {
        inputPhone.classList.remove('valid');
        inputPhone.classList.add('invalid');
    }
});

inputPhone.addEventListener('blur', () => {
    const isEmpty = inputPhone.value.length === 0;
    const isValidLength = inputPhone.value.length === maxLength;
    const isNumeric = /^\d+$/.test(inputPhone.value);

    if (isEmpty) {
        phoneError.style.display = 'none';
        inputPhone.classList.remove('valid');
        inputPhone.classList.remove('invalid');
    } else if (!isValidLength || !isNumeric) {
        phoneError.style.display = 'block';
    } else {
        phoneError.style.display = 'none';
    }
});

form.addEventListener('submit', (event) => {
    const isValid = /^\d{1,9}$/.test(inputPhone.value);
    
    if (!isValid || inputPhone.value.length !== maxLength) {
        phoneError.style.display = 'block';
        inputPhone.classList.add('invalid');
        event.preventDefault();
    } else {
        phoneError.style.display = 'none';
    }

    const data = {
        phone: selectIndex.value + inputPhone.value,
    };
});
