document.addEventListener('DOMContentLoaded', () => {
    // --- FAQ Accordion Logic ---
    const faqBoxes = document.querySelectorAll('.faqbox');

    faqBoxes.forEach(box => {
        const question = box.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close other open boxes
            faqBoxes.forEach(otherBox => {
                if (otherBox !== box && otherBox.classList.contains('active')) {
                    otherBox.classList.remove('active');
                }
            });

            // Toggle current box
            box.classList.toggle('active');
        });
    });

    // --- Sticky Navbar Background ---
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
            nav.style.padding = '10px 0';
            nav.style.height = '70px';
        } else {
            nav.style.backgroundColor = 'transparent';
            nav.style.padding = '0';
            nav.style.height = '80px';
        }
    });

    // --- Form Validation for Email ---
    const getStartedBtn = document.querySelector('.btn-red');
    const emailInput = document.querySelector('.hero-buttons input');

    getStartedBtn.addEventListener('click', (e) => {
        const emailValue = emailInput.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailValue === "") {
            alert("Please enter your email address to get started.");
            emailInput.focus();
        } else if (!emailPattern.test(emailValue)) {
            alert("Please enter a valid email address.");
            emailInput.focus();
        } else {
            alert(`Thanks! We've sent a temporary link to ${emailValue}.`);
            emailInput.value = "";
        }
    });

    // --- Scroll Reveal Animations ---
    const sections = document.querySelectorAll('section, .first');
    
    const observerOptions = {
        threshold: 0.2
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.classList.add('reveal');
        sectionObserver.observe(section);
    });

    // --- Sign In Modal Logic ---
    const modal = document.getElementById('signin-modal');
    const signInBtn = document.getElementById('signin-btn');
    const closeBtn = document.querySelector('.close-modal');

    signInBtn.addEventListener('click', () => {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Stop scrolling when modal is open
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Handle Login Form Submission
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Login functionality would be implemented with a backend. For now, this is a UI demo!');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
});
