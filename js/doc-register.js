const signupForm = document.getElementById("r-signup");
const userName = document.getElementById("name");
const email = document.getElementById("email");
const mobile = document.getElementById("mobile");
const experience = document.getElementById("experience");
const password = document.getElementById("password");
const residence = document.getElementById("residence");
const specials = document.getElementById("specialty")
const uploadFile = document.getElementById("uploadFile")

var isValidName = false;
var isValidEmail = false;
var isValidMobile = false;
var isValidExp = false;
var isValidPlace = false;
var isValidPassword = false;
var isValidSpecial = false;
var isFilesUploaded = false;

// function to identify the errors
function sendErrorFor(input, message){
    //send error message
    let smallTag = input.parentElement.querySelector("small");
    smallTag.innerHTML = message;

    //send styles to error
    input.parentElement.className = "form-fields error";

    input.parentElement.querySelector("i").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4m.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
    </svg>`;
}


//send styles to success
function sendSuccessFor(input){
    input.parentElement.className = "form-fields success hide-text"
}


// function to check correct email format
function isEmail(email){
    const emailRegex =  /^(([^<>()\].,;:\s@"]+(\.[()\[\\.,;:\s@"]+)*)|(".+"))@(([0−9]1,3\.[0−9]1,3\.[0−9]1,3\.[0−9]1,3)|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
}


// function for mobile validation
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
        isValidPassword = true;
    }
}


function formInputsValidation(){
    // get the values from inputs 
    let UserNameValue = userName.value.trim();
    let emailValue = email.value.trim();
    let mobileValue = mobile.value.trim();
    let experienceValue = experience.value.trim();
    let residenceValue = residence.value.trim();


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
            isValidEmail = true;
        }
    }


    // mobile validation 
    validateMobile();


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
            isValidExp = true;
        }
    }


    // residence validation 
    if ( residenceValue === ''){
        sendErrorFor(residence, "This field is required");
    }
    else{
        sendSuccessFor(residence);
        isValidPlace = true;
    }

    // call function for password validation 
    validatePassword();

    if( specials.value === 'all'){
        sendErrorFor(specials, "Please fill your specialization");
    }
    else{
        sendSuccessFor(specials);
        isValidSpecial = true;
    }

    //check liscense uploaded
    uploadFile.setAttribute('required', '');
    if( uploadFile.files.length <= 0){
        sendErrorFor(uploadFile, "Please upload your liscence");
    }
    else{
        sendSuccessFor(uploadFile);
        isFilesUploaded = true;
    }

    // send alert to formpage when submission is success
    if (isValidName && isValidEmail && isValidMobile && isValidExp && isValidPlace && isValidPassword && isFilesUploaded && isValidSpecial) {
        alert("Submission success..!");
    }
}


// preventing default submissions
signupForm.addEventListener('submit', function(submission) {

    submission.preventDefault();

    formInputsValidation();
   
});


// ---- carousel ------

document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".carousel-slide");
    let currentSlide = 0;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.style.display = "block";
        } else {
          slide.style.display = "none";
        }
      });
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
  
    // Show the first slide
    showSlide(currentSlide);
  
    // Automatically transition each 5s
    setInterval(nextSlide, 5000);
  });
  