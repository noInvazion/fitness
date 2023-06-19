window.addEventListener("DOMContentLoaded", () => {
const form = document.getElementById('login-form');


var password = document.getElementById("password").value;
var username = document.getElementById("username").value;

    function validateForm(username, password) {
        if (username.length === 0) {
            alert('Please enter a username.');
            return false;
            
        }
  
        if (password.value.trim() === '') {
            alert('Please enter a password.');
            return false;
        }

        if (username.value.length < 3) {
            alert('Username must be at least 3 characters long.');
            return false;
        }

        if (!validatePassword(password)) {
          alert("Please enter a password with at least 8 characters, including at least one uppercase letter, one lowercase letter, and one digit.");
          validationPassed = false;
      }

    };

    function togglePasswordVisibility() {
        var passwordInput = document.getElementById("password");
        
        if (passwordInput.type === "password") {
          passwordInput.type = "text";
        } else {
          passwordInput.type = "password";
        }
      };

      function validatePassword(password) {
        var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).+$/;
        return passwordRegex.test(password);
    };

});
