// Access the contact form and add a submit event listener
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the form inputs
    const nameInput = document.querySelector('input[name="name"]');
    const emailInput = document.querySelector('input[name="email"]');
    const messageInput = document.querySelector('textarea[name="message"]');

    // Get the values from the inputs
    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;

    // Perform form validation
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill in all fields.'); // Display an alert if any field is empty
        return; // Exit the function
    }

    // Perform any further processing or submit the form to a server
    // You can use AJAX, fetch API, or any other technique to send the form data
    // For this example, we'll simply log the data to the console
    console.log('Form submitted:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Clear the form inputs
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
});
