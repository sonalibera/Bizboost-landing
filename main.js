// Smooth Scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.php-email-form');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form submission for validation

        const name = form.querySelector('input[name="name"]').value;
        const email = form.querySelector('input[name="email"]').value;
        const phone = form.querySelector('input[name="phone"]').value;
        const message = form.querySelector('textarea[name="message"]').value;

        if (name === '' || email === '' || phone === '' || message === '') {
            alert('Please fill out all fields.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Submit the form if all validations pass
        form.submit();
    });

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    }
});

// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.navbar-toggler');
    const menuCollapse = document.querySelector('#navbarNav');

    menuToggle.addEventListener('click', function () {
        menuCollapse.classList.toggle('show');
    });
});
