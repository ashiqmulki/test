// Get display element
const display = document.getElementById("display");

// Function to append value
function appendValue(value) {
    display.value += value;
}

// Function to clear display
function clearDisplay() {
    display.value = "";
}

// Function to calculate result
function calculateResult() {
    try {
        display.value = eval(display.value); // ⚡ evaluates math expression
    } catch (error) {
        display.value = "Error";
    }
}
