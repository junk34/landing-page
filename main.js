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
  
  