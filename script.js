window.onload = function () {
  let display = document.querySelector(".output-number");
  let operators = ["*", "/", "x", "-", "+", "="];
  let output = "";
  let buttons = document.querySelectorAll(".calculator-btn");

  // Function to add toggle classes and classes to body
  let addToggleClasses = () => {
    let inputs = document.querySelectorAll("input");
    inputs.forEach((input, index) => {
      let toggleClass = `toggle-${index + 1}`;
      let themeClass = `theme-${index + 1}`;
      input.classList.add(toggleClass);
      input.addEventListener("click", () => {
        document.body.classList.remove(...document.body.classList);
        document.body.classList.add(themeClass);
      });
    });
  };
// Call the addToggle function
  addToggleClasses();

  /* Function to perform calculations with various button clicks */
  let calculate = (btnValue) => {
    switch (btnValue) {
      //If the "=" button is clicked, evaluate the expression in output variable
      case "=":
        if (output !== "") {
          output = eval(output);
          //If result is a decimal with more than 5 decimal places, round to 5 decimal places
          if (
            Number.isFinite(output) &&
            output % 1 !== 0 &&
            output.toString().split(".")[1].length > 5
          ) {
            output = output.toFixed(5);
          }
        }
        break;
      //If "RESET" is clicked, reset output to "0"
      case "RESET":
        output = "0";
        break;
      //If "DEL" is clicked, remove last character from output vaiable
      case "DEL":
        output = output.toString().slice(0, -1);
        break;
        //Check operator that is clicked is not first character in output variable
      default:
        if (operators.includes(btnValue)) {
          if (output === "" || operators.includes(output.slice(-1))) {
            return;
          }
        }
        //if it isn't, add clicked button to output variable
        output += btnValue;
        break;
    }
    //Update the display with the current
    display.textContent = output || 0;
  };

  /*Add a click event listener to each button that calls the calculate function */
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      calculate(e.target.textContent);
    });
  });
};
