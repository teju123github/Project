
  document.addEventListener('DOMContentLoaded', function () {
    const newsletterForm = document.querySelector('.newsletter form');
    const emailInput = document.querySelector('.newsletter form input');
    const confirmationMessage = document.createElement('p');

    confirmationMessage.className = 'confirmation-message';
    newsletterForm.appendChild(confirmationMessage);

    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const emailValue = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (emailValue === '' || !emailRegex.test(emailValue)) {
        confirmationMessage.textContent = 'Please enter a valid email address.';
        confirmationMessage.style.color = 'red';
      } else {
    
        confirmationMessage.textContent = 'Thank you for subscribing!';
        confirmationMessage.style.color = 'green';
        emailInput.value = '';
      }
    });
  });

  
  const addToBagButtons = document.querySelectorAll('.added_to_bag');

  
  addToBagButtons.forEach(button => {
    button.addEventListener('click', () => {
      
      button.textContent = 'Added to Bag';

      
    })
})