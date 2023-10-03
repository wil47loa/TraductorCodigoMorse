


const morseToChar = {
    ".-": "A", "-...": "B", "-.-.": "C", "-..": "D", ".": "E",
    "..-.": "F", "--.": "G", "....": "H", "..": "I", ".---": "J",
    "-.-": "K", ".-..": "L", "--": "M", "-.": "N", "---": "O",
    ".--.": "P", "--.-": "Q", ".-.": "R", "...": "S", "-": "T",
    "..-": "U", "...-": "V", ".--": "W", "-..-": "X", "-.--": "Y",
    "--..": "Z", 
    
    "-----": "0", ".----": "1", "..---": "2", "...--": "3",
    "....-": "4", ".....": "5", "-....": "6", "--...": "7", "---..": "8",
    "----.": "9"
};

const charToMorse = {
    "A": ".-", "B": "-...", "C": "-.-.", "D": "-..", "E": ".",
    "F": "..-.", "G": "--.", "H": "....", "I": "..", "J": ".---",
    "K": "-.-", "L": ".-..", "M": "--", "N": "-.", "O": "---",
    "P": ".--.", "Q": "--.-", "R": ".-.", "S": "...", "T": "-",
    "U": "..-", "V": "...-", "W": ".--", "X": "-..-", "Y": "-.--",
    "Z": "--..",
    
    "0": "-----", "1": ".----", "2": "..---", "3": "...--",
    "4": "....-", "5": ".....", "6": "-....", "7": "--...", "8": "---..",
    "9": "----."
};

function translateToMorse() {
    const message = document.getElementById('message').value.toUpperCase();
    const morseResult = [];
    for (const char of message) {
        if (char === ' ') {
            morseResult.push(' ');
        } else {
            const morseChar = charToMorse[char];
            if (morseChar) {
                morseResult.push(morseChar);
            }
        }
    }
    document.getElementById('result').value = morseResult.join(' ');
}

function translateToText() {
    const morseCode = document.getElementById('message').value.split(' ');
    const textResult = [];
    for (const morseChar of morseCode) {
        if (morseChar === '') {
            textResult.push(' ');
        } else {
            const char = morseToChar[morseChar];
            if (char) {
                textResult.push(char);
            }
        }
    }
    document.getElementById('result').value = textResult.join('');
}