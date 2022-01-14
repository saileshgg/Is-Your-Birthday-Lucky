const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumber = document.querySelector("#check-number");
const output = document.querySelector("#output");


function calculateSum(num) {
    var sum = 0;

    for(var i=0;i<num.length;i++) {
        var ch = parseInt(num.charAt(i));

        sum += ch;

    }

    return sum;
}

function isBirthdatLucky(sum) {
    if(sum % luckyNumber.value === 0) {
        output.innerText = "Your birthday is lucky";
    } else {
        output.innerText = "Not lucky";
    }
}

checkNumber.addEventListener("click", function() {


    const modifiedDate = dateOfBirth.value.replaceAll("-","");
    //console.log(modifiedDate);
    
    let sum = calculateSum(modifiedDate);
    //console.log(sum);
    if(modifiedDate && sum) {
        isBirthdatLucky(sum);
    } else {
        output.innerText = "Enter both the values";
    }

    
    

    //console.log("Button clicked");
})

