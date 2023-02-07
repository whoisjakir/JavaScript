const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const value = e.target.innerText;

    const action = button.getAttribute("id");
    if (!isNaN(parseFloat(value))) {
      display.value += value;
    } else if (value === "." && display.value.indexOf(".") === -1) {
      display.value += value;
    } else if (action === "clear") {
      display.value = "";
    } else if (action === "back") {
      display.value = display.value.slice(0, display.value.length - 1);
    } else if (action === "sqrt") {
      display.value = Math.sqrt(display.value);
    } else if (action === "equals") {
      display.value = eval(display.value);
    } else {
      display.value += value;
    }
  });
});