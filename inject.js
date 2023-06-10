console.log("Extension Started !!!");

var interval = setInterval(function(){
    if (registerCodeBoxEventListener()){
        clearInterval(interval);
    }

},500)

// Function to register the event listener
function registerCodeBoxEventListener() {

    var codeBox = document.querySelector("div.view-lines.monaco-mouse-cursor-text");
    if (codeBox){
        // Add event listener for click
        codeBox.addEventListener("click", codeBoxClickListener);
        return true
    }
    return false
}

// Click event listener for the code box
function codeBoxClickListener() {
  logUserAction();
  startTimer();

  // Remove the event listener after it has been called
  var codeBox = document.querySelector("div.view-lines.monaco-mouse-cursor-text");
  codeBox.removeEventListener("click", codeBoxClickListener);
}

// Event handler function
function logUserAction() {
  console.log("User started coding");
}

// Timer function
function startTimer() {
  try {
    const cssSelector = "div[class='css-0'] > div";
    const element = document.querySelector(cssSelector);
    console.log("Starting Timer");
    element.click();
  } catch (error) {
    console.error("An error occurred while starting the timer:", error);
  }
}