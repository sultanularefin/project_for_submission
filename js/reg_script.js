const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Check email is valid
function checkEmail(input) {

    const email_Formatter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email_Formatter.test(input.value.trim())) {
        showSuccess(input);
        return 1;
    } else {
        showError(input, 'Email is not valid');
        return 0;
    }
}


// Check required fields
function checkRequired_false(inputArr) {
    let isRequired = false;
    inputArr.forEach(function(input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
            isRequired = true;
            // return 0;
        } else {
            showSuccess(input);
            // return 1;
        }
    });

    return isRequired;
}

// Check input length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(
            input,
            `${getFieldName(input)} must be at least ${min} characters`
        );
        return 0;
    } else if (input.value.length > max) {
        showError(
            input,
            `${getFieldName(input)} must be less than ${max} characters`
        );
        return 0;
    } else {
        showSuccess(input);
        return 1;
    }
}

// Check passwords match
function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Passwords do not match');
        return 0;
    }else{
        return 1;
    }
}

// Get fieldname
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();

    let name_check=0;
    let length_check=0;
    let email_check=0;
    let pw_check=0;

    // console.log("e: ",e);



    if(!(checkRequired_false([username, email, password, password2]))){



        console.log("good! input not empty array");


        name_check= checkLength(username, 3, 15);
        length_check= checkLength(password, 6, 25);
        email_check = checkEmail(email);
        pw_check= checkPasswordsMatch(password, password2);
    }



    const gender= genderSelect.value;
    console.log("username",username.value);
    console.log("email",email.value);
    console.log("password",password.value);
    console.log("password2",password2.value);
    console.log("gender",gender);



    console.log("name_check",name_check);
    console.log("length_check",length_check);
    console.log("email_check",email_check);
    console.log("pw_check",pw_check);


    console.log("populating history data");
   /* const message2 = "test";
    history.pushState({key: 'logout', message: message2}, "");*/


    const driver_vault = {
        password: password.value,
        email: email.value,
        name: username.value,
        gender: gender,
    };


    if ((typeof window !== "undefined") && window.localStorage) {
        localStorage.setItem('user', JSON.stringify(driver_vault));

    }
});
