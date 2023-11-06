/* Add your JavaScript to this file */

window.addEventListener("load", (event) => {
    const Form= document.querySelector("form");
    const msg= document.querySelector(".message");

    Form.addEventListener("submit", function(e){
        e.preventDefault();

        const emailadd= document.getElementById("email").value; 
        
        if (emailadd !== "") {
            msg.textContent = "Thank you! Your email address" + emailadd + "has been added to our mailing list!";

            emailInput.value = "";
        }
        else {
            msg.textContent = "Please enter a valid email address.";
        }
    });
});