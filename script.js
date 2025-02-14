// Get the buttons
const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');

// Handle "Yes" button click
yesButton.addEventListener('click', () => {
    sessionStorage.setItem("yesClicked", "true"); // Store that "Yes" was clicked

    // Create falling roses
    for (let i = 0; i < 1000; i++) {
        const rose = document.createElement('img');
        rose.src = `./images/rose${Math.floor(Math.random() * 3) + 1}.jpg`; 
        rose.classList.add('rose');
        rose.style.left = `${Math.random() * 1000}vw`; 
        rose.style.animationDuration = `${Math.random() * 3 + 3}s`; 
        document.body.appendChild(rose);
    }

    setTimeout(() => {
        window.location.href = 'yes.html';
    }, 3000); 
});

// Handle "No" button click
noButton.addEventListener('click', () => {
    sessionStorage.setItem("noClicked", "true"); // Store that "No" was clicked

    noButton.style.position = 'absolute';

    // Get viewport dimensions
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Get button size
    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;
    

    // Redirect to "No" page after a delay
    setTimeout(() => {
        window.location.href = 'no.html';
    }, 1000);
});

window.addEventListener("pageshow", function (event) {
    if (event.persisted || window.performance && window.performance.navigation.type === 2) {
        window.location.href = "index.html"; // Force redirect back to index
    }
});