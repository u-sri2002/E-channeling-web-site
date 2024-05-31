const signupForm = document.getElementById("r-signup");

const userName = document.getElementById("name");
const email = document.getElementById("email");
const mobile = document.getElementById("mobile");
const experience = document.getElementById("experience");
const password = document.getElementById("password");
const residence = document.getElementById("residence");

signupForm.addEventListener('submit', function(submission) {

    submission.preventDefault();

    formInputsValidation();
});


function formInputsValidation(){
    // get the values from inputs 
    let UserNameValue = userName.value.trim();
    let emailValue = email.value.trim();
    let mobileValue = mobile.value.trim();
    let experienceValue = experience.value.trim();
    let residenceValue = residence.value.trim();
    let passwordValue = password.value.trim();

    // userName validation 
    if(UserNameValue === ''){
        //send error
        sendErrorFor(userName, "User name can't be Null");      
    }
    else{
        //send success
        sendSuccessFor(userName);
    }

    // email validation 
    if( emailValue === ''){
        sendErrorFor(email, "Email is required");
    }
    else {
        if(!isEmail(emailValue)) {
        sendErrorFor(email, "Email is not in valid format ");
      }
        else{
            sendSuccessFor(email);
        }
    }

    // mobile validation 
    if (mobileValue === ''){
        sendErrorFor(mobile, "Mobile number is required ");
    }
    else if ( mobileValue.length != 10){
        sendErrorFor(mobile, "Mobile number should have 10 numbers ");
    }
    else{
        sendSuccessFor(mobile);
    }

    // year validation 
    if (experienceValue === ''){
        sendErrorFor(experience, "Experience duration is required");
    }
    else{
        if( Number(experienceValue) < 0 ){
            sendErrorFor(experience, "Please enter valid duration");
        }
        else if( Number(experienceValue) > 60 ){
            sendErrorFor(experience, "Your are not eligible, We are very sorry..");
        }
        else{
            sendSuccessFor(experience);
        }
    }

    // residence validation 
    if ( residenceValue === ''){
        sendErrorFor(residence, "This field is required");
    }
    else{
        sendSuccessFor(residence);
    }

    // password validation 
    validatePassword()

}
function sendErrorFor(input, message){
    //send error message
    let smallTag = input.parentElement.querySelector("small");
    smallTag.innerHTML = message;

    //send styles to error
    input.parentElement.className = "form-fields error"
}

function sendSuccessFor(input){

    //send styles to error
    input.parentElement.className = "form-fields success"
}

function isEmail(email){
    const emailRegex =  /^(([^<>()\].,;:\s@"]+(\.[()\[\\.,;:\s@"]+)*)|(".+"))@(([0−9]1,3\.[0−9]1,3\.[0−9]1,3\.[0−9]1,3)|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
}

//passwords validation 

function validatePassword() {
    const password = document.getElementById('password');
    const passwordValue = password.value;
    
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
    }
}
