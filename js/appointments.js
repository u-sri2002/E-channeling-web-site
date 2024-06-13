const form = document.getElementById("app-form");
const doctorName = document.getElementById("doc-name");
const date = document.getElementById("date");
const specialty = document.getElementById("specialty");
const time = document.getElementById("time");


// function for identify errors
function sendErrorFor(input, message){
    //send error message
    let smallTag = input.parentElement.querySelector("small");
    smallTag.innerHTML = message;

    //send styles to error
    input.parentElement.className = "app-form-label";

    input.parentElement.querySelector("i").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4m.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
    </svg>`;
}


//send styles to success
function sendSuccessFor(input){
    input.parentElement.className = "app-form-label hide-text"
}


//validate date input
function dateValidation(){

    const dateValue = date.value;
    let userDate = dateValue.split('-');

    let userYear = Number(userDate[0]);
    let userMonth = Number(userDate[1]);
    let userDay = Number(userDate[2]);

    let today = new Date();
    let thisYear = today.getFullYear();
    let thisMonth = today.getMonth() + 1;
    let thisDay = today.getDate();

    if(dateValue === ''){
        sendErrorFor(date, "Enter prefered date");
    }
    else if(userYear < thisYear ){
        sendErrorFor(date, "Please enter a valide date");
    }
    else if( thisYear === userYear ){
        if(thisMonth > userMonth){
            sendErrorFor(date, "Please enter a valide date");
        }
        else if(thisMonth === userMonth){
            if( thisDay > userDay){
                sendErrorFor(date, "Please enter a valide date");   
            }
            else if( thisDay === userDay){
                sendErrorFor(date, "Sorry You can't make an appointment immediately today");
            }
            else{
                sendSuccessFor(date);
            }
        }
        else{
            sendSuccessFor(date);
        }
        
    }
    else{
        sendSuccessFor(date);
    }


}

function validateFormInputs(){

    const doctorNameValue = doctorName.value;
    const specialtyValue = specialty.value;
    const timeValue = time.value;

    
    if( doctorNameValue === '-- All Doctors'){
        sendErrorFor(doctorName, "Please select a Doctor's name");
    }
    else{
        sendSuccessFor(doctorName);
    }

    // speciality
    if( specialtyValue === '-- All Specializations'){
        sendErrorFor(specialty, "Please choose a specialty");
    }
    else{
        sendSuccessFor(specialty);
    }

    dateValidation();

    //time
    if (timeValue === 'Any'){
        sendErrorFor(time, "Please choose a session time");
    }
    else{
        sendSuccessFor(time);
    }
          
}


//preventing default form submission
form.addEventListener('submit', function(submission){
    submission.preventDefault();

    validateFormInputs();

});