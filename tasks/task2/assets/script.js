let userInput = document.getElementById("inputBox");
let result = document.getElementById("result");
let controls = document.getElementById("control");
let body = document.querySelector("html");
function verify() {
  let tempVar = userInput.value;
  if (isNaN(tempVar)) {
    userInput.classList.add("invalidInput");
    result.classList.add("invalid");
    result.innerText = "Invalid Input";
    return;
  } else if (tempVar % 2 == 0) {
    // userInput.classList.add("invalid");
    result.innerText = `${tempVar} is Even`;
    userInput.classList.remove("invalidInput");
    result.classList.remove("invalid");
  } else {
    // userInput.classList.add("invalid");
    result.innerText = `${tempVar} is Odd`;
    userInput.classList.remove("invalidInput");
    result.classList.remove("invalid");
  }
}
body.addEventListener("click", function (e) {
  if (e.target.tagName != "BUTTON") {
    userInput.classList.remove("invalidInput");
    result.classList.remove("invalid");
    result.innerText = "";
  }
});
