const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings")

const USER_LS = "currentUser";
const SHOWING_ON = "showing";

function saveName(text){
    localStorage.setItem(USER_LS,text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    //console.log(currentValue);
    painGreeting(currentValue);
    saveName(currentValue);
}

function askForName() {
    form.classList.add(SHOWING_ON);
    form.addEventListener("submit",handleSubmit);
}

function painGreeting(text) {
    form.classList.remove(SHOWING_ON);
    greeting.classList.add(SHOWING_ON);
    greeting.innerText = `Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        // she i not

    }else {
        // she is
        painGreeting(currentUser);
    }
}

function init() {
    askForName();
    loadName();
}

init();
