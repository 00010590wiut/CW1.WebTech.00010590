//..............Form validation..................
var username = document.forms['login-form']['username'];
var password = document.forms['login-form']['password'];

var username_error = document.getElementById('username-error');
var password_error = document.getElementById('password-error');

username.addEventListener('textInput', username_Verify);
password.addEventListener('textInput', password_Verify);
//.....While typing if the number of signs do not exceed it will ask to fill
function validated(){
    if (username.value.length < 8) {
        username.style.border = "3px solid red";
        username_error.style.display = "block";
        username.focus();
        return false;
    }
    if (password.value.length < 6) { 
        password.style.border = "3px solid red";
        password_error.style.display = "block";
        password.focus();
        return false;
    }
  //....When username or password do not exceed mentioned numbers the form will show error
}
function username_Verify(){
    if (username.value.length >= 7) {
        username.style.border = "3px solid white";
        username_error.style.display = "none";
        return true;
    }
}
function password_Verify(){
    if (password.value.length >= 6) {
        password.style.border = "3px solid white";
        password_error.style.display = "none";
        return true;
    }
}

