function toggleForms() {
    const loginForm = document.getElementById('login-form');
    const registrationForm = document.getElementById('registration-form');
    
    if (loginForm.style.display === "none") {
        loginForm.style.display = "block";
        registrationForm.style.display = "none";
    } else {
        loginForm.style.display = "none";
        registrationForm.style.display = "block";
    }
}

function login(event) {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    
    // Simulate login action
    alert(`Logged in as ${username}`);
}

function register(event) {
    event.preventDefault();
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    
    // Simulate registration action
    alert(`Registered as ${username}`);
}

