const nameInput = document.querySelector("First name");
const email = document.querySelector("workemail");

function validateform(){
    if (nameInput.value.length<1){
        errorNodes[0].innerText = "cannopt be blank";
        nameInput.classList.add("error-border");
    }
}