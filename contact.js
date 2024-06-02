document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const emailInput = document.getElementById("work-email");
    const firstNameInput = document.getElementById("first-name");
    const lastNameInput = document.getElementById("last-name");
    const checkboxInput = document.querySelector(".custom-checkbox input");
    const emailError = emailInput.nextElementSibling;
    const firstNameError = firstNameInput.nextElementSibling;
    const lastNameError = lastNameInput.nextElementSibling;
    const checkboxError = checkboxInput.nextElementSibling.nextElementSibling;
    const successMessage = document.getElementById("success");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let isValid = true;

        // Email validation
        const email = emailInput.value;
        if (!email.includes("@")) {
            emailError.textContent = "Email must contain '@'.";
            emailInput.classList.add("error-border");
            isValid = false;
        } else {
            emailError.textContent = "";
            emailInput.classList.remove("error-border");
        }

        // First name validation
        const firstName = firstNameInput.value;
        if (/\d/.test(firstName)) {
            firstNameError.textContent = "First name cannot contain numbers.";
            firstNameInput.classList.add("error-border");
            isValid = false;
        } else if (firstName.split(' ').length > 20) {
            firstNameError.textContent = "First name cannot exceed 20 words.";
            firstNameInput.classList.add("error-border");
            isValid = false;
        } else {
            firstNameError.textContent = "";
            firstNameInput.classList.remove("error-border");
        }

        // Last name validation
        const lastName = lastNameInput.value;
        if (/\d/.test(lastName)) {
            lastNameError.textContent = "Last name cannot contain numbers.";
            lastNameInput.classList.add("error-border");
            isValid = false;
        } else if (lastName.split(' ').length > 20) {
            lastNameError.textContent = "Last name cannot exceed 20 words.";
            lastNameInput.classList.add("error-border");
            isValid = false;
        } else {
            lastNameError.textContent = "";
            lastNameInput.classList.remove("error-border");
        }

        // Checkbox validation
        if (!checkboxInput.checked) {
            checkboxError.textContent = "You must agree to the terms and conditions.";
            isValid = false;
        } else {
            checkboxError.textContent = "";
        }

        // Show success message if form is valid and send data to API
        if (isValid) {
            // Collect form data
            const formData = {
                email: email,
                firstName: firstName,
                lastName: lastName,
                agreedToTerms: checkboxInput.checked
            };

            // Send the data to the endpoint
            fetch("https://getform.io/f/ebpdkkpb", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            // Show success message
            successMessage.textContent = "Form submitted successfully!";
            successMessage.style.color = "#28a745";
            form.reset();
        }
    });
});
