// script.js

// Smooth scroll to the "About Us" section
document.getElementById('learn-more').addEventListener('click', function() {
    const aboutSection = document.getElementById('about');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  });
  
  // Add dynamic greeting based on the time of day
  function updateGreeting() {
    const header = document.querySelector('header h1');
    const hours = new Date().getHours();
    let greeting;
  
    if (hours < 12) {
      greeting = 'Good Morning, Welcome to';
    } else if (hours < 18) {
      greeting = 'Good Afternoon, Welcome to';
    } else {
      greeting = 'Good Evening, Welcome to';
    }
  
    header.innerHTML = `${greeting} <span>LastBite</span>`;
  }
  
  updateGreeting();
  
  // Show alert when clicking feature cards
  document.querySelectorAll('.feature').forEach(card => {
    card.addEventListener('click', () => {
      alert('Thanks for learning more about LastBite!');
    });
  });
  

  // Retailers
  // retailer.js

// Smooth scroll to signup section when "Sign Up Now" button is clicked
document.getElementById('start-now').addEventListener('click', function() {
  alert("Thank you for your interest! Signup functionality is coming soon.");
});

// Dynamic welcome message based on time of day
function updateHeader() {
  const headerMessage = document.querySelector('header h1');
  const hours = new Date().getHours();
  let greeting;

  if (hours < 12) {
    greeting = 'Good Morning, Retailers!';
  } else if (hours < 18) {
    greeting = 'Good Afternoon, Retailers!';
  } else {
    greeting = 'Good Evening, Retailers!';
  }

  headerMessage.innerText = greeting + ' Join LastBite';
}

updateHeader();




// consumer.js

// Smooth scroll to signup section when button clicked
document.getElementById('sign-up').addEventListener('click', function() {
  alert("Thanks for your interest! Signup functionality is coming soon.");
});

// Dynamic Welcome Message based on Time of Day
function updateHeaderMessage() {
  const headerMessage = document.querySelector('header h1');
  const hours = new Date().getHours();
  let greeting;

  if (hours < 12) {
    greeting = 'Good Morning, Shoppers!';
  } else if (hours < 18) {
    greeting = 'Good Afternoon, Shoppers!';
  } else {
    greeting = 'Good Evening, Shoppers!';
  }

  headerMessage.innerText = `${greeting} Start Saving with LastBite`;
}

updateHeaderMessage();

  