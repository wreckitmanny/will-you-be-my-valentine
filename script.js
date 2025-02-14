// Get the buttons
const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');

// Handle "Yes" button click
yesButton.addEventListener('click', () => {
    // Create falling roses
    for (let i = 0; i < 50; i++) { // Create 20 roses
      const rose = document.createElement('img');
      rose.src = `./images/rose${Math.floor(Math.random() * 3) + 1}.jpg`; // Random rose image
      rose.classList.add('rose');
      rose.style.left = `${Math.random() * 100}vw`; // Random horizontal position
      rose.style.animationDuration = `${Math.random() * 3 + 3}s`; // Random fall speed
      document.body.appendChild(rose);
    }
  
    // Redirect to the "Yes" page after a short delay
    setTimeout(() => {
      window.location.href = 'yes.html';
    }, 3000); // 3-second delay before redirecting
  });

noButton.addEventListener('click', () => {
  alert("Are you sure? Maybe give it another thought! 😊");
  noButton.style.position = 'absolute';
  noButton.style.left = `${Math.random() * 90 + 10}%`;
  noButton.style.top = `${Math.random() * 80 + 10}%`;
  setTimeout(() => {
    window.location.href = 'no.html';
  }, 5000); // 3-second delay before redirecting
});