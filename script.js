var regForm = document.querySelector("#reg-form");
regForm.addEventListener("submit", function (e) {

    //this function help to stop submit data of form
    e.preventDefault();
    // console.log(e);

    //target all inputs 
    var nameInp = e.target.name;
    var emailInp = e.target.email;
    var passwordInp = e.target.password;
    var confirm_passwordInp = e.target.confirm_password;

    // next element siblings of all inputs
    var nameMessage = nameInp.nextElementSibling;
        var emailMessage = emailInp.nextElementSibling;
        var passwordMessage = passwordInp.nextElementSibling;
        var confirmPasswordMessage = confirm_passwordInp.nextElementSibling;

        if(nameInp.value.trim() == ""){
            nameMessage.innerHTML = "Please Enter your name";
            nameMessage.classList.add("invalid");
            e.preventDefault();

        }else{
            nameMessage.innerHTML = "Looks Good";
            nameMessage.classList.remove("invalid");
        }
       
        //email validation
        if(emailInp.value.trim() == ""){
            emailMessage.innerHTML ="Please Enter your email";
            emailMessage.classList.add("invalid");
            e.preventDefault();
        }else{
            var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if(emailRegex.test(emailInp.value)){
                emailMessage.innerText = "Email looks good!";
                emailMessage.classList.remove("invalid");
            }else {
                emailMessage.innerText = "Please enter a valid email.";
                emailMessage.classList.add("invalid");
                e.preventDefault();
            }
        }

        //password validation 
        if(passwordInp.value.trim() == ""){
            passwordMessage.innerHTML = "Please Enter your Password";
            passwordMessage.classList.add("invalid");
            e.preventDefault();
        }else{
            var passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]{8,}$/;
            if(passRegex.test(passwordInp.value)){
                passwordMessage.innerHTML = "Password Looks Good";
                passwordMessage.classList.remove("invalid");
                // console.log(passwordInp.value);
            }else{
                passwordMessage.innerHTML = "Password must be at least 8 characters, with one uppercase letter, one lowercase letter, and one number, one Special Character.";
                
                
                passwordMessage.classList.add("invalid");
                e.preventDefault();
            }
        }

        // confirm password validation 
        if(confirm_passwordInp.value.trim() == ""){
            confirmPasswordMessage.innerHTML = "Please Enter your Password";
            confirmPasswordMessage.classList.add("invalid");
            e.preventDefault();
        }else{
            if(confirm_passwordInp.value == passwordInp.value){
                confirmPasswordMessage.innerHTML = "Password Match";
                confirmPasswordMessage.classList.remove("invalid");
            }else{
                confirmPasswordMessage.innerHTML = "Password did not Match";
                confirmPasswordMessage.classList.add("invalid");
                e.preventDefault();
            }
        }

        //match password validation

    var passBox = document.querySelector("input#password");
    var confPassBox = document.querySelector("input#confirm_password");

    passBox.addEventListener("keyup", matchPassword);
    confPassBox.addEventListener("keyup", matchPassword);

    function matchPassword() {
        if (passBox.value === confPassBox.value) {
            confPassBox.nextElementSibling.innerText = "Passwords match!";
            confPassBox.nextElementSibling.classList.remove("invalid");
        } else {
            confPassBox.nextElementSibling.innerText = "Passwords do not match.";
            confPassBox.nextElementSibling.classList.add("invalid");
        }
    }


})