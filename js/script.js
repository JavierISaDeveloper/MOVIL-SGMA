document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('login-btn');
    if (loginButton) {
        loginButton.addEventListener('click', function() {
            const usernameInput = document.getElementById('username-input');
            const passwordInput = document.getElementById('password-input');

            // Check if inputs exist before trying to get their values
            if (!usernameInput || !passwordInput) {
                console.error("Error: Could not find username or password input fields.");
                alert("Error en la interfaz. Por favor, recarga la página.");
                return;
            }

            const email = usernameInput.value.trim(); // Using .trim() to remove whitespace
            const password = passwordInput.value.trim();

            if (email && password) {
                let role = '';

                // Define the regex patterns based on your requirements
                // Assuming 'username-input' will contain the email for role determination
                const studentRegex = /^\d+@ricaldone\.edu\.sv$/;      // e.g., 12345@ricaldone.edu.sv
                const leaderRegex = /^_.*@ricaldone\.edu\.sv$/;       // e.g., _leader@ricaldone.edu.sv
                const coordinatorRegex = /^[^_]+_.*@ricaldone\.edu\.sv$/; // e.g., john_coordinator@ricaldone.edu.sv

                if (studentRegex.test(email)) {
                    role = 'student';
                } else if (leaderRegex.test(email)) {
                    role = 'leader';
                } else if (coordinatorRegex.test(email)) {
                    role = 'coordinator';
                } else {
                    alert('Rol no reconocido. Por favor, verifica tu usuario.');
                    return;
                }

                // Simulate successful login with a dummy check for password
                // In a real application, you would send these credentials to a server
                // and verify them securely.
                if (password === "password123") { // Dummy password for demonstration
                    switch(role) {
                        case 'student':
                            window.location.href = 'estudiante.html'; // Student home page
                            break;
                        case 'leader':
                            window.location.href = 'coordi-index.html'; // Leader home page
                            break;
                        case 'coordinator':
                            window.location.href = 'coordi-index.html'; // Coordinator home page
                            break;
                        default:
                            alert('Un error inesperado ocurrió.');
                    }
                } else {
                    alert('Credenciales incorrectas. Por favor, verifica tu contraseña.');
                }
            } else {
                alert('Por favor, ingresa tus credenciales completas (usuario y contraseña).');
            }
        });
    } else {
        console.error("Error: Login button not found.");
    }

    // Optional: Add functionality for the "seguimiento de vehículo" button
    const vehicleTrackingButton = document.getElementById('vehicle-tracking-btn');
    if (vehicleTrackingButton) {
        vehicleTrackingButton.addEventListener('click', function() {
             window.location.href = 'auth-seguimiento.html';
        });
    }
});