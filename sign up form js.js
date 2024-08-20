const form = document.getElementById("form");
const title = document.getElementById("title");
const firstname = document.getElementById("firstname");
const middlename = document.getElementById("Middlename");
const lastname = document.getElementById("lastName");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirm_password = document.getElementById("confirm_password");
const error_message = document.getElementById("error_message");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let errors;
    if (title) {
        errors = getsignupformerrors(title.value, firstname.value, middlename.value, lastname.value, phone.value, email.value, password.value, confirm_password.value);
    }
    
    else {
        errors = getloginformerrors(email.value, password.value);
    }
    if (errors.length > 0) {
        error_message.innerText = errors.join(". ");
        error_message.style.display = 'block';
    }
});

function getsignupformerrors(title, firstname, middlename, lastname, phone, email, password, confirm_password) {
    let errors = [];
    if (title === '' || title == null) {
        errors.push("Select a title please");
        document.getElementById("title").parentElement.classList.add('incorrect');
    }
    if (firstname === '' || firstname == null) {
        errors.push("Firstname is required");
        document.getElementById("firstname").parentElement.classList.add('incorrect');
    }
    if (phone === '' || phone == null) {
        errors.push("Phone number is required");
        document.getElementById("phone").parentElement.classList.add('incorrect');
    }
    
    if (email === '' || email == null) {
        errors.push("Valid email is required");
        document.getElementById("email").parentElement.classList.add('incorrect');
    }
    if (password === '' || password == null) { errors.push("Password is required");
        document.getElementById("password").parentElement.classList.add('incorrect');
    }   
    if (password !== confirm_password) {
        errors.push("Passwords don't match");
        document.getElementById("confirm_password").parentElement.classList.add('incorrect');
    }
    return errors;
}


function getloginformerrors (email,password){
     let errors=[]
     if (email === '' || email == null) {
        errors.push("Valid email is required");
        document.getElementById("email").parentElement.classList.add('incorrect');
    }
    if (password === '' || password == null) { errors.push("Password is required");
        document.getElementById("password").parentElement.classList.add('incorrect');
    } 
     return errors;
}

const allinputs = [title, firstname, middlename, lastname, email, phone, password, confirm_password];
allinputs.forEach(input => {
    if (input) {
        input.addEventListener('input', () => {
            if (input.parentElement.classList.contains('incorrect')) {
                input.parentElement.classList.remove('incorrect');
            }
            
        });
    }
});