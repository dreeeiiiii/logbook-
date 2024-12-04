
document.addEventListener('DOMContentLoaded', function() {
    // Ensure the DOM is fully loaded before binding the event listener
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();  // Prevent the form from submitting

        const email = document.getElementById("email").value.toLowerCase();
        const password = document.getElementById("password").value.toLowerCase();

        validation(email, password);  // Call the validation function
    });
});

function validation(email, password) {
    const adminEmail = "drei@gmail.com";
    const adminPassword = "andrei123";

    // Check if both email and password are correct
    if (email === adminEmail && password === adminPassword) {
        window.open("../Home/home.html", "_blank");
    } else if (email !== adminEmail && password === adminPassword) {
        alert("Invalid email!");  // Show error message for invalid email
    } else if (email === adminEmail && password !== adminPassword) {
        alert("Invalid password!");  // Show error message for invalid password
    } else {
        alert("Invalid email and password!");  // Both are incorrect
    }
}