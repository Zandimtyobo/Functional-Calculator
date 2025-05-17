// Get display and all buttons
const display = document.getElementById("user-input");
const buttons = document.querySelectorAll("button");

let currentInput = "0";

// Update display
function updateDisplay() {
    display.value = currentInput;
}

// Handle button clicks
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "AC") {
            currentInput = "0";
        } else if (value === "DEL") {
            currentInput = currentInput.slice(0, -1) || "0";
        } else if (value === "=") {
            try {
                currentInput = eval(currentInput).toString();
            } catch {
                currentInput = "Error";
            }
        } else {
            if (currentInput === "0" || currentInput === "Error") {
                currentInput = value;
            } else {
                currentInput += value;
            }
        }

        updateDisplay();
    });
});
