window.onload = function () {
  let display = document.querySelector(".output-number");
  let operators = ["*", "/", "x", "-", "+", "="];
  let output = "";
  let buttons = document.querySelectorAll(".calculator-btn");

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

  addToggleClasses();

  /* Function to perform calculations with various button clicks */
  let calculate = (btnValue) => {
    switch (btnValue) {
      case "=":
        if (output !== "") {
          output = eval(output);
          if (
            Number.isFinite(output) &&
            output % 1 !== 0 &&
            output.toString().split(".")[1].length > 5
          ) {
            output = output.toFixed(5);
          }
        }
        break;
      case "RESET":
        output = "0";
        break;
      case "DEL":
        output = output.toString().slice(0, -1);
        break;

      default:
        if (operators.includes(btnValue)) {
          if (output === "" || operators.includes(output.slice(-1))) {
            return;
          }
        }
        output += btnValue;
        break;
    }
    display.textContent = output || 0;
  };

  /*Add a click event listener to each button that calls the calculate function */
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      calculate(e.target.textContent);
    });
  });
};
