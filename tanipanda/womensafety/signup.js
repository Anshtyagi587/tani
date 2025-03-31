document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById("signupForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const togglePasswords = document.querySelectorAll(".togglePassword");
    const errorMessage = document.getElementById("errorMessage");

    // Show/Hide Password Functionality
    togglePasswords.forEach(toggle => {
        toggle.addEventListener("click", (event) => {
            let input = event.target.previousElementSibling;
            if (input.type === "password") {
                input.type = "text";
                event.target.textContent = "🙈";
            } else {
                input.type = "password";
                event.target.textContent = "👁️";
            }
        });
    });

    // Signup Form Submission
    signupForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();

        // Basic Validation
        if (name === "" || email === "" || password === "" || confirmPassword === "") {
            errorMessage.textContent = "❌ All fields are required.";
            return;
        }

        if (password.length < 6) {
            errorMessage.textContent = "❌ Password must be at least 6 characters.";
            return;
        }

        if (password !== confirmPassword) {
            errorMessage.textContent = "❌ Passwords do not match.";
            return;
        }

        // Fake Signup (Store in localStorage for now)
        let user = {
            name,
            email,
            password
        };
        localStorage.setItem("user", JSON.stringify(user));

        // Redirect to Login Page
        window.location.href = "login.html";
    });
});
