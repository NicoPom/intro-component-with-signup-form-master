// ACTIVE STATES //
const claimButton = document.getElementById("claim");

claimButton.addEventListener("mousedown", Highlight);
claimButton.addEventListener('mouseup', Normal);

function Highlight(){
    claimButton.style.backgroundColor = "hsl(154, 54%, 74%)" ;
}
function Normal(){
    claimButton.style.backgroundColor = "var(--green)" ;
}

// ERROR MESSAGES //

const form = document.querySelector("form");
const inputs = Array.from(document.querySelectorAll("input")); // transform html collection into array

const email = document.getElementById("email");
const errEmail = email.nextElementSibling;
const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


form.addEventListener("submit", check);
form.addEventListener("input", check);

function check(e){
   
    inputs.forEach(input => {
        if (input.value === "" ) { // empty input

            input.style.border = "solid 2px var(--red)";
            input.style.background = "url('images/icon-error.svg') no-repeat 97%";

            const errMess = input.nextElementSibling;
            errMess.style = "display:inline";
            
            e.preventDefault();
        }
        else{

            input.style.border = "solid 0.5px var(--green)";
            input.style.background = 'none';

            const errMess = input.nextElementSibling;
            errMess.style = "display:none";
        };
    });

    if (!email.value.match(mailFormat) && email.value !== ""){// wrong email pattern and not empty input 
        email.style.border = "solid 2px var(--red)";
        email.style.background = "url('images/icon-error.svg') no-repeat 97%";

        errEmail.textContent = 'Looks like this is not an email';
        errEmail.style = "display:inline";

        e.preventDefault();
    }else if (email.value === ""){ 
        errEmail.textContent = 'Email cannot be empty';
    }

}

