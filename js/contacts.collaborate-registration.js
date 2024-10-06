const form = document.querySelector('.collaborate__registration');

const inputFullName = document.querySelector('input[name="full-name"]');
const fullNameError = document.querySelector('.full-name-error');

const inputPhone = document.querySelector('input[name="phone"]');
const selectIndex = document.querySelector('select[name="prefix"]');
const phoneError = document.querySelector('.phone-error');
const maxLength = 9;

const inputEmail = document.querySelector('input[name="email"]');
const emailErrorEmpty = document.querySelector('.email-error-empty');
const emailErrorFormat = document.querySelector('.email-error-format');
const emailFormatRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const textarea = document.querySelector('textarea');

const buttonContactUs = document.querySelector('button[type="submit"]');


inputFullName.addEventListener('keydown', (event) => {
    const allowedChars = /^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ'-\s]$/;
    const allowedKeys = ['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'Delete'];

    const lastChar = inputFullName.value.slice(-1);

    if (event.key === ' ' && lastChar === ' ') {
        event.preventDefault();
    }

    if (!allowedChars.test(event.key) && !allowedKeys.includes(event.key)) {
        event.preventDefault();
    }
});

inputFullName.addEventListener('input', () => {
    if (inputFullName.value !== '') {
        inputFullName.classList.add('valid');
    } else {
        inputFullName.classList.remove('valid');
    }
});

inputFullName.addEventListener('blur', () => {
    if (inputFullName.value !== '') {
        inputFullName.classList.remove('invalid');
        inputFullName.classList.add('valid');
        fullNameError.style.display = 'none';
    } else {
        inputFullName.classList.remove('valid');
    }
});

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

inputEmail.addEventListener('keydown', (event) => {
    const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Tab'];

    if (!allowedKeys.includes(event.key) && !/^[\w@.-]+$/.test(event.key)) {
        event.preventDefault();
    }
});

inputEmail.addEventListener('blur', () => {
    const isEmpty = inputEmail.value.length === 0;

    if (emailFormatRegex.test(inputEmail.value)) {
        inputEmail.classList.add('valid');
        inputEmail.classList.remove('invalid');
        emailErrorEmpty.style.display = 'none';
        emailErrorFormat.style.display = 'none';
    } else if (isEmpty) {
        inputEmail.classList.remove('valid');
        inputEmail.classList.remove('invalid');
        emailErrorFormat.style.display = 'none';
    } else {
        inputEmail.classList.remove('valid');
        inputEmail.classList.add('invalid');
        emailErrorFormat.style.display = 'block';
    }
});

form.addEventListener('submit', (event) => {
    const isValidPhone = /^\d{1,9}$/.test(inputPhone.value);
    const fullNameValue = inputFullName.value.trim();
    const isEmptyEmail = inputEmail.value.trim() === '';
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputEmail.value);

    if (fullNameValue === '') {
        fullNameError.style.display = 'block';
        inputFullName.classList.add('invalid');
        event.preventDefault();
    } else {
        fullNameError.style.display = 'none';
        inputFullName.classList.remove('invalid');
    }

    if (!isValidPhone || inputPhone.value.length !== maxLength) {
        phoneError.style.display = 'block';
        inputPhone.classList.add('invalid');
        event.preventDefault();
    } else {
        phoneError.style.display = 'none';
    }

    if (isEmptyEmail) {
        emailErrorEmpty.style.display = 'block';
        inputEmail.classList.add('invalid');
        event.preventDefault();
    } else if (!isValidEmail) {
        emailErrorFormat.style.display = 'block';
        inputEmail.classList.add('invalid');
        event.preventDefault();
    } else {
        emailErrorEmpty.style.display = 'none';
        emailErrorFormat.style.display = 'none';
        inputEmail.classList.remove('invalid');
    }

    if (fullNameValue !== '' && isValidPhone && inputPhone.value.length === maxLength && !isEmptyEmail && isValidEmail) {
        const data = {
            fullName: inputFullName.value,
            email: inputEmail.value,
            phone: selectIndex.value + inputPhone.value,
            text: textarea.value
        };

        console.log(data);
    }

    event.preventDefault();
});
