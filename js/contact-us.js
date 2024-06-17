const name = document.getElementById('name');
const email = document.getElementById('email');
const form = document.getElementById('form');
const name_error = document.getElementById('name_error');
const email_error = document.getElementById('email_error');


form.addEventListener('submit',(e)=>
{ 
   //email regx
   var email_check = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

   if(name.value === '' || name.value == null)

   {// prevent default submission
      e.preventDefault();
      name_error.innerHTML = "Name is required"; // send error for name
   }
   else
   {
      name_error.innerHTML = "";
   }

   if(!email.value.match(email_check))
   {
      e.preventDefault();
      email_error.innerHTML = "Valid Email is required"; // send error for email

   }
   else
   {
      email_error.innerHTML = ""; 
   }
   // when submission is a success
   alert("Submission is Success");

});
		