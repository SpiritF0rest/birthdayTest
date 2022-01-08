let today       = new Date();
let todayDay    = today.getDate();
let todayMonth  = today.getMonth();
let todayYear   = today.getFullYear();
let people      = [];
const message   = document.querySelector("#specialMessage");


const monthsOfTheYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

class Person {
    constructor(name, dayOfBirth, monthOfBirth) {
        this.name = name;
        this.dayOfBirth = dayOfBirth;
        this.monthOfBirth = monthOfBirth;
    }
};

const brotherInLaw  = new Person("Patrick", 8, "January");
let newPeople       = people.push(brotherInLaw);

/**
 * Display today's date
 */
function date () {
    const date = document.getElementById("today");
    date.textContent = "It is " + monthsOfTheYear[todayMonth] + " " + todayDay + ", " +  todayYear;
};

function addBirthdayIcon() {
    const icon = document.createElement("i");
    icon.classList.add("fas", "fa-birthday-cake");
    let main = document.querySelector("main");
    main.appendChild(icon);
}

/**
 * Check if today is someone's birthday and "post" message on page
 */
function happyBirthday() {
    for (let person of people)
    if (person.dayOfBirth == todayDay  && person.monthOfBirth == monthsOfTheYear[todayMonth]) {
        addBirthdayIcon();
        message.textContent = "Happy Birthday " + person.name + " !";
    } else {
        message.textContent = "It's a day like any other..."
    };
};

const main = async () => {
    date();
    happyBirthday();
};

main();