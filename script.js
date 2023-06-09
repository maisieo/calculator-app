window.onload = function () {
  let display = document.querySelector(".output-number");
  let operators = ["*", "/", "x", "-", "+", "="];
  let output = "";
  let buttons = document.querySelectorAll(".calculator-btn");
  let toggle1 = document.querySelector(".toggle-1");
  let toggle2 = document.querySelector(".toggle-2");
  let toggle3 = document.querySelector(".toggle-3");
  let body = document.querySelector("body");

  toggle1.addEventListener("click", () => {
    body.classList.remove("theme-2", "theme-3");
      body.classList.add("theme-1");
      console.log(body.classList)
  });

  toggle2.addEventListener("click", () => {
    body.classList.remove("theme-1", "theme-3");
    body.classList.add("theme-2");
  });

  toggle3.addEventListener("click", () => {
    body.classList.remove("theme-1", "theme-2");
    body.classList.add("theme-3");
  });

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
