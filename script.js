document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for the call-to-action button
    document.querySelector('.cta-button').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('#contact').scrollIntoView({
            behavior: 'smooth'
        });
    });

    // Form validation and submission
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const formStatus = document.getElementById('form-status');
        
        // Basic validation
        if (name === '' || email === '' || message === '') {
            formStatus.textContent = 'Please fill out all fields.';
            formStatus.style.color = 'red';
            return;
        }
        
        // Dummy submission (replace with actual form submission code)
        formStatus.textContent = 'Thank you for your message. We will get back to you shortly.';
        formStatus.style.color = '#28a745';

        // Reset the form
        document.getElementById('contact-form').reset();
    });
});
