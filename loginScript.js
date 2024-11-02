const validUsernames = ["32210126", "42310602", "32210855", "32210289"]; // Add more usernames as needed

document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get the entered username
    const enteredName = document.getElementById("username").value.trim();

    // Check if the entered name is in the list of valid usernames
    if (validUsernames.includes(enteredName)) {
        sessionStorage.setItem('loggedIn', true); // Set logged in status
        window.location.href = "main.html"; // Redirect to the main page after login
    } else {
        document.getElementById("error-message").textContent = "Invalid Student Number. Please try again.";
    }
});
