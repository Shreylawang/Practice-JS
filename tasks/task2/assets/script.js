let userInput = document.getElementById("inputBox");
let result = document.getElementById("result");
function verify() {
  let tempVar = userInput.value;
  if (isNaN(tempVar)) {
    userInput.classList.add("invalidInput");
    result.innerText = "Invalid Input";
    return;
  } else if (tempVar % 2 == 0) {
    // userInput.classList.add("invalid");
    result.innerText = `${tempVar} is Even`;
    userInput.classList.remove("invalidInput");
  } else {
    // userInput.classList.add("invalid");
    result.innerText = `${tempVar} is Odd`;
    userInput.classList.remove("invalidInput");
  }
}
