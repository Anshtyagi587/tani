document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const togglePassword = document.querySelector(".togglePassword");
    const errorMessage = document.getElementById("errorMessage");

    // Show/Hide Password Functionality
    togglePassword.addEventListener("click", () => {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            togglePassword.textContent = "🙈";
        } else {
            passwordInput.type = "password";
            togglePassword.textContent = "👁️";
        }
    });

    // Login Form Submission
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Retrieve stored user from localStorage
        let storedUser = JSON.parse(localStorage.getItem("user"));

        if (!storedUser) {
            errorMessage.textContent = "❌ No account found. Please sign up.";
            return;
        }

        // Check if credentials match
        if (email === storedUser.email && password === storedUser.password) {
            // Redirect to Home Page
            window.location.href = "index.html";
        } else {
            errorMessage.textContent = "❌ Invalid email or password.";
        }
    });
});
