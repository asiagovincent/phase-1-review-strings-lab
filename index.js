// Write your code in this file!


// Define the currentUser variable
const currentUser = 'Grace Hopper';

// Create the welcomeMessage using template literal
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

// Create the excitedWelcomeMessage by converting welcomeMessage to uppercase
const excitedWelcomeMessage = welcomeMessage.toUpperCase();

// Create the shortGreeting by taking the first character of currentUser
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;

// Test the code
console.log(welcomeMessage); // Should display "Welcome to Flatbook, Grace Hopper!"
console.log(excitedWelcomeMessage); // Should display "WELCOME TO FLATBOOK, GRACE HOPPER!"
console.log(shortGreeting); // Should display "Welcome, G!"
