const password = document.getElementById("password");
const pin = document.getElementById("pin");
const passwordSelec = document.querySelector("#pass-selec");
const pinSelec = document.querySelector("#pin-selec");

passwordSelec.addEventListener("click", () => {
    passwordSelec.classList.add("signin-active");
    pinSelec.classList.remove("signin-active");
    password.style.display = "flex";
    pin.style.display = "none";
    pin.children[0].value="";
    pin.children[0].classList.remove("valid");
    pin.children[0].classList.remove("invalid");
    passValid = false;
})
pinSelec.addEventListener("click", () => {
    passwordSelec.classList.remove("signin-active");
    pinSelec.classList.add("signin-active");
    pin.style.display = "flex";
    password.style.display = "none";
    password.children[0].value="";
    password.children[0].classList.remove("valid");
    password.children[0].classList.remove("invalid");
    passValid = false;
})