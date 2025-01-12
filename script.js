document.addEventListener('DOMContentLoaded', function() {
    // Get the modal and button elements
    const addEscortBtn = document.getElementById('addEscortBtn');
    const signupModal = document.getElementById('signupModal');
    const signinModal = document.getElementById('signinModal');
    const closeSignupModal = document.getElementById('closeSignupModal');
    const closeSigninModal = document.getElementById('closeSigninModal');
    const signupForm = document.getElementById('signupForm');
    const signinForm = document.getElementById('signinForm');

    const showSignInLink = document.getElementById('showSignInLink');
    const showSignUpLink = document.getElementById('showSignUpLink');

    // Open the signup modal when the 'Add New Escort' button is clicked
    addEscortBtn.addEventListener('click', function() {
        const isLoggedIn = localStorage.getItem('isLoggedIn'); // Check if user is logged in

        if (isLoggedIn) {
            // If logged in, allow the user to add a listing
            alert("You can now add a new escort!");
        } else {
            // If not logged in, show the signup modal
            signupModal.style.display = 'flex';
        }
    });

    // Close the signup modal
    closeSignupModal.addEventListener('click', function() {
        signupModal.style.display = 'none';
    });

    // Close the signin modal
    closeSigninModal.addEventListener('click', function() {
        signinModal.style.display = 'none';
    });

    // Show Sign In modal when the user clicks on the "Sign In" link
    showSignInLink.addEventListener('click', function(e) {
        e.preventDefault();
        signupModal.style.display = 'none';
        signinModal.style.display = 'flex';
    });

    // Show Sign Up modal when the user clicks on the "Sign Up" link
    showSignUpLink.addEventListener('click', function(e) {
        e.preventDefault();
        signinModal.style.display = 'none';
        signupModal.style.display = 'flex';
    });

    // Handle signup form submission
    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('signupUsername').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;

        if (username && email && password) {
            // Simulate the signup process by saving the user as logged in
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userEmail', email); // Save the user's email (as an example)
            alert('Signup successful! You can now add a listing.');
            signupModal.style.display = 'none'; // Close the signup modal
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Handle signin form submission
    signinForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('signinEmail').value;
        const password = document.getElementById('signinPassword').value;

        // Example: Just check if the user exists in localStorage (you would do this server-side)
        const storedEmail = localStorage.getItem('userEmail');

        if (storedEmail === email) {
            localStorage.setItem('isLoggedIn', 'true');
            alert('Signin successful! You can now add a listing.');
            signinModal.style.display = 'none'; // Close the signin modal
        } else {
            alert('Invalid credentials. Please try again.');
        }
    });
});
