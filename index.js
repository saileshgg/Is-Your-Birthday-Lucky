const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumber = document.querySelector("#check-number");

checkNumber.addEventListener("click", function() {
    console.log(dateOfBirth);
    console.log(luckyNumber.value);
    console.log("Button clicked");
})