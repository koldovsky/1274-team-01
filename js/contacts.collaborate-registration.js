const phoneInput = document.querySelector('input[type="tel"]');
const form = document.querySelector('.collaborate__registration');

const iti = window.intlTelInput(
    phoneInput, {
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js",
    initialCountry: "ua",
    onlyCountries: ['us', 'gb', 'ua'],
    separateDialCode: true
});

form.addEventListener('submit', function(event) {

    const phoneValue = phoneInput.value.trim();

    if (!/^\+?[0-9]*$/.test(phoneValue)) {
        event.preventDefault();
        alert(`заборонені символи в номері, ${phoneInput.value}!`);
        return;
    }

    const isValidNumber = iti.isValidNumber(); // не перевіряє на зайві символи

    if (!isValidNumber) {
        event.preventDefault();
        alert(`не валідний номер, ${phoneInput.value}!`);
    }
    alert(phoneInput.value);
});

