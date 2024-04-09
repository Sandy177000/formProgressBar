const inputs = document.querySelectorAll(".answer");
const screens = document.querySelectorAll(".container");

let screen = -1;

const totalInputs = inputs.length;

inputs.forEach((input) => {
  input.addEventListener("input", updateProgressBar);
});

function updateProgressBar() {
  let filledInputs = 0;

  inputs.forEach((input) => {
    if (input.type === "text") {
      if (input.value.length < 3) {
      } else {
        filledInputs++;
      }
    } else if (input.type === "select-one" && input.value !== "") {
      filledInputs++;
    } else if (input.type === "radio" && input.checked) {
      filledInputs++;
    }
  });

  const progressPercentage = (filledInputs / totalInputs) * 100;

  const progressBar = document.getElementById("progress-bar");
  progressBar.style.width = progressPercentage + "%";
  console.log(progressPercentage)
  if(Math.ceil(progressPercentage)>=34){
    if(screen===0)
        NextScreen();
  }
  if(Math.ceil(progressPercentage)>=67){
    if(screen===1)
        NextScreen();
  }
}

function NextScreen() {
  screen++;
  screens.forEach((scr, index) => {
    if (screen === index) scr.style.display = "flex";
    else scr.style.display = "none";
  });
}

function prevScreen() {
  screen--;
  screens.forEach((scr, index) => {
    if (screen === index) scr.style.display = "flex";
    else {
        scr.style.display = "none";
        if(index>screen){
            scr.reset(); // reducing progresspercentage to avoid jumping next screen
        }
    }
  });
}
document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', function(event) {
    event.preventDefault();
  });
});


if (screen == -1) NextScreen();
