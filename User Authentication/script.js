document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulated authentication (replace with actual authentication logic)
    if (username === 'admin' && password === 'admin') {
        // Redirect based on user role
        window.location.href = 'dashboard.html?role=admin';
    } else if (username === 'manager' && password === 'manager') {
        window.location.href = 'dashboard.html?role=manager';
    } else if (username === 'staff' && password === 'staff') {
        window.location.href = 'dashboard.html?role=staff';
    } else {
        alert('Invalid username or password');
    }
});
