let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  navbar.classList.toggle('active');
};

document.getElementById('contact-form').addEventListener('submit', async function(e) {
    e.preventDefault(); // Prevent default form submission

    let form = e.target;

    // Send the form data to Formspree
    let response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
        document.getElementById('success-message').style.display = 'block'; // Show success
        form.reset(); // Clear the form
    } else {
        alert("❌ Something went wrong, please try again.");
    }
});
