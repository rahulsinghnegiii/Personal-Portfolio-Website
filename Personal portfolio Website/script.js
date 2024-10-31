// Form Validation
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (event) {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        // Basic validation
        if (name === "" || email === "" || message === "") {
            alert("Please fill in all required fields.");
            event.preventDefault(); // Prevent form submission
        } else if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            event.preventDefault(); // Prevent form submission
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Wait for the window to load completely
window.addEventListener('load', function() {
    // Select the loading screen and the body
    const loadingScreen = document.getElementById('loading');
    const body = document.body;

    // Set a timeout to allow the loading screen animation to finish before hiding it
    setTimeout(() => {
        loadingScreen.classList.add('fade-out'); // Start fade-out animation for loading screen

        // After the fade-out animation completes, show the body content smoothly
        setTimeout(() => {
            loadingScreen.style.display = 'none'; // Remove the loading screen from view
            body.classList.add('visible'); // Show the website content
        }, 1500); // Adjust this time to match the fade-out animation duration
    }, 1000); // Adjust this delay based on the length of your loading animation
});

