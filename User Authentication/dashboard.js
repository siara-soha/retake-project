document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const role = urlParams.get('role');

    const roleInfoElement = document.getElementById('roleInfo');
    const rolePermissionsElement = document.getElementById('rolePermissions');

    if (role === 'admin') {
        roleInfoElement.textContent = 'You are logged in as Administrator';
        rolePermissionsElement.textContent = 'You have full access to inventory management functionalities';
    } else if (role === 'manager') {
        roleInfoElement.textContent = 'You are logged in as Manager';
        rolePermissionsElement.textContent = 'You have restricted access to inventory management';
    } else if (role === 'staff') {
        roleInfoElement.textContent = 'You are logged in as Staff';
        rolePermissionsElement.textContent = 'You have limited access to inventory management';
    } else {
        // Invalid role
        roleInfoElement.textContent = 'Unknown role';
        rolePermissionsElement.textContent = '';
    }
});
