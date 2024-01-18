let doxie = prompt("Do you want to learn more about dachshunds or do you love dachsunds?");
doxie = doxie.toLowerCase();
if (doxie==="yes" || doxie==="absolutely" || doxie==="yeah") {
alert("You are at the right place!");
} else {
alert ("You are not at the right place!");
} 
function askTips() {
    let name = prompt("What is your name?")
    let email = prompt ("What is your email address?")

    let response = document.querySelector("h1")

    if (email.length>0) {
    response.innerHTML = ("Thank you " + name + ", we will reach out to you shortly for training tips" + " 😎");
} 
}
    let cityQuestion = document.querySelector("button");
    cityQuestion.addEventListener("click", askTips);