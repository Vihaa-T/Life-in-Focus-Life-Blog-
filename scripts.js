console.log("JavaScript file loaded");

function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting
    alert('Thank you for reaching out! We will contact you shortly.');
}
function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}
