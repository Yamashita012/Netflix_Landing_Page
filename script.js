document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        // Here you can send the login data to your server for validation
        console.log('Login data:', { username, password });
    } else {
        alert('Please enter both username and password');
    }
});