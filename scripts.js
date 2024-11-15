console.log("JavaScript file loaded");

function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting
    alert('Thank you for reaching out! We will contact you shortly.');
}
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    if (navLinks.style.display === 'block') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'block';
    }
}
