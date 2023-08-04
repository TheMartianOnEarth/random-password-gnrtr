const chars = "!@#$%^&*()0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";

let passwordLength = 12;

const slider = document.getElementById("slider");
let slideNumber = document.getElementById("sliderNumber");

slider.addEventListener("input", () => {
    slideNumber.textContent = `${slider.value}`;
    passwordLength = slider.value;
});

const password1 = document.getElementById("pw-1-el");
const password2 = document.getElementById("pw-2-el");
const password3 = document.getElementById("pw-3-el");
const password4 = document.getElementById("pw-4-el");

function generatePassword () {
    let password = "";

    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    return password;
}

const btnEl = document.getElementById("btn-el");
btnEl.addEventListener('click', () => {
    password1.innerHTML = `<input type="text" id="1" value="${generatePassword()}" onclick="copyToClipboard(1)" readonly>`;
    password2.innerHTML = `<input type="text" id="2" value="${generatePassword()}" onclick="copyToClipboard(2)" readonly>`;
    password3.innerHTML = `<input type="text" id="3" value="${generatePassword()}" onclick="copyToClipboard(3)" readonly>`;
    password4.innerHTML = `<input type="text" id="4" value="${generatePassword()}" onclick="copyToClipboard(4)" readonly>`;

    changeColor();
});

function changeColor() {
    let allPW = document.getElementsByClassName("generatedPassword");
    console.log(allPW[1].textContent);
    for (let j=0; j < allPW.length; j++){
        allPW[j].style.color = "var(--clr-bright-green)";
    }
}

function copyToClipboard(index) {
    const copyText = document.getElementById(index).value;
    navigator.clipboard.writeText(copyText).then( () => {
        alert(`${copyText} is copied to the clipboard.`);
    });
}