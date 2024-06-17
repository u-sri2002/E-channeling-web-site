const signupForm = document.getElementById("acc-form");
const userName = document.getElementById("name");
const mobile = document.getElementById("mobile");
const password = document.getElementById("password");

var isValidName = false;
var isValidMobile = false;
var isValidPassword = false;

// function for identify the errors
function sendErrorFor(input, message){
    //send error message
    let smallTag = input.parentElement.querySelector("small");
    smallTag.innerHTML = message;

    //send styles to error
    input.parentElement.className = "acc-form-label form-fields error";

    input.parentElement.querySelector("i").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4m.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
    </svg>`;
}


//send styles to success
function sendSuccessFor(input){
    input.parentElement.className = "acc-form-label form-fields success hide-text"
}


// function for mobile number validation
function validateMobile(){
    let mobileValue = mobile.value.trim();
    const mobileRegex = /^[0-9]{10}$/; // For a 10-digit mobile number

    if (mobileValue === ''){
        sendErrorFor(mobile, "Mobile number is required ");
    }
    else if (! mobileRegex.test(mobileValue)){
        sendErrorFor(mobile, "Please enter a valid number");
    }
    else{
        sendSuccessFor(mobile);
        isValidMobile = true;
    }
}


//A function for passwords validation 
function validatePassword() {
    const passwordValue = password.value.trim();
    
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(passwordValue);
    const hasLowerCase = /[a-z]/.test(passwordValue);
    const hasNumber = /[0-9]/.test(passwordValue);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(passwordValue);

    if (passwordValue === '') {
        sendErrorFor(password, "Password is required");
    } else if (passwordValue.length < minLength) {
        sendErrorFor(password, `Password must be at least ${minLength} characters long`);
    } else if (!hasUpperCase) {
        sendErrorFor(password, "Password must contain at least one uppercase letter");
    } else if (!hasLowerCase) {
        sendErrorFor(password, "Password must contain at least one lowercase letter");
    } else if (!hasNumber) {
        sendErrorFor(password, "Password must contain at least one number");
    } else if (!hasSpecialChar) {
        sendErrorFor(password, "Password must contain at least one special character");
    } else {
        sendSuccessFor(password);
        isValidPassword = true;
    }
}


function formInputsValidation(){
    // get the values from inputs 
    let UserNameValue = userName.value.trim();

    // userName validation 
    if(UserNameValue === ''){
        //send error
        sendErrorFor(userName, "Username is required");      
    }
    else{
        //send success
        sendSuccessFor(userName);
        isValidName = true;
    }


    // mobile validation 
    validateMobile();

       
    // call function for password validation 
    validatePassword(); 

    if (isValidName && isValidMobile && isValidPassword) {
        alert("Submission success..!");
    }

}


// preventing default submissions
signupForm.addEventListener('submit', function(submission) {

    submission.preventDefault();

    formInputsValidation();
   
});