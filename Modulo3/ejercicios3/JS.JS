function checkNumber() {
    const input = document.getElementById('userInput').value;
    const result = document.getElementById('result');
    
    // Check if input is a fraction
    const fractionPattern = /^\d+\/\d+$/;
    if (fractionPattern.test(input)) {
        result.textContent = `${input} es un número fraccionario.`;
        return;
    }

    // Convert input to number and check if it's a valid number
    const number = parseFloat(input);
    if (isNaN(number)) {
        result.textContent = `${input} no es un número válido.`;
        return;
    }

    // Check if number is an integer
    if (Number.isInteger(number)) {
        // Check if number is a natural number
        if (number >= 0) {
            result.textContent = `${input} es un número natural.`;
        } else {
            result.textContent = `${input} es un número entero.`;
        }
    } else {
        result.textContent = `${input} es un número decimal.`;
    }
}

