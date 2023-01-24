var loginDiv = document.getElementById('loginDiv');
var signUpDiv = document.getElementById('signUpDiv');
var welcomDiv = document.getElementById('welcomDiv');
var signUpLink = document.getElementById('signUpLink');
var loginLink = document.getElementById('loginLink');
var userName = document.getElementById('userName');
var email = document.getElementById('email');
var password = document.getElementById('password');
var sinUpBtn = document.getElementById('sinUpBtn');
var logOutBtn = document.getElementById('logOutBtn');
var loginBtn = document.getElementById('loginBtn');
var loginEmail = document.getElementById("loginEmail");
var loginPassword = document.getElementById("loginPassword");

////////////////// Links ///////////////////

signUpLink.addEventListener('click' , function () {
    loginDiv.classList.replace('d-block' , 'd-none')
    signUpDiv.classList.replace('d-none' , 'd-block')
});
loginLink.addEventListener('click' , function () {
    signUpDiv.classList.replace('d-block' , 'd-none')
    loginDiv.classList.replace('d-none' , 'd-block')
});

///////////////////// Creat User ////////////////////
//////////////////// Local Storage ////////////////////
var users;
if (localStorage.getItem("data")){
    users = JSON.parse(localStorage.getItem("data"))
}
else{
    users = [];
};

///////////////////// Sign Up ////////////////////////

sinUpBtn.addEventListener('click', register);

function register() {
    if (required() == true && checkEmail() != false && nameRegex() == true && emailRegex() == true) {
        var newUser = {
            name: userName.value,
            email: email.value,
            password: password.value
        }

        users.push(newUser);
        localStorage.setItem("data", JSON.stringify(users))
        console.log(users)
        welcomNewUser()
    }
    clearSignupForm()
};

function required() {
    if (userName.value == "" || password.value == "" || email.value == "") {
        alert("Pleas Fill All Fields")
        return false
    }
    if ((userName.value != "" && password.value != "" && email.value != "")) {
        return true;
    }
};

function checkEmail() {
    if (users.length > 0) {
        for (var i = 0; i < users.length; i++) {
            if (users[i].email == email.value) {
                alert("This Email is alredy exists Pleas try another one")
                return false
            }
        }
    }
};

function nameRegex() {
    if (userName.value != "") {
        var regex = /^[a-z]{3,9}$/;
        if (regex.test(userName.value) == true) {
            return true;
        }
        else {
            alert("Your Name must consists of at least 3 leters and max 9 leters")
            return false
        }
    }
};
function emailRegex() {
    if (email.value != "") {
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (regex.test(email.value) == true) {
            return true;
        }
        else {
            alert("Uncorrect email Pleas Try again")
            return false
        }
    }
};

function welcomNewUser() {
    signUpDiv.classList.replace('d-block' , 'd-none');
    loginDiv.classList.replace('d-block' , 'd-none');
    welcomDiv.classList.replace('d-none' , 'd-block');
    for (var i = 0; i < users.length; i++){
    document.getElementById('welcome-caption').innerHTML = `<h2 class="text-info"> welcome${users[i].name}  </h2>`
}
clearSignupForm();
 };

/////////////////// Clear signup Form ////////////////////

function clearSignupForm() {
    userName.value = '';
    email.value = '';
    password.value = ''
};

//////////////////// Log in ////////////////////////

function login() {
    if (checklogin() == true){
        welcomUser()
    }
    else{
        alert("Pleas Chick Email and Password")
    }
}

function checklogin() {
    for (var i = 0; i < users.length; i++) {
        if (users[i].email == loginEmail.value && users[i].password == loginPassword.value) {
            return true
        }
    }
    clearLoginForm();
};

loginBtn.addEventListener("click", login);

function welcomUser() {
    signUpDiv.classList.replace('d-block' , 'd-none');
    loginDiv.classList.replace('d-block' , 'd-none');
    welcomDiv.classList.replace('d-none' , 'd-block');
    clearLoginForm();
 };

 /////////////////// Clear login Form ////////////////////

function clearLoginForm() {
    loginEmail.value = '';
    loginPassword.value = '';
};

/////////////// Log Out //////////////////////

logOutBtn.addEventListener('click' , function () {
    signUpDiv.classList.replace('d-block' , 'd-none')
    welcomDiv.classList.replace('d-block' , 'd-none')
    loginDiv.classList.replace('d-none' , 'd-block')
})