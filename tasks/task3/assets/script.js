// attempts declared
let attempt = 3;
// random number range declared
const min = 1;
const max = 20;
// generating a random number
const RandomNumber = Math.floor(Math.random() * max) + min;
console.log(RandomNumber);
// extracting userInput from inputbox
const userInput = document.getElementById("inputBox");
let result = document.getElementById("result");
let button = document.querySelector("#button");

let isGameOver = false;
function render() {
  // Truthy or Falsy values
  if (isGameOver) {
    // Game OVer, Reload the page
    location.reload();
    return;
  }

  // Regix == Pattern matching
  // adarshchak108@gmail.com

  // Number  1 - 20;
  // <li>Tomato</li> <li>Potatoes</li>

  let userNumber = userInput.value;
  if (userNumber < min || userNumber > max) {
    result.innerText = "invalid Output";
    userInput.classList.add("invalidInput");
    result.classList.add("invalid");
    return;
  }
  // Check attempts
  if (attempt == 1) {
    result.innerHTML = `<h2>Noob!<h2/> <p style="font-size: large;">The Correct Number was ${RandomNumber}</p>`;
    button.innerText = "Play Again";
    isGameOver = true;
    return;
  }

  if (userNumber == RandomNumber) {
    result.innerText = `You won! The number was ${RandomNumber}`;
    result.classList.add("correct");
    return;
  } else {
    console.log("Attempt:- " + attempt);
    attempt--;
    console.log("Attempt:- " + attempt);
    if (userNumber > RandomNumber) {
      result.innerText = `So Close! Correct number is lower than your current guess. You have ${attempt} attempts remaining.`;
    }
    if (userNumber < RandomNumber) {
      result.innerText = `So Close! Correct number is higher than your current guess. You have ${attempt} attempts remaining.`;
    }
  }
}
