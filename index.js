// Method 1 


// Get the button element
const getColour = document.getElementById('colour-button');

// Add a click event listener to the button
getColour.addEventListener('click', function() {
  let backgroundColour = changeColour();
  // Change the background color when the button is clicked
  document.body.style.backgroundColor = backgroundColour;
});



function changeColour() {
  let number = Math.random().toFixed(2);
  // generate a random number from 0 to 0.99 

if (number < 0.1) {
  let backgroundColour = 'blue'
  return backgroundColour
} else if (number >= 0.1 && number < 0.2) {
  let backgroundColour = 'green'
  return backgroundColour
} else if (number >= 0.2 && number < 0.3) {
  let backgroundColour ='red'
  return backgroundColour
} else if (number >= 0.3 && number < 0.4) {
  let backgroundColour = 'yellow'
  return backgroundColour
} else if (number >= 0.4 && number < 0.5) {
  let backgroundColour = 'orange'
  return backgroundColour
} else if (number >= 0.5 && number < 0.6) {
  let backgroundColour = 'purple'
  return backgroundColour
} else if (number >= 0.6 && number < 0.7) {
  let backgroundColour = 'cyan'
  return backgroundColour
} else if (number >= 0.7 && number < 0.8) {
  let backgroundColour ='magenta'
  return backgroundColour
} else if (number >= 0.8 && number < 0.9) {
  let backgroundColour = 'rgb(0, 100, 200)'
  return backgroundColour
} else {
  let backgroundColour = 'rgb(100, 100, 100)'
  return backgroundColour
}

// if statement returns a different colour based on the number generated from Math.random()
}