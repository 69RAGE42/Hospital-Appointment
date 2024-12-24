var userNames = ["Sumit Chaurasiya"];
var userIds = [45970591];
var passwords = ["airoli@367"];

// User Verification Functions

var userTextField = document.getElementById("field-1");
var passwordField = document.getElementById("field-2");
var userNameSuccess = false;
var userIndex;
var passMatched = false;

function checkForUserName() {
    var name = userTextField.value.trim();

    if (userNames.includes(name)) {
        userNameSuccess = true;
        userIndex = userNames.indexOf(name);
        clearError();
        userNameMatched();
        enableLogIn();
        disableSignUp();
    } else {
        userNameSuccess = false;
        passMatched = false;
        setError("⚠️ Username not found! Try signing up!");
        userNameUnmatched();
        passwordUnmatched();
        enableSignUp();
        disableLogIn();
    }
    if (name == "") {
        userNameSuccess = false;
        passMatched = false;
        clearError();
        userNameUnmatched();
        passwordUnmatched();
        disableLogIn();
        disableSignUp();
    }
}

function checkForMatchingPassword() {
    if (!userNameSuccess) return;
    var pass = passwordField.value;

    if (passwords[userIndex] === pass) {
        passMatched = true;
        clearError();
        passwordMatched();
    } else {
        setError("⚠️ Password is not matching!");
        passMatched = false;
        passwordUnmatched();
    }
    if (pass == "") {
        passMatched = false;
        clearError();
        passwordUnmatched();
    }
}

// Error Message Functions

function setError(msg) {
    document.getElementById("error-msg").innerHTML = msg;
}

function clearError() {
    document.getElementById("error-msg").innerHTML = "";
}

// Switching Log In & Sign Up Buttons

var login = document.getElementById("log-in");
var signup = document.getElementById("sign-up");

function enableLogIn() {
    login.disabled = "false";
    login.style.cursor = "pointer";
}

function disableLogIn() {
    login.disabled = "true";
    login.style.cursor = "not-allowed";
}

function enableSignUp() {
    signup.disabled = "false";
    signup.style.cursor = "pointer";
}

function disableSignUp() {
    signup.disabled = "true";
    signup.style.cursor = "not-allowed";
}

// Graphic Functions

function userNameMatched() {
    var a = document.getElementById("num-displayer-1");
    var b = document.getElementById("design-displayer-1");
    a.innerHTML = `<a class="fa-solid fa-check"></a>`;
    a.style.backgroundColor = "rgb(50, 220, 50)";
    b.style.backgroundColor = "rgb(50, 220, 50)";
    a.style.filter = "drop-shadow(0px 0px 4px rgb(50, 220, 50))";
    b.style.filter = "drop-shadow(0px 0px 4px rgb(50, 220, 50))";
}

function userNameUnmatched() {
    var a = document.getElementById("num-displayer-1");
    var b = document.getElementById("design-displayer-1");
    a.innerHTML = `1`;
    a.style.backgroundColor = "rgb(15, 90, 90)";
    b.style.backgroundColor = "rgb(15, 90, 90)";
    a.style.filter = "";
    b.style.filter = "";
}

function passwordMatched() {
    var a = document.getElementById("num-displayer-2");
    var b = document.getElementById("design-displayer-2");
    a.innerHTML = `<a class="fa-solid fa-check"></a>`;
    a.style.backgroundColor = "rgb(50, 220, 50)";
    b.style.backgroundColor = "rgb(50, 220, 50)";
    a.style.filter = "drop-shadow(0px 0px 4px rgb(50, 220, 50))";
    b.style.filter = "drop-shadow(0px 0px 4px rgb(50, 220, 50))";
}

function passwordUnmatched() {
    var a = document.getElementById("num-displayer-2");
    var b = document.getElementById("design-displayer-2");
    a.innerHTML = `2`;
    a.style.backgroundColor = "rgb(15, 90, 90)";
    b.style.backgroundColor = "rgb(15, 90, 90)";
    a.style.filter = "";
    b.style.filter = "";
}

// Test

setInterval(function () {
    checkForUserName();
    checkForMatchingPassword();
}, 100);

disableLogIn();
disableSignUp();

// userNameMatched();
// passwordMatched();
