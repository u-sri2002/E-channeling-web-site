const signupForm = document.getElementById("r-signup");

const userName = document.getElementById("name");
const email = document.getElementById("email");
const mobile = document.getElementById("mobile");
const experience = document.getElementById("experience");
const password = document.getElementById("password");

signupForm.addEventListener('submit', function(submission) {

    submission.preventDefault();

    formInputsValidation();
});


function formInputsValidation(){
    // get the values from inputs 
    let UserNameValue = userName.value.trim();
    // let emailValue = email.value.trim();
    // let mobileValue = mobile.value.trim();
    // let experienceValue = experience.value.trim();
    // let passwordValue = password.value.trim();

    if(UserNameValue === ''){
        //send error
        sendErrorFor(userName, "User name can't be Null");      
    }
    else{
        //send success
        sendSuccessFor(userName);
    }
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