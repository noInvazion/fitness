window.addEventListener("DOMContentLoaded", () => {
    var expiration = document.getElementById('expiration-date');
    expiration.oninput = function() {
        console.log(expiration.value);
    };
});

function validateForm() {
    var name = document.getElementById('name').value;
    var cardNumber = document.getElementById('card-number').value;
    var cvv = document.getElementById('cvv').value;
    var expiration = document.getElementById('expiration-date').value;
    var email = document.getElementById('email').value;
    var zipCode = document.getElementById('zip-code').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var city = document.getElementById('city').value;
    var state = document.getElementById('state').value;
    var country = document.getElementById('country').value;


    expiration.oninput = function() {
        console.log(expiration.value);
    }
    if (name.trim() === "") {
        alert("Please enter your name on the card.");
        return false;
    }

    if (name.length < 3) {
        alert('Name on card must be at least 3 characters long.');
        return false;
    }

    if (/\d/.test(name)) {
        alert("Name on the card should not contain numbers.");
        return false;
    }

    if (/\d/.test(state)) {
        alert("This field should not contain numbers.");
        return false;
    }

    if (/\d/.test(country) || country.trim() === "") {
        alert("This field should not contain numbers.");
        return false;
    }

    if (/\d/.test(city)) {
        alert("This field should not contain numbers.");
        return false;
    }

    if (cardNumber.length !== 16) {
        alert("Card number should be 16 digits long!");
        return false;
    }

    if (cvv.length != 3) {
        alert("CVV should be 3 digits! Locate at the back of your card");
        return false;
    }

    if (!validateZipCode(zipCode)) {
        alert("Please enter a valid 4-digit zip code.");
        return false;
    }

    if (!email.endsWith("@gmail.com")) {
        alert("Email address should include '@gmail.com'");
        return false;
    }


    if (!validatePhoneNumber(phone)) {
        alert("Please enter a valid phone number starting with 090, 080, 070, 081, or 091 (Should be 11 digits)");
        return false;
    }


    return true;
}

function validateZipCode(zipCode) {
    var zipRegex = /^\d{4}$/;
    return zipRegex.test(zipCode);
}

function validatePhoneNumber(phone) {
    var phoneRegex = /^(090|080|070|081|091)\d{8}$/;
    return phoneRegex.test(phone);
};

function validate() {
    console.log(expiration.value);
};

