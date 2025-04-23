const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');



mobileMenuBtn.addEventListener('click', function () {
    navLinks.classList.toggle('active');
});



const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        console.log('clicked');
    });
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav') && !e.target.closest('.mobile-menu-btn')) {
        navLinks.classList.remove('active');
    }
});
