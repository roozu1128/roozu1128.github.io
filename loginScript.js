// script.js

// Array of valid usernames
const validUsernames = ["32210126", "42310602", "32210855", "32210289"];

document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get the entered username
    const enteredName = document.getElementById("username").value.trim();

    // Check if the entered name is in the list of valid usernames
    if (validUsernames.includes(enteredName)) {
        alert("login succesful!");
        // Here you can redirect to another page if needed
        window.location.href = "main.html"; // Redirect to a welcome page
    } else {
        document.getElementById("error-message").textContent = "Invalid Student Number. Please try again.";
    }
});
