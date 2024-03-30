function swapCase(inputString) {
    let swappedString = '';
    for (let i = 0; i < inputString.length; i++) {
        const char = inputString[i];
        if (char === char.toUpperCase()) {
            swappedString += char.toLowerCase();
        } else {
            swappedString += char.toUpperCase();
        }
    }
    return swappedString;
}

// Test the function
const inputString = 'The Quick Brown Fox';
const outputString = swapCase(inputString);
console.log(outputString); // Output: 'tHE qUICK bROWN fOX'
