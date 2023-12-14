document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Send a POST request to the server to handle the login
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => response.text())
    .then(data => {
        if (data === 'Login successful') {
            alert('Login successful!');
            window.location.href = "index.html";
            // Redirect to the user's profile page or update the UI as needed.
        } else {
            const errorMessage = document.getElementById("error-message");
            alert('account does not exist');
            errorMessage.textContent = data;
        }
    });
});