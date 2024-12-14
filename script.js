document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Real-time email validation
    const emailFeedback = document.getElementById('email-feedback');
    const passwordFeedback = document.getElementById('password-feedback');

    if (!validateEmail(email)) {
        emailFeedback.classList.remove('hidden');
        return;
    } else {
        emailFeedback.classList.add('hidden');
    }

    // Real-time password validation
    if (password.length < 6) {
        passwordFeedback.classList.remove('hidden');
        return;
    } else {
        passwordFeedback.classList.add('hidden');
    }

    // Simulate server check with fetch
    fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Login successful!");
            window.location.href = "index.html";  // Redirect to the main page
        } else {
            alert("Invalid email or password. Please try again.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Login failed. Please try again later.");
    });
});

function validateEmail(email) {
    // Basic email validation (can be expanded if needed)
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}

// Toggle FAQ visibility
document.getElementById('toggle-faq').addEventListener('click', function () {
    const moreFaqs = document.getElementById('more-faqs');
    const button = this;

    if (moreFaqs.classList.contains('hidden')) {
        moreFaqs.classList.remove('hidden');
        button.textContent = '▲ Show Less';
    } else {
        moreFaqs.classList.add('hidden');
        button.textContent = '▼ Show More';
    }
});
