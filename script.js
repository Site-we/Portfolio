// 1. Dynamic Year in Footer
document.getElementById("year").textContent = new Date().getFullYear();

// 2. Sticky Navbar Effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('sticky', window.scrollY > 0);
});

// 3. Mobile Menu Toggle
const menuToggle = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when clicking a link (optional, for better UX)
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// 4. Contact Form Simulation (Since we don't have PHP backend right now)
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Stop page from reloading

    // Get values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Simulate sending data...
    const submitBtn = contactForm.querySelector('button');
    const originalText = submitBtn.innerText;
    
    submitBtn.innerText = "Sending...";
    submitBtn.disabled = true;

    setTimeout(() => {
        alert(`Thanks ${name}! Since this is a static HTML demo, no email was sent.\n\nHowever, on a live server, your message from ${email} would be processed by the PHP backend.`);
        
        // Reset form
        contactForm.reset();
        submitBtn.innerText = "Message Sent!";
        submitBtn.style.background = "#10b981"; // Green color
        
        setTimeout(() => {
            submitBtn.innerText = originalText;
            submitBtn.disabled = false;
            submitBtn.style.background = ""; // Reset color
        }, 3000);
    }, 1500);
});
