// Handle Button Clicks

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  // Implement the function to change background color
  const colors = [
    'lightblue',
    'lightgreen',
    'lightyellow',
    'lightpink',
    'lavender',
    'peachpuff',
    'mintcream',
    'aliceblue',
    'honeydew',
    'mistyrose',
    'cornsilk'
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}

// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {
  // Implement the function to reset background color
  document.body.style.backgroundColor = 'white';
}

// Capture Keyboard Input

// Function to display the key pressed by the user
function displayKeyPress(event) {
  // Implement the function to display key pressed
  const display = document.getElementById('keyPressDisplay');
  display.textContent = `You pressed: ${event.key}`;
}

// Process Text Input

// Function to display user input in real-time
function displayUserInput() {
  // Implement the function to display user input
  const input = document.getElementById('textInput').value;
  const display = document.getElementById('textInputDisplay');
  display.textContent = input;
}

// Attach Event Listeners

// Attach event listener to change background color when the button is clicked
document
  .getElementById('changeColorButton')
  .addEventListener('click', changeBackgroundColor);

// Attach event listener to reset background color when the body is double-clicked
document
  .getElementById('resetColorButton')
  .addEventListener('dblclick', resetBackgroundColor);

// Attach event listener to display key pressed when a key is pressed down
document.addEventListener('keydown', displayKeyPress);

// Attach event listener to display user input in real-time as they type
document.getElementById('textInput').addEventListener('input', displayUserInput);
