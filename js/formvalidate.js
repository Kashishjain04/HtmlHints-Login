const button = document.getElementsByClassName("btn-login")[0];
var userValid = false;
var passValid = false;

// Username
const usernameValid = /^[A-Za-z0-9_-]{3,16}$/
// Password
const passwordValid = /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/
// Pin
const pinValid = /^[0-9]{4}/

function userChange(event) {
    const val = event.target.value;
    if(usernameValid.test(val.trim())){
        event.target.classList.add("valid")
        event.target.classList.remove("invalid")
        userValid = true
    } else {
        event.target.classList.add("invalid")
        event.target.classList.remove("valid")
        userValid = false
    }
    if(val===""){
        event.target.classList.remove("invalid")
        userValid = false
    }
}

function passChange(event) {
    var tester;
    switch (event.target.placeholder){        
        case "Password":
            tester = passwordValid;
            break;
        case "Pin":
            tester = pinValid;
            break;
    }
    const val = event.target.value;
    if(tester.test(val.trim())){
        event.target.classList.add("valid")
        event.target.classList.remove("invalid")
        passValid = true
    } else {
        event.target.classList.add("invalid")
        event.target.classList.remove("valid")
        passValid = false
    }
    if(val===""){
        event.target.classList.remove("invalid")
        passValid = false
    }
}

function validateForm(event) {
    event.preventDefault();
    button.classList.add("activeLoading");    
    if(userValid && passValid) {
        setTimeout(() => {
            M.toast({html: 'Submitted Successfully!', classes: "toast success-toast"})
            button.classList.remove("activeLoading");
        }, 1500)
    } else {
        setTimeout(() => {
            M.toast({html: 'One or more fields heve invalid data!', classes: "toast error-toast"})
            button.classList.remove("activeLoading");
        }, 600)        
    }    
}