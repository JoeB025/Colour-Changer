// Method 2. 


// Get the button element
const getColour = document.getElementById('colour-button');

// Add a click event listener to the button
getColour.addEventListener('click', function() {
  // Change the background color when the button is clicked
  document.body.style.backgroundColor = changeColour();
});

// Function to change the background color
function changeColour() {
  // Generate a random number between 0 and 1
  let number = Math.random();

  // Array of colors
  const colours = [
    'blue', 'green', 'red', 'yellow', 'orange', 'purple', 'cyan', 'magenta', 
    'rgb(0, 100, 200)', 'rgb(100, 100, 100)'
  ];

  // Determine the index in the colors array based on the random number
  let index = Math.floor(number * colours.length);
  // used Math.floor to ensure the number rounds down, thus being able to get the numbers 0-9 rather than 1-10


  // Return the color at the determined index
  return colours[index];
}
